/* eslint-disable react/prop-types */
import check from "../../assets/images/icon-check.svg";
import styles from "./styles.module.css";

const TodoCard = ({ text, onCheck, onDelete, theme }) => {
  const cross = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
      <path
        fill={theme ? "#25273c" : "#9394a5"}
        fillRule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>
  );

  return (
    <div className={theme ? styles.cardContainer : styles.cardDark}>
      <div className={styles.auxContainer}>
        <button className={styles.check} onClick={onCheck}>
          <img src={check} alt="Check" />
        </button>
        <p>{text}</p>
      </div>
      <button className={styles.cross} onClick={onDelete}>
        {cross}
      </button>
    </div>
  );
};

export default TodoCard;
