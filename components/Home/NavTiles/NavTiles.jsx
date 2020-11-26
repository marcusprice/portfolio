import Link from 'next/link';
import styles from './NavTiles.module.css';

export default function NavTiles() {
  return (
    <div className={styles.container}>
      <div style={{ backgroundImage: 'url("./images/waveform.jpg")' }}>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>

      <div style={{ backgroundImage: 'url("./images/code-min.jpg")' }}>
        <Link href='/portfolio'>
          <a>Portfolio</a>
        </Link>
      </div>

      <div style={{ backgroundImage: 'url("./images/blog-min.jpg")' }}>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </div>

      <div style={{ backgroundImage: 'url("./images/message-min.jpg")' }}>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}
