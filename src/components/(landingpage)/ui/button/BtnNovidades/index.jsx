import PropTypes from 'prop-types';

const BtnNovidades = ({ url, children, onClick }) => {
  
    return (
      <a href={url} onClick={onClick} className="btnNovidades sora-medium" target="_blank" rel="button" >
        {children}
      </a>
    );
  };

  BtnNovidades.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  export default BtnNovidades; 