import PropTypes from 'prop-types';
// import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <div>{children}</div>
    {/* <Footer /> */}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
