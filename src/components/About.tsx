import profile from '../assets/img/profile-noBG.png';
import '../assets/css/section/about.css';

export default function About() {
  return (
    <div className='about__container container' id='about'>
      <section className='about'>
        <img className='about__avatar' src={profile} alt="Seungju's profile" />
        <div className='about__text__box'>
          <h2 className='about__title'>
            안녕하세요
            <br />
            <strong className='about__title--strong'>신승주</strong>입니다.
          </h2>
          <p className='about__description'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nam
            omnis dolorem repellendus quaerat exercitationem voluptatibus? Totam
            sit ducimus quae officia voluptatem atque voluptates cupiditate
            quisquam aperiam, asperiores, quam suscipit!
          </p>
        </div>
      </section>
    </div>
  );
}
