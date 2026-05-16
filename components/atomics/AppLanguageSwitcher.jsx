import { useLanguage } from '../../context/LanguageContext';

const AppLanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'ع' },
  ];

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`w-8 h-8 text-xs font-bold rounded-full transition duration-300 ${
            language === lang.code
              ? 'bg-primary text-white'
              : 'bg-light-gray text-gray hover:bg-primary hover:text-white'
          }`}
          title={lang.label}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default AppLanguageSwitcher;