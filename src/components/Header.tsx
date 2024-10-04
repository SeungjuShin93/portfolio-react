import favicon from '../assets/img/favicon.ico';
import styles from '../assets/css/section/header.module.css';

export default function Header() {
  return (
    <div className={styles.header__container} id='header'>
      <header className={styles.header}>
        <div className={styles.header__logo__wrapper}>
          <img className={styles.header__logo__img} src={favicon} alt='logo' />
          <h1 className={styles.header__logo__name}>
            <a href='#'>Seungju Shin</a>
          </h1>
        </div>
        <nav>
          <ul className={styles.header__menu}>
            <li>
              <a
                className={`${styles.header__menu__item} ${styles.active}`}
                href='#about'
              >
                About
              </a>
            </li>
            <li>
              <a className={styles.header__menu__item} href='#skills'>
                Skills
              </a>
            </li>
            <li>
              <a className={styles.header__menu__item} href='#projects'>
                Projects
              </a>
            </li>
            <li>
              <a className={styles.header__menu__item} href='#minis'>
                Minis
              </a>
            </li>
            <li>
              <a className={styles.header__menu__item} href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
