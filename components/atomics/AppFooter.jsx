import USER from '../../data/user.json';
import { useLanguage } from '../../context/LanguageContext';

const AppFooter = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 mt-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="text-light font-semibold">{USER.name}</span>
          </div>

          <p className="text-muted text-sm">
            {t('common.designBy')} <span className="text-light">{t('common.techStack')}</span>
          </p>

          <p className="text-muted text-sm">
            {t('common.copyright')} {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;