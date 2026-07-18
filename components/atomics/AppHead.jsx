import Head from 'next/head';
import PropTypes from 'prop-types';

const SITE_URL = 'https://idir-lahcen.vercel.app';

const AppHead = ({ title = 'Idir Lahcen', description = 'PHP/Laravel Full-Stack Developer from Morocco. I build secure, scalable web applications, REST APIs, SaaS platforms, and ERP systems.', keyword = '', image = '/images/logo.jpg', path = '' }) => {
  const fullTitle = title.includes('|') ? title : `${title} | Idir Lahcen - PHP/Laravel Full-Stack Developer`;
  const url = `${SITE_URL}${path || ''}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={`Idir Lahcen, Laravel developer, PHP developer, full-stack developer, backend developer, Morocco, REST API, SaaS, ERP, web developer morocco, Laravel freelancer, ${keyword}`} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Idir Lahcen" />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#6366F1" />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Idir Lahcen" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
      <meta name="twitter:creator" content="@idir_lh" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Idir Lahcen',
          url: SITE_URL,
          image: `${SITE_URL}/images/logo.jpg`,
          jobTitle: 'PHP/Laravel Full-Stack Web Developer',
          description: 'PHP/Laravel full-stack developer from Morocco. Specializing in REST APIs, SaaS platforms, ERP systems, and custom web applications.',
          sameAs: [
            'https://github.com/idir2023',
            'https://www.linkedin.com/in/lahcen-i-99270b309/',
            'https://wa.me/+212681736149'
          ],
          knowsAbout: ['Laravel', 'PHP', 'MySQL', 'REST API', 'SaaS', 'ERP', 'React', 'Next.js', 'Tailwind CSS'],
          address: { '@type': 'PostalAddress', addressLocality: 'Casablanca', addressCountry: 'MA' }
        })
      }} />

      <meta name="google-site-verification" content="x_NCP81pzq_UseKnMEM1WLiZnzW-zbT8uW-qbscQUJM" />
    </Head>
  );
};

AppHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keyword: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
};

export default AppHead;
