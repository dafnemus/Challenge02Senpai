/* eslint-disable react/prop-types */
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import bgLight from "../../assets/images/bg-mobile-light.jpg";
import bgDark from "../../assets/images/bg-mobile-dark.jpg";
import styles from "./styles.module.css";

const Header = ({ onClick, theme }) => {
  return (
    <div className={styles.container}>
      <img src={theme ? bgLight : bgDark} alt="mountains background" />
      <div className={styles.mode}>
        <h1 className={styles.title}>TODO</h1>
        <button onClick={onClick}>
          <img src={theme ? moon : sun} alt="moon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
