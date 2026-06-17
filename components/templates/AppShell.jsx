import PropTypes from 'prop-types';
import Link from 'next/link';
import AppContainer from '../atomics/AppContainer';
import AppDecoration from '../atomics/AppDecoration';
import AppHead from '../atomics/AppHead';
import AppNav from '../molecules/AppNav';
import AppSide from '../atomics/AppSide';
import AppSignature from '../organisms/AppSignature';
import AppCtaSection from '../molecules/AppCtaSection';
import AppHero from '../molecules/AppHero';
import AppFooter from '../atomics/AppFooter';
import AnimatedBackground from '../atomics/AnimatedBackground';
import { useLanguage } from '../../context/LanguageContext';
import { useEffect, useState } from 'react';

const AppShell = ({ title, keyword, description, hero, cta, children }) => {
  const { t } = useLanguage();
  const [showMobileBar, setShowMobileBar] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setShowMobileBar(currentScroll > 300 && currentScroll > lastScroll);
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <>
      <AppHead title={title} description={description} keyword={keyword} />
      <AnimatedBackground />
      <AppNav />
      <AppDecoration />
      <AppSide />
      {hero && <AppHero />}
      <AppContainer>
        {children}
        <AppSignature />
        {cta && <AppCtaSection />}
        <AppFooter />
      </AppContainer>

      <div className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 lg:hidden ${
        showMobileBar ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="bg-dark/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-3">
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl btn-gradient text-white text-sm font-semibold shadow-lg shadow-primary/20"
            >
              <i className="fas fa-bolt text-xs" />
              {t('common.hireMe')}
            </Link>
            <a
              href="https://wa.me/+212681736149"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 transition-all"
            >
              <i className="fab fa-whatsapp text-lg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

AppShell.propTypes = {
  title: PropTypes.string,
  keyword: PropTypes.string,
  description: PropTypes.string,
  hero: PropTypes.bool,
  cta: PropTypes.bool,
};

AppShell.defaultProps = {
  title: 'Idir Lahcen',
  description: 'I am a software engineer specializing in web development.',
  keyword: '',
  hero: false,
  cta: true,
};

export default AppShell;
