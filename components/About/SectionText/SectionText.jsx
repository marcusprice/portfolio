import styles from './SectionTest.module.css';

export default function SectionText({ children }) {
  return (
    <div className={styles.container}>
      <p>{children}</p>
    </div>
  );
}
