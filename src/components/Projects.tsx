import project1 from '../assets/img/project1.jpg';
import styles from '../assets/css/section/projects.module.css';

export default function Projects() {
  return (
    <div className={`container ${styles.projects__container}`} id='projects'>
      <div className={styles.project__container}>
        <Project />
      </div>
    </div>
  );
}

function Project() {
  return (
    <section className={styles.project}>
      <article className={styles.project__img__wrapper}>
        <img
          src={project1}
          alt='project1 image'
          className={styles.project__img}
        />
      </article>
      <article className={styles.project__description__wrapper}>
        <div className={styles.project__description}>
          <h2 className={styles.project__description__title}>
            제이스 장난감 백화점
          </h2>
          <div>
            <p className={styles.project__description__skills}>
              리액트 + 타입스크립트
            </p>
            <p className={styles.project__description__skills}>
              커스텀 훅 사용
            </p>
            <p className={styles.project__description__skills}>최적화를 적용</p>
            <p className={styles.project__description__skills}>Postman 사용</p>
            <p className={styles.project__description__skills}>
              공공 API를 활용
            </p>
            <p className={styles.project__description__skills}>
              깃허브를 이용한 협업
            </p>
            <p className={styles.project__description__summary}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis voluptas nisi similique id ratione deserunt. Dolores
              ipsa neque omnis fuga facere provident, voluptates vitae atque
              ducimus, natus aliquid, nesciunt quis.
            </p>
          </div>
          <div className={styles.project__button__wrapper}>
            <button className={styles.project__button}>데모 사이트</button>
            <button className={styles.project__button}>깃허브</button>
          </div>
        </div>
      </article>
    </section>
  );
}
