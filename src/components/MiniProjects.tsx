import { useState } from 'react';
import styles from '../assets/css/section/miniProjects.module.css';
import ProductApp from '../miniProjects/productManagement/ProductApp';
import CameraApp from '../miniProjects/CameraApp/CameraApp';

// imgs
import imgProductManagement from '../assets/img/productManagement.png';
import imgCamera from '../assets/img/camera.jpg';

interface MiniProject {
  title: string;
  img: string;
  component: JSX.Element;
}

const miniProjects: MiniProject[] = [
  { title: '제품 관리', img: imgProductManagement, component: <ProductApp /> },
  { title: '카메라 앱', img: imgCamera, component: <CameraApp /> },
];

export default function MiniProjects() {
  const [selectedProject, setSelectedProject] = useState<MiniProject | null>(
    null
  );

  const handleMiniClick = (project: MiniProject) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`container ${styles.mini__container}`} id='minis'>
      <div className={styles.mini}>
        <h1 className={styles.mini__section__title}>Mini - Projects</h1>
        <section className={styles.mini__projects__container}>
          {miniProjects.map((miniProject, index) => (
            <MiniProjectCard
              key={index}
              title={miniProject.title}
              img={miniProject.img}
              onClick={() => handleMiniClick(miniProject)}
            />
          ))}
        </section>
        {selectedProject && (
          <Modal miniProject={selectedProject} onClose={closeModal} />
        )}
      </div>
    </div>
  );
}

interface MiniProjectCardProps {
  title: string;
  img: string;
  onClick: () => void;
}

const MiniProjectCard = ({ title, img, onClick }: MiniProjectCardProps) => {
  return (
    <article className={styles.mini__article} onClick={onClick}>
      <h3 className={styles.mini__title}>{title}</h3>
      <img src={img} alt={title} className={styles.mini__img} />
    </article>
  );
};

interface ModalProps {
  miniProject: MiniProject;
  onClose: () => void;
}

const Modal = ({ miniProject, onClose }: ModalProps) => {
  return (
    <div className={styles.modal__container} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {miniProject.component}
      </div>
    </div>
  );
};
