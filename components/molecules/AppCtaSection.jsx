import AppButton from '../atomics/AppButton';
import { useLanguage } from '../../context/LanguageContext';

const AppCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 border-b border-light-gray">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-black">
          {t('common.getInTouch')}
        </h2>
        <p className="text-xs md:text-sm text-gray max-w-[260px] md:max-w-xs mx-auto mt-2">
          {t('common.ctaText')}
        </p>
        <AppButton title={t('common.sayHola')} href="/contact" />
      </div>
    </section>
  );
};

export default AppCtaSection;
