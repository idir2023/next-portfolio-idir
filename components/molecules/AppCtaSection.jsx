import Link from 'next/link';
import AppButton from '../atomics/AppButton';
import { useLanguage } from '../../context/LanguageContext';

const AppCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-[2rem] blur-3xl" />

        <div className="relative bg-gradient-to-br from-dark/80 via-surface/50 to-dark/80 backdrop-blur-xl rounded-[2rem] border border-white/[0.06] p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-6">
              <i className="fas fa-handshake text-xs" />
              {t('common.ctaLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-4 leading-tight">
              {t('common.getInTouch')}
            </h2>
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              {t('common.ctaText')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <AppButton
                title={t('common.sayHola')}
                href="/contact"
                variant="gold"
                icon="fas fa-paper-plane"
                className="!mt-0 shadow-lg shadow-accent/20 hover:shadow-accent/40"
              />
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-light font-medium hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <i className="fas fa-folder-open text-primary/70 text-sm group-hover:scale-110 transition-transform duration-300" />
                {t('common.viewWork')}
                <i className="fas fa-arrow-right text-xs opacity-60 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCtaSection;
