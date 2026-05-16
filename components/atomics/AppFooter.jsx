import USER from '../../data/user.json';
import { useLanguage } from '../../context/LanguageContext';

const AppFooter = () => {
  const { t } = useLanguage();

  const handleCopyrightYears = () => {
    const startYears = '2021';
    const nowYears = new Date().getFullYear();
    const rangeYears =
      startYears === nowYears.toString()
        ? startYears
        : `${startYears} - ${nowYears}`;
    return rangeYears;
  };

  return (
    <footer className="text-center text-xs md:text-md text-gray py-7">
      <p className="mb-1">{t('common.designBy')} &#128149; by {USER.name}</p>
      <p>{t('common.techStack')}</p>
      <p>{t('common.copyright')} &copy; 2024-2026</p>
    </footer>
  );
};

export default AppFooter;
