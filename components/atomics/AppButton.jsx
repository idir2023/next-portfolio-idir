import PropTypes from 'prop-types';
import Link from 'next/link';

const AppButton = ({ title, href, className, download }) => {
  return download ? (
    <a
      href={href}
      className={`inline-block w-max p-2 mt-6 border border-light-gray ${className}`}
      download
    >
      <span
        className={`inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold py-3 px-9 bg-primary hover:bg-black text-white hover:text-white transition duration-300`}
      >
        {title}
      </span>
    </a>
  ) : (
    <Link
      href={href}
      className={`inline-block w-max p-2 mt-6 border border-light-gray ${className}`}
    >
      <span
        className={`inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold py-3 px-9 bg-primary hover:bg-black text-white hover:text-white transition duration-300`}
      >
        {title}
      </span>
    </Link>
  );
};

AppButton.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  download: PropTypes.bool,
};

AppButton.defaultProps = {
  title: 'BUTTON',
  href: '/',
  className: '',
  download: false,
};

export default AppButton;
