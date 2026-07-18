import Link from 'next/link';
import USER from '../../data/user.json';
import { useLanguage } from '../../context/LanguageContext';

const AppFooter = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.04] pt-16 pb-8 mt-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <span className="text-white font-bold">I</span>
              </div>
              <span className="text-lg font-bold text-light">{USER.name}</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://github.com/idir2023" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-surface/50 border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all">
                <i className="fab fa-github text-sm" />
              </a>
              <a href="https://www.linkedin.com/in/lahcen-i-99270b309/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-surface/50 border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all">
                <i className="fab fa-linkedin-in text-sm" />
              </a>
              <a href="https://wa.me/+212681736149" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-surface/50 border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all">
                <i className="fab fa-whatsapp text-sm" />
              </a>
              <a href="https://www.instagram.com/idir_lh/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-surface/50 border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all">
                <i className="fab fa-instagram text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-light uppercase tracking-widest mb-5">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {[
                { url: '/', label: t('nav.home') },
                { url: '/projects', label: t('nav.projects') },
                { url: '/blog', label: t('nav.blog') },
                { url: '/experiences', label: t('nav.experiences') },
                { url: '/about', label: t('nav.about') },
                { url: '/contact', label: t('nav.contact') },
              ].map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="text-muted text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-light uppercase tracking-widest mb-5">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              {USER.contact.contents.slice(0, 3).map((item) => (
                <li key={item.id}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted text-sm hover:text-primary transition-colors">
                    <i className={`${item.icon} w-4 text-center text-xs`} />
                    {item.username}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="separator-gradient mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            {t('footer.copyright')} {currentYear} {USER.name}. {t('footer.rights')}
          </p>
          <p className="text-muted text-xs">
            {t('footer.builtWith')} <span className="text-light/60">Next.js</span> & <span className="text-light/60">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
