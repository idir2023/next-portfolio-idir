import AppSection from '../components/molecules/AppSection';
import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import USER from '../data/user.json';

const getIconColor = (platform) => {
  switch (platform) {
    case 'Instagram':
      return 'bg-pink-500 text-white'; // Instagram's brand color
    case 'WhatsApp':
      return 'bg-green-500 text-white'; // WhatsApp's brand color
    case 'GitHub':
      return 'bg-black text-white'; // GitHub's brand color
    case 'Gmail':
      return 'bg-red-500 text-white'; // Gmail's brand color
    case 'Location':
      return 'bg-black text-white'; // Location's color
    case 'Linkedin':
      return 'bg-blue-700 text-white'; // LinkedIn's brand color
    default:
      return 'bg-primary text-white'; // Default if no specific color
  }
};


const Contact = () => (
  <AppShell
    title={`Idir Lahcen | ${USER.contact.title}`}
    description={USER.contact.description}
    keyword="contact me, contact, social media"
    cta={false}
  >
    <AppHeader
      title={USER.contact.title}
      description={USER.contact.description}
    />
    <AppSection title="Connect With Me">
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

export default Contact;
