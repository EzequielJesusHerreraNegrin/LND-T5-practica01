import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ title, subtitle }) => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <h2 className={styles.headerSubtitle}>{subtitle}</h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Header;
