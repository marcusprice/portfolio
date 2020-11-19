import styles from "./RecentPosts.module.css";

export default function RecentPosts() {
  return (
    <div className={styles.container}>
      <h2>Recent Articles</h2>
      <div>
        <span>November 18th, 2020</span>
        <h3>
          Case study: quam sed hendrerit hendrerit, ante nisi varius lectus.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          accumsan libero. Etiam vitae tempus metus, sit amet porta felis.
        </p>
      </div>

      <div>
        <span>October 5th, 2020</span>
        <h3>Curabitur facilisis, quam sed hendrerit hendrerit, ante nisi.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          accumsan libero. Etiam vitae tempus metus, sit amet porta felis.
        </p>
      </div>

      <div>
        <span>September 23rd, 2020</span>
        <h3>
          Case study: quam sed hendrerit hendrerit, ante nisi varius lectus.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          accumsan libero. Etiam vitae tempus metus, sit amet porta felis.
        </p>
      </div>

      <div>
        <span>July 18th, 2020</span>
        <h3>Curabitur facilisis, quam sed hendrerit hendrerit, ante nisi.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          accumsan libero. Etiam vitae tempus metus, sit amet porta felis.
        </p>
      </div>
    </div>
  );
}
