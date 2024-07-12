import project3 from '../assets/img/project3.jpg';

export default function Project3() {
  return (
    <div className='project__container'>
      <section className='project'>
        <article className='project__img__wrapper'>
          <img src={project3} alt='project1 image' className='project__img' />
        </article>
        <article className='project__description__wrapper'>
          <div className='project__description'>
            <h2 className='project__description__title'>
              나의 세번째 프로젝트
            </h2>
            <div>
              <p className='project__description__skills'>HTML/CSS</p>
              <p className='project__description__skills'>시맨틱 문법</p>
              <p className='project__description__skills'>BEM 적용</p>
              <p className='project__description__skills'>스타일 시트 분리</p>
              <p className='project__description__skills'>HTML5 높은 이해도</p>
              <p className='project__description__summary'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis voluptas nisi similique id ratione deserunt. Dolores
                ipsa neque omnis fuga facere provident, voluptates vitae atque
                ducimus, natus aliquid, nesciunt quis.
              </p>
            </div>
            <div className='project__button__wrapper'>
              <button className='project__button'>데모 사이트</button>
              <button className='project__button'>깃허브</button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
