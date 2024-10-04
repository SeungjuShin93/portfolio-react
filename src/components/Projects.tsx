import project from '../assets/img/project.png';
import styles from '../assets/css/section/projects.module.css';

export default function Projects() {
  return (
    <div className={styles.projects__container} id='projects'>
      <section className={styles.project}>
        <img src={project} alt='project' className={styles.project__img} />

        <div className={styles.project__description}>
          <h2>제이스 장난감 백화점</h2>
          <p>주요 스택 : React + TypeScript</p>
          <p>피그마</p>
          <p>
            요구사항 분석
            <br />
            플로우차트를 및 와이어프레임
            <br />
            기능으로는 회원가입, 로그인, 상품 검색 기능, 필터링 기능, 장바구니
            및 찜 목록 추가, 리뷰작성, 중고상품, 회원수정 기능, 결제 기능
          </p>
          <div className={styles.project__button__box}>
            <a
              className={styles.project__button}
              href='https://seungjushin93.github.io/ToyStoreOfJJJ-react-ts/#/'
              target='_blank'
              rel='noopener noreferrer'
            >
              데모 사이트
            </a>
            <a
              className={styles.project__button}
              href='https://github.com/SeungjuShin93/ToyStoreOfJJJ-react-ts'
              target='_blank'
              rel='noopener noreferrer'
            >
              깃허브
            </a>
          </div>
        </div>
        <img src={project} alt='project' className={styles.project__img} />
      </section>
    </div>
  );
}
