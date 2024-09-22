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
            다양한 분야에서 쌓은 경험을 통해 문제 해결력과 소통 능력을
            키웠습니다. 이러한 역량이 프론트엔드 개발자로서 적합하다고 판단하여
            이 길을 선택하게 되었습니다. 특히, 개발자들이 서로 지식을 공유하며
            함께 성장하는 문화에 매료되어, 사용자에게 더 만족스러운 경험을
            제공하는 웹사이트를 개발하고, 팀과 함께 의미 있는 성과를 이루어 더
            큰 가치를 창출하는 개발자로 성장하고자 합니다.
          </p>
        </div>
      </section>
    </div>
  );
}
