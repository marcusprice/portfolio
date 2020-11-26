import styles from './SectionImage.module.css';

export default function SectionImage({ src, alt }) {
  return <img className={styles.container} src={src} alt={alt} />;
}
