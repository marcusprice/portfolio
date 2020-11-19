import styles from "./NavTiles.module.css";

export default function NavTiles() {
  return (
    <div className={styles.container}>
      <div style={{ backgroundImage: 'url("./images/mountains-min.jpg")' }}>
        <div>About</div>
      </div>

      <div style={{ backgroundImage: 'url("./images/code-min.jpg")' }}>
        <div>Portfolio</div>
      </div>

      <div style={{ backgroundImage: 'url("./images/blog-min.jpg")' }}>
        <div>Blog</div>
      </div>

      <div style={{ backgroundImage: 'url("./images/message-min.jpg")' }}>
        <div>Contact</div>
      </div>
    </div>
  );
}
