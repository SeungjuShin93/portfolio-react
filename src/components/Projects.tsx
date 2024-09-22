import project from '../assets/img/project.png';
import styles from '../assets/css/section/projects.module.css';

export default function Projects() {
  return (
    <div className={`container ${styles.projects__container}`} id='projects'>
      <section className={styles.project}>
        <img
          src={project}
          alt='project image'
          className={styles.project__img}
        />
        <div className={styles.project__description}>
          <h2>제이스 장난감 백화점</h2>
          <p>주요 스택 : React + TypeScript</p>
          <p>
            쇼핑몰에서 소비하는 시간을 줄이고, 사용자 경험을 향상시킬 수 있는
            효율적인 웹사이트를 만들고 싶어서 소비자가 쉽고 빠르게 다양한
            장난감을 찾아보고 구매할 수 있게 하자는 목적을 가지고
            제작하였습니다.
          </p>
          <p>
            요구사항 분석부터 시작하여 플로우차트를 및 와이어프레임을 구성하고
            직접 디자인하였습니다. 기능으로는 회원가입, 로그인, 상품 검색 기능,
            필터링 기능, 장바구니 및 찜 목록 추가, 리뷰작성, 중고상품, 회원수정
            기능, 결제 기능을 만들었으며 보다 더 자세한 내용은 아래 깃허브
            버튼을 꼭 클릭하여 주세요!!
          </p>
          <button className={styles.project__button}>
            깃허브 (현재 배포 준비 중입니다.)
          </button>
        </div>
        <img
          src={project}
          alt='project image'
          className={styles.project__img}
        />
      </section>
    </div>
  );
}
