import Project from './Project';
import Project2 from './Project2';
import Project3 from './Project3';

export default function Projects() {
  return (
    <div className='projects__container container' id='projects'>
      <Project />
      <Project2 />
      <Project3 />
    </div>
  );
}
