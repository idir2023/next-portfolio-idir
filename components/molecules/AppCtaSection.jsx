import Link from 'next/link';
import AppButton from '../atomics/AppButton';
import { useLanguage } from '../../context/LanguageContext';

const AppCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl" />

        <div className="relative bg-surface/50 backdrop-blur-lg rounded-3xl border border-white/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            {t('common.getInTouch')}
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            {t('common.ctaText')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <AppButton title={t('common.sayHola')} href="/contact" className="!mt-0" />
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-light font-medium hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <i className="fas fa-folder-open text-primary text-sm group-hover:scale-110 transition-transform duration-300" />
              {t('common.viewWork')}
              <i className="fas fa-arrow-right text-xs opacity-60 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCtaSection;