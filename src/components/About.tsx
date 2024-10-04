import profile from '../assets/img/profile-noBG.png';
import styles from '../assets/css/section/about.module.css';

export default function About() {
  return (
    <div className={styles.about__container} id='about'>
      <section className={styles.about}>
        <img
          className={styles.about__avatar}
          src={profile}
          alt="Seungju's profile"
        />
        <div className={styles.about__text__box}>
          <h2 className={styles.about__title}>안녕하세요</h2>
          <h2 className={styles.about__title}>
            <span className={styles.about__strong}>프론트엔드 개발자 </span>
            신승주 입니다
          </h2>
        </div>
      </section>
    </div>
  );
}
