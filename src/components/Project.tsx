import project1 from '../assets/img/project1.jpg';

export default function Project() {
  return (
    <div className='project__container'>
      <section className='project'>
        <article className='project__img__wrapper'>
          <img src={project1} alt='project1 image' className='project__img' />
        </article>
        <article className='project__description__wrapper'>
          <div className='project__description'>
            <h2 className='project__description__title'>
              제이스 장난감 백화점
            </h2>
            <div>
              <p className='project__description__skills'>
                리액트 + 타입스크립트
              </p>
              <p className='project__description__skills'>커스텀 훅 사용</p>
              <p className='project__description__skills'>최적화를 적용</p>
              <p className='project__description__skills'>Postman 사용</p>
              <p className='project__description__skills'>공공 API를 활용</p>
              <p className='project__description__skills'>
                깃허브를 이용한 협업
              </p>
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
