import PropTypes from 'prop-types';


const BtnBeneficios = ({ children }) => {
    return (
      <a className="btnBeneficios roboto-regular sc-fz-16" target="_self" rel="button">
        {children}
      </a>
    );
  };

  BtnBeneficios.propTypes = {
    children: PropTypes.node.isRequired
  };

  export default BtnBeneficios; 