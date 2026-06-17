import Link from 'next/link';
import AppShell from '../components/templates/AppShell';
import { useLanguage } from '../context/LanguageContext';

const Custom404 = () => {
  const { t } = useLanguage();

  return (
    <AppShell
      title={t('notfound.title')}
      description={t('notfound.description')}
      keyword="404, page not found"
      cta={false}
    >
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-lg">
          <div className="relative inline-block mb-8">
            <div className="text-[120px] md:text-[180px] font-bold leading-none">
              <span className="gradient-text">4</span>
              <span className="text-light/10">0</span>
              <span className="gradient-text">4</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
            </div>
          </div>

          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />

          <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
            {t('notfound.message')}
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gradient text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            <i className="fas fa-arrow-left text-xs" />
            {t('notfound.backHome')}
          </Link>
        </div>
      </div>
    </AppShell>
  );
};

export default Custom404;
