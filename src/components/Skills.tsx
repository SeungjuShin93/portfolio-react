import styles from '../assets/css/section/skills.module.css';

export default function Skills() {
  // title = 'React';
  // title = 'HTML/CSS';
  // title = 'JavaScript';
  // title = 'Lorem';
  return (
    <div className={styles.skills__container} id='skills'>
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
      <div className={styles.skill__title}>Career</div>
      <ul className={styles.skill__description}>
        <li>소프트웨어 공학과 4.37 / 4.50</li>
        <li>복수전공 : 정보보호학과</li>
        <li>코리아IT아카데미 수료</li>
        <li>정보처리기사 자격증</li>
        <li>SQL개발자 자격증</li>
      </ul>
    </section>
  );
}

function Skill2() {
  return (
    <section className={styles.skill}>
      <div className={styles.skill__title}>React</div>
      <ul className={styles.skill__description}>
        <li>Zustand, Context API</li>
        <li>useHook</li>
        <li>최적화</li>
        <li>Routing & Navigation</li>
        <li>Mui, Styled Components</li>
        <li>Form Handling & Validation</li>
      </ul>
    </section>
  );
}

function Skill3() {
  return (
    <section className={styles.skill}>
      <div className={styles.skill__title}>TS/JS</div>
      <ul className={styles.skill__description}>
        <li>React와 함께 TS 사용가능</li>
        <li>제네릭 & 인터페이스</li>
        <li>ES6+ 문법</li>
        <li>비동기 프로그래밍</li>
        <li>클로저 & 스코프</li>
        <li>타입 추론</li>
        <li>API 통합</li>
        <li>모듈 & 임포트</li>
      </ul>
    </section>
  );
}
function Skill4() {
  return (
    <section className={styles.skill}>
      <div className={styles.skill__title}>HTML/CSS</div>
      <ul className={styles.skill__description}>
        <li>HTML과 CSS만으로 복잡한 웹사이트 구현 가능</li>
        <li>반응형 웹 디자인</li>
        <li>Flexbox & Grid</li>
        <li>BEM 방법론 적용 가능</li>
        <li>keyframe</li>
      </ul>
    </section>
  );
}
