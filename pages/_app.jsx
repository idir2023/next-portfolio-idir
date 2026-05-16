import { useEffect } from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      import('../lib/firebase').then((firebase) => {
        if (firebase.analytics) {
          firebase.analytics();
        }
      });
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
