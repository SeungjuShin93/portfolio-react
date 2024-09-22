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
        <p>
          쇼핑몰 프로젝트 및 다양한 미니 프로젝트를 개발해 본 경험이 있습니다.
        </p>
        <p>컴포넌트를 단위별로 생성하고 커스터마이즈하는 데 능숙합니다.</p>
        <p>UI를 쉽게 렌더링하고 상태 관리를 효과적으로 처리합니다.</p>
        <p>Zustand를 이용해 전역 상태 관리를 하는데에 익숙합니다.</p>
        <p>
          useEffect 훅을 이용해 불필요한 코드의 반복 렌더링을 방지하는 방법을
          이해하고 있습니다.
        </p>
        <p>최적화 개념을 숙지하고 있습니다.</p>
      </div>
    </section>
  );
}

function Skill2() {
  return (
    <section className={styles.skill}>
      <div className={styles.skill__title}>TS/JS</div>
      <div className={styles.skill__description}>
        <p>
          TypeScript의 목적과 필요성을 잘 이해하고 있으며, React 프로젝트를 만들
          때는 항상 TypeScript를 이용하여 코드를 작성합니다.
        </p>
        <p>기본 타입과 제너릭을 잘 이해하고 있습니다.</p>
        <p>
          JavaScript는 제가 주로 사용하는 언어로, 비동기 처리, 스코프, 클로저 등
          ES6+ 문법에 대한 깊은 이해를 가지고 있습니다.
        </p>
        <p>
          API 호출 및 활용에 익숙하며, 배열과 객체 그리고 클래스를 능숙하게
          다룹니다.
        </p>
      </div>
    </section>
  );
}
function Skill3() {
  return (
    <section className={styles.skill}>
      <div className={styles.skill__title}>HTML/CSS</div>
      <div className={styles.skill__description}>
        <p>
          아무리 복잡한 웹사이트라도 라이브러리 없이 HTML과 CSS만으로 빠른
          시간내에 손쉽게 구축할 수 있는 자신이 있습니다.
        </p>
        <p>HTML과 CSS에 대한 깊은 이해를 하고 있습니다.</p>
        <p>
          특히 순수 CSS에 매우 능숙하며, Flexbox와 Grid도 자유자재로 사용하는데
          익숙하며 반응형 웹 디자인 또한 가능합니다.
        </p>
        <p>
          CSS 프레임 워크로는 Material-UI(Mui)를 사용하여 컴포넌트를 구현하고,
          이를 커스터마이징해본 경험이 있습니다.
        </p>
      </div>
    </section>
  );
}
function Skill4() {
  return (
    <section className={styles.skill}>
      <div className={styles.skill__title}>Career</div>
      <div className={styles.skill__description}>
        <p>소프트웨어 공학과 졸업 (복수전공 : 정보보호학과)</p>
        <p>코리아IT아카데미 수료</p>
        <p>정보처리기사 자격증</p>
        <p>SQL개발자 자격증</p>
      </div>
    </section>
  );
}
