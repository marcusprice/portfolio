import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <h1>Marcus Price</h1>
      <ul className={styles.navItems}>
        <li>About</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Résumé</li>
      </ul>
    </nav>
  );
}
