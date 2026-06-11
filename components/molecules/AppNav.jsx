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
      setIsActiveNav(pageScrollPosition >= 50);
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

  useEffect(() => {
    setIsActiveToggler(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isActiveNav
          ? 'bg-dark/90 backdrop-blur-xl border-b border-white/[0.05] shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between h-16 lg:h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link href="/" className={`flex items-center gap-2.5 group ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <div>
              <span className="text-xl font-bold text-light group-hover:text-primary transition-colors">
                Idir
              </span>
              <span className="hidden sm:inline text-xs text-muted ml-1 font-light">Lahcen</span>
            </div>
          </Link>

          <div className={`hidden lg:flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`} style={{ gap: '0.5rem' }}>
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

          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-gradient text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              <i className="fas fa-rocket text-xs" />
              {t('common.hireMe')}
            </Link>

            <AppLanguageSwitcher />

            <button
              onClick={handleToggler}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-all"
              aria-label="Menu"
            >
              <span className={`w-6 h-[2px] bg-light rounded-full transition-all ${isActiveToggler ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`w-6 h-[2px] bg-light rounded-full transition-all ${isActiveToggler ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-[2px] bg-light rounded-full transition-all ${isActiveToggler ? '-rotate-45 -translate-y-[4px]' : ''}`} />
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            isActiveToggler ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className={`flex flex-col gap-1 pt-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            {navItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                onClick={() => setIsActiveToggler(false)}
                className={`px-4 py-3 rounded-xl transition-all ${
                  pathname === item.url
                    ? 'bg-primary/15 text-primary font-medium'
                    : 'text-light/70 hover:bg-white/5 hover:text-light'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsActiveToggler(false)}
              className="mt-2 px-4 py-3 rounded-xl btn-gradient text-white text-center font-semibold"
            >
              <i className="fas fa-rocket text-xs ml-2" />
              {t('common.hireMe')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
