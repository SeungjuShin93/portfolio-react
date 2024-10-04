import { useState } from 'react';
import styles from '../assets/css/section/miniProjects.module.css';
import ProductApp from '../miniProjects/productManagement/ProductApp';
import CameraApp from '../miniProjects/CameraApp/CameraApp';
import CartApp from '../miniProjects/CartApp/CartApp';

// imgs
import imgProductManagement from '../assets/img/productManagement.png';
import imgCamera from '../assets/img/camera.png';
import imgCart from '../assets/img/cart.jpg';

interface MiniProject {
  title: string;
  img: string;
  component: JSX.Element;
  stack: string;
  descriptions: string[];
}

const miniProjects: MiniProject[] = [
  {
    title: '제품 관리',
    img: imgCamera,
    component: <ProductApp />,
    stack: 'React & TS',
    descriptions: [
      'useState, useEffect',
      '커스텀 Hook 활용',
      'useRef 및 autoFocus 활용',
      'CRUD 구현',
    ],
  },
  {
    title: '카메라',
    img: imgCamera,
    component: <CameraApp />,
    stack: 'React & TS',
    descriptions: ['웹캠 활용', 'video와 canvas 이용', '캡쳐 및 다운로드 가능'],
  },
  {
    title: '장바구니',
    img: imgCamera,
    component: <CartApp />,
    stack: 'React & TS',
    descriptions: [
      'useReducer 활용',
      'CRUD 구현',
      '장바구니 아이템의 총 가격 계산 및 수량 조정 가능',
    ],
  },
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
    <div className={styles.mini__container} id='minis'>
      <div className={styles.mini}>
        <h1 className={styles.mini__section__title}>Mini - Projects</h1>
        <section className={styles.mini__projects__container}>
          {miniProjects.map((miniProject, index) => (
            <MiniProjectCard
              key={index}
              title={miniProject.title}
              img={miniProject.img}
              stack={miniProject.stack}
              descriptions={miniProject.descriptions}
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
  stack: string;
  descriptions: string[];
  onClick: () => void;
}

const MiniProjectCard = ({
  title,
  img,
  stack,
  descriptions,
  onClick,
}: MiniProjectCardProps) => {
  return (
    <article className={styles.mini__article} onClick={onClick}>
      <img src={img} alt={title} className={styles.mini__img} />
      <div className={styles.mini__metadata}>
        <h3 className={styles.mini__title}>{title}</h3>
        <h2>{stack}</h2>
        <ul>
          {descriptions.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </div>
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
