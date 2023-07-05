import moon from "../../assets/images/icon-moon.svg";
import bgLight from "../../assets/images/bg-mobile-light.jpg";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={bgLight} alt="mountains background" />
      <div className={styles.mode}>
        <h1>TODO</h1>
        <button>
          <img src={moon} alt="moon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
