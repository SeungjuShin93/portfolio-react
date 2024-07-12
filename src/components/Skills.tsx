import Skill1 from './Skill1';
import Skill2 from './Skill2';
import Skill3 from './Skill3';
import Skill4 from './Skill4';

export default function Skills() {
  // title = 'React';
  // title = 'HTML/CSS';
  // title = 'JavaScript';
  // title = 'Lorem';
  return (
    <div className='skills__container container' id='skills'>
      <section className='skills '>
        <Skill1 />
        <Skill2 />
        <Skill3 />
        <Skill4 />
      </section>
    </div>
  );
}
