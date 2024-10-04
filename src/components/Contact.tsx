import styles from '../assets/css/section/contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact__container} id='contact'>
      <footer className={styles.contact}>
        <h2 className={styles.contact__title}>Let&#39;s talk</h2>
        <p className={styles.contact__description}>
          Developer.TedShin@gmail.com
        </p>
        <ul className={styles.contact__links}>
          <li>
            <a
              className={styles.contact__link}
              href='https://github.com/SeungjuShin93'
              target='_blank'
              title='my github link'
            >
              <i className='fa-brands fa-github'></i>
            </a>
          </li>
          <li>
            <a
              className={styles.contact__link}
              href='https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=Developer.TedShin@gmail.com'
              target='_blank'
              title='sending to my gmail'
            >
              {' '}
              <i className='fa-solid fa-envelope'></i>
            </a>
          </li>
        </ul>
        <p className={styles.contact__description}>© Seungju Shin 2024</p>
      </footer>
    </div>
  );
}
