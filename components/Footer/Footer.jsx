import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li>GitHub</li>
          <li>linkedIn</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </footer>
  );
}
