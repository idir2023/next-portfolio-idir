import { useLanguage } from '../../context/LanguageContext';

const AppSignature = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center py-12">
      <p className="text-muted text-sm mb-4">{t('common.warmGreetings')}</p>
      <h3 className="font-signature text-4xl gradient-text">
        Idir Lahcen
      </h3>
    </div>
  );
};

export default AppSignature;