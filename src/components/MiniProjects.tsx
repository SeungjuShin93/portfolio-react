import React from 'react';
import project2 from '../assets/img/project2.jpg';
import styles from '../assets/css/section/miniProjects.module.css';
export default function MiniProjects() {
  return (
    <div className={`container ${styles.mini__container}`} id='minis'>
      <div className={styles.mini}>
        <h1 className={styles.mini__section__title}>Mini - Projects</h1>
        <section className={styles.mini__projects__container}>
          <Mini />
          <Mini />
          <Mini />
          <Mini />
          <Mini />
          <Mini />
          <Mini />
          <Mini />
          <Modal />
        </section>
      </div>
    </div>
  );
}

function Mini() {
  return (
    <article className={styles.mini__article}>
      <h3 className={styles.mini__title}>투두리스트</h3>
      <img src={project2} alt='' className={styles.mini__img} />
    </article>
  );
}

function Modal() {
  return (
    <div className={styles.modal__container}>
      <div className={styles.modal}>
        <h2>투두리스트</h2>
      </div>
    </div>
  );
}
