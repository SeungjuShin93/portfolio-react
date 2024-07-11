import favicon from '../assets/img/favicon.ico';

export default function Header() {
  return (
    <div className='container'>
      <header className='header'>
        <div className='header__logo__wrapper'>
          <img className='header__logo__img' src={favicon} alt='logo' />
          <h1 className='header__logo__name'>
            <a href='#'>Seungju Shin</a>
          </h1>
        </div>
        <nav>
          <ul className='header__menu'>
            <li>
              <a className='header__menu__item active' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='header__menu__item' href='#skills'>
                Skills
              </a>
            </li>
            <li>
              <a className='header__menu__item' href='#projects'>
                Projects
              </a>
            </li>
            <li>
              <a className='header__menu__item' href='#mini-projects'>
                Mini-Projects
              </a>
            </li>
            <li>
              <a className='header__menu__item' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
