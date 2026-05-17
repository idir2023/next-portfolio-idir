import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import AppLanguageSwitcher from '../atomics/AppLanguageSwitcher';

const navItems = [
  { url: '/', key: 'nav.home' },
  { url: '/projects', key: 'nav.projects' },
  { url: '/experiences', key: 'nav.experiences' },
  { url: '/about', key: 'nav.about' },
  { url: '/contact', key: 'nav.contact' },
];

const AppNav = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const [isActiveToggler, setIsActiveToggler] = useState(false);
  const { pathname } = useRouter();
  const { t, isRTL } = useLanguage();

  const handleWindowScroll = () => {
    if (typeof window !== 'undefined') {
      const pageScrollPosition = window.pageYOffset;
      if (pageScrollPosition >= 50) {
        setIsActiveNav(true);
      } else {
        setIsActiveNav(false);
      }
    }
  };

  const handleToggler = (event) => {
    event.preventDefault();
    setIsActiveToggler((prev) => !prev);
    event.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsActiveToggler(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isActiveNav
          ? 'bg-[#0F172A]/95 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between h-16 lg:h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link href="/" className={`flex items-center gap-2 group ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold text-light group-hover:text-primary transition-colors">
              Idir
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`} style={{ gap: '2rem' }}>
            {navItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className={`nav-link ${pathname === item.url ? 'active' : ''}`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <AppLanguageSwitcher />

            {/* Mobile menu button */}
            <button
              onClick={handleToggler}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 bg-light transition-all ${isActiveToggler ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-light transition-all ${isActiveToggler ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-light transition-all ${isActiveToggler ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isActiveToggler ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className={`flex flex-col gap-2 pt-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {navItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                onClick={() => setIsActiveToggler(false)}
                className={`px-4 py-3 rounded-lg transition-all ${
                  pathname === item.url
                    ? 'bg-primary/20 text-primary'
                    : 'text-light/70 hover:bg-[#1E293B] hover:text-light'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;