import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
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

  const handleWindowScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsActiveNav(window.pageYOffset >= 50);
    }
  }, []);

  const handleToggler = useCallback(() => {
    setIsActiveToggler((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsActiveToggler(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [handleWindowScroll]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (isActiveToggler) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isActiveToggler]);

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
              className={`lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-all ${
                isActiveToggler ? 'bg-white/5' : ''
              }`}
              aria-label={isActiveToggler ? 'Close menu' : 'Open menu'}
            >
              <span className={`w-6 h-[2px] bg-light rounded-full transition-all duration-300 ${isActiveToggler ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`w-6 h-[2px] bg-light rounded-full transition-all duration-300 ${isActiveToggler ? 'opacity-0 scale-0' : ''}`} />
              <span className={`w-6 h-[2px] bg-light rounded-full transition-all duration-300 ${isActiveToggler ? '-rotate-45 -translate-y-[4px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
        isActiveToggler ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={closeMenu} />
        <div className={`absolute top-20 left-0 right-0 mx-4 transition-all duration-300 ${
          isActiveToggler ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          <div className="glass-premium rounded-2xl p-4 shadow-2xl">
            <div className={`flex flex-col gap-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              {navItems.map((item, i) => (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={closeMenu}
                  className={`px-4 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    pathname === item.url
                      ? 'bg-primary/15 text-primary font-semibold'
                      : 'text-light/70 hover:bg-white/5 hover:text-light'
                  }`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {pathname === item.url && (
                    <span className="w-1 h-4 rounded-full bg-primary" />
                  )}
                  <span>{t(item.key)}</span>
                </Link>
              ))}
              <div className="separator-gradient my-2" />
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-1 px-4 py-3.5 rounded-xl btn-gradient text-white text-center font-semibold flex items-center justify-center gap-2"
              >
                <i className="fas fa-bolt text-xs" />
                {t('common.hireMe')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
