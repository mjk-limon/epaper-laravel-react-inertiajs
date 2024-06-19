
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import Copyright from "./Copyrite";

function Footer() {
  return (
    <>
      <Copyright />
    </>
  );
}

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
