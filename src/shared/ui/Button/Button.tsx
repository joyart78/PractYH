import styles from "./styles.module.css";

type ButtonProps = {
  cb: () => void;
  text: string;
};

const Button = ({ cb, text }: ButtonProps) => {
  return (
    <button
      className={`${styles.header__button} ${styles.header__buttonRegister}`}
      onClick={cb}
    >
      <span className={styles.header__buttonText}>{text}</span>
    </button>
  );
};

export default Button;
