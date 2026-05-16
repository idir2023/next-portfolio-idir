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
      return 'from-gray-700 to-gray-900';
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
      />
      <AppSection title={t('contact.connectWithMe')}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {USER.contact.contents.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card p-6 rounded-2xl text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getIconColor(item.name)} flex items-center justify-center mb-4 mx-auto`}>
                <i className={`${item.icon} text-xl text-white`} />
              </div>
              <h3 className="text-sm font-semibold text-light mb-1">{item.name}</h3>
              <p className="text-xs text-muted truncate">{item.username}</p>
            </a>
          ))}
        </div>
      </AppSection>
    </AppShell>
  );
};

export default Contact;