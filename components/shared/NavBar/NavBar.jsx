import { useState } from 'react';
import { useWindowSize } from '../hooks';
import styles from './NavBar.module.css';
import Hamburger from 'hamburger-react';

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleHamburger = () => {
    let out = '';
    const windowSize = useWindowSize();
    if (windowSize < 768) {
      out = <Hamburger toggled={expanded} toggle={setExpanded} color='#777' />;
    }
    return out;
  };

  return (
    <nav className={styles.container}>
      <h1>Marcus Price</h1>
      {handleHamburger(expanded)}
      <ul className={styles.navItems + ' ' + (expanded ? styles.expanded : '')}>
        <li>About</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Résumé</li>
      </ul>
    </nav>
  );
}
