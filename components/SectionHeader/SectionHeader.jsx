import styles from './SectionHeader.module.css';

export default function SectionHeader({ title, cta }) {
    return(
        <div className={ styles.container }>
            <span className={ styles.title }>{ title }</span>
            <button className={ styles.button }>{ cta }</button>
        </div>
    );
}