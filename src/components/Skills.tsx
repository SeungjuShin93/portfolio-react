import styles from '../assets/css/section/skills.module.css';

export default function Skills() {
  // title = 'React';
  // title = 'HTML/CSS';
  // title = 'JavaScript';
  // title = 'Lorem';
  return (
    <div className={`container ${styles.skills__container}`} id='skills'>
      <section className={styles.skills}>
        <Skill1 />
        <Skill2 />
        <Skill3 />
        <Skill4 />
      </section>
    </div>
  );
}

function Skill1() {
  return (
    <section className={styles.skill}>
      <div className={styles.skill__title}>React</div>
      <div className={styles.skill__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        reiciendis possimus dolore inventore sed ipsam, quisquam, vitae nisi
        asperiores assumenda et dolor qui quidem harum doloribus ea vero magnam
        dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        reiciendis possimus dolore inventore sed ipsam, quisquam, vitae nisi
        asperiores assumenda et dolor qui quidem harum doloribus ea vero magnam
        dicta. lo
      </div>
    </section>
  );
}

function Skill2() {
  return (
    <section className={styles.skill}>
      <div className={styles.skill__title}>TS/JS</div>
      <div className={styles.skill__description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        eaque nisi dolores pariatur molestias fugit error perferendis, minus
        animi, obcaecati cupiditate. Quae obcaecati inventore rerum ipsa animi,
        pariatur labore adipisci! dicta.
      </div>
    </section>
  );
}
function Skill3() {
  return (
    <section className={styles.skill}>
      <div className={styles.skill__title}>HTML/CSS</div>
      <div className={styles.skill__description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
    </section>
  );
}
function Skill4() {
  return (
    <section className={styles.skill}>
      <div className={styles.skill__title}>Career</div>
      <div className={styles.skill__description}>
        <p>소프트웨어 공학과 졸업</p>
        <p>코리아IT아카데미 수료</p>
        <p> 정보처리기사 자격증</p>
        <p> SQLD 자격증</p>
      </div>
    </section>
  );
}
