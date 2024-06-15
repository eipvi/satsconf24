import PropTypes from 'prop-types';
import Link  from 'next/link';
import "@/app/globals.css";

const BtnIngresso = ({ url, children }) => {
  return (
    <Link href={url} className='btnIngresso sora-medium' target="_self" rel="button">
      {children}
    </Link>
  );
};

BtnIngresso.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BtnIngresso;
