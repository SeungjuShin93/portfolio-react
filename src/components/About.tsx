import profile from '../assets/img/profile-noBG.png';
import styles from '../assets/css/section/about.module.css';

export default function About() {
  return (
    <div className={`container ${styles.about__container} `} id='about'>
      <section className={styles.about}>
        <img
          className={styles.about__avatar}
          src={profile}
          alt="Seungju's profile"
        />
        <div className={styles.about__text__box}>
          <h2 className={styles.about__title}>
            안녕하세요
            <br />
            <strong className={styles.about__title}>신승주</strong>입니다.
          </h2>
          <p className={styles.about__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nam
            omnis dolorem repellendus quaerat exercitationem voluptatibus? Totam
            sit ducimus quae officia voluptatem atque voluptates cupiditate
            quisquam aperiam, asperiores, quam suscipit!
          </p>
        </div>
      </section>
    </div>
  );
}
