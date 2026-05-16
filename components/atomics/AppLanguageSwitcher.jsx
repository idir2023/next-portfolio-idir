import { useLanguage } from '../../context/LanguageContext';

const AppLanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'ع' },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-surface/50 border border-white/10">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
            language === lang.code
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
              : 'text-light/60 hover:text-light hover:bg-white/5'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default AppLanguageSwitcher;