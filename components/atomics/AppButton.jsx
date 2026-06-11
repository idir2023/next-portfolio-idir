import PropTypes from 'prop-types';
import Link from 'next/link';

const AppButton = ({ title, href, className, download, variant, icon }) => {
  const baseClass = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300';

  const variantClass = variant === 'gold'
    ? 'btn-gold text-dark'
    : variant === 'outline'
    ? 'btn-outline text-light'
    : 'btn-gradient text-white';

  const combinedClass = `${baseClass} ${variantClass} ${className}`.trim();

  if (download) {
    return (
      <a href={href} className={combinedClass} download>
        {icon && <i className={`${icon} text-sm`} />}
        {title}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClass}>
      {icon && <i className={`${icon} text-sm`} />}
      {title}
      {!icon && <i className="fas fa-arrow-right text-xs opacity-70 group-hover:translate-x-1 transition-transform" />}
    </Link>
  );
};

AppButton.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  download: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'gold', 'outline']),
  icon: PropTypes.string,
};

AppButton.defaultProps = {
  title: 'BUTTON',
  href: '/',
  className: '',
  download: false,
  variant: 'default',
  icon: null,
};

export default AppButton;
