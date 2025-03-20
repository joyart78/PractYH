import styles from "./styles.module.css";
import { images } from "@/shared/images/images.ts";
import Button from "@/shared/ui/Button/Button.tsx";

const Nav = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <a href="#">
              <img
                className={styles.header__logoImage}
                src={images.Tree}
                alt="Логотип"
              />
              <img
                className={styles.header__logoText}
                src={images.Text}
                alt="Текстовый логотип"
              />
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="#" className={styles.header__link}>
              База вопросов
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="#" className={styles.header__link}>
              Тренажер
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.header__actions}>
        <button className={styles.header__button}>
          <span className={styles.header__buttonText}>Вход</span>
        </button>
        <Button cb={() => console.log("hello")} text={"Регистрация"} />
      </div>
    </div>
  );
};

export default Nav;
