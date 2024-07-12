import project2 from '../assets/img/project2.jpg';

export default function Project2() {
  return (
    <div className='project__container'>
      <section className='project'>
        <article className='project__img__wrapper'>
          <img src={project2} alt='project1 image' className='project__img' />
        </article>
        <article className='project__description__wrapper'>
          <div className='project__description'>
            <h2 className='project__description__title'>
              나의 두번째 프로젝트
            </h2>
            <div>
              <p className='project__description__skills'>
                자바스크립트 + 타입스크립트
              </p>
              <p className='project__description__skills'>제너릭 사용</p>
              <p className='project__description__skills'>ES6 문법 활용</p>
              <p className='project__description__skills'>비동기 문법 활용</p>
              <p className='project__description__skills'>API Fetch 사용</p>
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
