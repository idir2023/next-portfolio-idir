import AppSection from '../components/molecules/AppSection';
import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import USER from '../data/user.json';
import { useLanguage } from '../context/LanguageContext';

const getIconColor = (platform) => {
  switch (platform) {
    case 'Instagram':
      return 'from-pink-500 to-purple-500';
    case 'WhatsApp':
      return 'from-green-400 to-green-600';
    case 'GitHub':
      return 'from-gray-600 to-gray-800';
    case 'Gmail':
      return 'from-red-400 to-red-600';
    case 'Location':
      return 'from-blue-400 to-blue-600';
    case 'Linkedin':
      return 'from-blue-600 to-blue-800';
    default:
      return 'from-primary to-secondary';
  }
};

const Contact = () => {
  const { t } = useLanguage();

  return (
    <AppShell
      title={`Idir Lahcen | ${t('contact.title')}`}
      description={t('contact.description')}
      keyword="contact me, contact, social media"
      cta={false}
    >
      <AppHeader
        title={t('contact.title')}
        description={t('contact.description')}
        badge={t('contact.badge')}
      />
      <AppSection title={t('contact.connectWithMe')} subtitle={t('contact.subtitle')}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {USER.contact.contents.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card p-7 rounded-2xl text-center animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getIconColor(item.name)} flex items-center justify-center mb-5 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${item.icon} text-2xl text-white`} />
              </div>
              <h3 className="text-base font-semibold text-light mb-1.5">{item.name}</h3>
              <p className="text-sm text-muted truncate">{item.username}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-xs text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity">
                {t('contact.getInTouch')}
                <i className="fas fa-arrow-right text-[10px]" />
              </span>
            </a>
          ))}
        </div>
      </AppSection>
    </AppShell>
  );
};

export default Contact;
