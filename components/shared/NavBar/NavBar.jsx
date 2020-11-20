import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useWindowSize } from '../hooks';
import styles from './NavBar.module.css';
import Hamburger from 'hamburger-react';

const mobileBreakpoint = 768;

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const route = useRouter().pathname;

  const handleHamburger = () => {
    let out = '';
    const windowSize = useWindowSize();
    if (windowSize < mobileBreakpoint) {
      out = <Hamburger toggled={expanded} toggle={setExpanded} color='#777' />;
    }
    return out;
  };

  const handleClick = () => {
    setExpanded(false);
  };

  return (
    <nav className={styles.container}>
      <h1>
        <Link href='/'>
          <a onClick={handleClick}>Marcus Price</a>
        </Link>
      </h1>
      {handleHamburger(expanded)}
      <ul className={styles.navItems + ' ' + (expanded ? styles.expanded : '')}>
        <li>
          <Link href='/about'>
            <a
              onClick={handleClick}
              className={route === '/about' ? styles.active : ''}
            >
              About
            </a>
          </Link>
        </li>

        <li>
          <Link href='/portfolio'>
            <a className={route === '/portfolio' ? styles.active : ''}>
              Portfolio
            </a>
          </Link>
        </li>

        <li>
          <Link href='/blog'>
            <a className={route === '/blog' ? styles.active : ''}>Blog</a>
          </Link>
        </li>

        <li>
          <Link href='/contact'>
            <a className={route === '/contact' ? styles.active : ''}>Contact</a>
          </Link>
        </li>

        <li>Résumé</li>
      </ul>
    </nav>
  );
}
