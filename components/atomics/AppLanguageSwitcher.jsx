import { useLanguage } from '../../context/LanguageContext';

const AppLanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'ar', label: 'AR', flag: '🇲🇦' },
  ];

  return (
    <div className="flex items-center space-x-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2 py-1 text-xs font-medium rounded transition duration-300 ${
            language === lang.code
              ? 'bg-primary text-white'
              : 'text-gray hover:text-primary'
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