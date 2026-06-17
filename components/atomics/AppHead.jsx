import Head from 'next/head';
import PropTypes from 'prop-types';

const SITE_URL = 'https://idir-lahcen.vercel.app';

const AppHead = ({ title = 'Idir Lahcen', description = 'Full-stack web developer from Morocco. I build modern web applications with React, Next.js, and Laravel.', keyword = '', image = '/images/logo.jpg', path = '' }) => {
  const fullTitle = title.includes('|') ? title : `${title} | Idir Lahcen - Full-Stack Web Developer`;
  const url = `${SITE_URL}${path || ''}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={`Idir Lahcen, web developer, portfolio, frontend developer, full-stack developer, morocco, laravel, react, next.js, ${keyword}`} />
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
          jobTitle: 'Full-Stack Web Developer',
          description: 'Full-stack web developer from Morocco specializing in React, Next.js, and Laravel.',
          sameAs: [
            'https://github.com/idir2023',
            'https://www.linkedin.com/in/lahcen-idir-99270b309/',
            'https://wa.me/+212681736149'
          ],
          knowsAbout: ['Web Development', 'React', 'Next.js', 'Laravel', 'PHP', 'JavaScript'],
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
