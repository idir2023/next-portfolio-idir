import { useState } from 'react';
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

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const mailtoLink = `mailto:lahcenidir700@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setStatus('idle');
  };

  return (
    <div className="glass-premium rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-light mb-2">{t('contact.formTitle')}</h3>
      <p className="text-muted text-sm mb-6">{t('contact.formSubtitle')}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-light/70 mb-1.5">{t('contact.formName')}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.formPlaceholderName')}
              required
              className="w-full px-4 py-2.5 rounded-xl bg-surface/50 border border-white/10 text-sm text-light placeholder-muted/40 focus:outline-none focus:border-primary/40 focus:bg-surface/80 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-light/70 mb-1.5">{t('contact.formEmail')}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.formPlaceholderEmail')}
              required
              className="w-full px-4 py-2.5 rounded-xl bg-surface/50 border border-white/10 text-sm text-light placeholder-muted/40 focus:outline-none focus:border-primary/40 focus:bg-surface/80 transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-light/70 mb-1.5">{t('contact.formSubject')}</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t('contact.formPlaceholderSubject')}
            required
            className="w-full px-4 py-2.5 rounded-xl bg-surface/50 border border-white/10 text-sm text-light placeholder-muted/40 focus:outline-none focus:border-primary/40 focus:bg-surface/80 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm text-light/70 mb-1.5">{t('contact.formMessage')}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contact.formPlaceholderMessage')}
            required
            rows={5}
            className="w-full px-4 py-2.5 rounded-xl bg-surface/50 border border-white/10 text-sm text-light placeholder-muted/40 focus:outline-none focus:border-primary/40 focus:bg-surface/80 transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full px-6 py-3 rounded-xl btn-gradient text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all disabled:opacity-60"
        >
          {status === 'sending' ? (
            <span className="flex items-center justify-center gap-2">
              <i className="fas fa-spinner fa-spin" />
              {t('contact.formSending')}
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <i className="fas fa-paper-plane text-xs" />
              {t('contact.formSend')}
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

const Contact = () => {
  const { t } = useLanguage();

  return (
    <AppShell
      title={`Idir Lahcen | ${t('contact.title')}`}
      description={t('contact.description')}
      keyword="contact me, contact, social media, hire web developer"
      cta={false}
    >
      <AppHeader
        title={t('contact.title')}
        description={t('contact.description')}
        badge={t('contact.badge')}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <ContactForm />
        <div>
          <AppSection title={t('contact.connectWithMe')} subtitle={t('contact.subtitle')} noSeparator>
            <div className="grid grid-cols-2 gap-4">
              {USER.contact.contents.map((item, index) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card p-5 rounded-2xl text-center animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getIconColor(item.name)} flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${item.icon} text-lg text-white`} />
                  </div>
                  <h3 className="text-sm font-semibold text-light mb-1">{item.name}</h3>
                  <p className="text-xs text-muted truncate">{item.username}</p>
                </a>
              ))}
            </div>
          </AppSection>
        </div>
      </div>
    </AppShell>
  );
};

export default Contact;
