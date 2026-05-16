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
          <div className="flex flex-wrap gap-4 justify-center">
            <AppButton title={t('common.sayHola')} href="/contact" />
            <a
              href="/projects"
              className="px-6 py-3 rounded-full border border-white/20 text-light hover:bg-white/10 transition-all duration-300"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCtaSection;