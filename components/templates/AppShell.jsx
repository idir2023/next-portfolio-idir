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

const AppShell = ({ title, keyword, description, hero, cta, children }) => {
  const { t } = useLanguage();

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

      <Link
        href="/contact"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full btn-gradient text-white flex items-center justify-center shadow-xl shadow-primary/30 hover:shadow-primary/50 floating-cta lg:hidden"
        aria-label={t('common.contact')}
      >
        <i className="fas fa-comment-dots text-xl" />
      </Link>
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
