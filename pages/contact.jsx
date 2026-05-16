import AppSection from '../components/molecules/AppSection';
import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import USER from '../data/user.json';
import { useLanguage } from '../context/LanguageContext';

const getIconColor = (platform) => {
  switch (platform) {
    case 'Instagram':
      return 'bg-pink-500 text-white';
    case 'WhatsApp':
      return 'bg-green-500 text-white';
    case 'GitHub':
      return 'bg-black text-white';
    case 'Gmail':
      return 'bg-red-500 text-white';
    case 'Location':
      return 'bg-black text-white';
    case 'Linkedin':
      return 'bg-blue-700 text-white';
    default:
      return 'bg-primary text-white';
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
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {USER.contact.contents.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center border border-light-gray rounded-2xl p-6 bg-white shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 rounded-full ${getIconColor(item.name)} grid place-items-center mb-4`}
                >
                  <i className={`${item.icon} text-2xl`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.username}</p>
              </a>
            ))}
          </div>
        </div>
      </AppSection>
    </AppShell>
  );
};

export default Contact;
