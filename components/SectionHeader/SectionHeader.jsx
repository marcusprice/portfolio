import styles from './SectionHeader.module.css';

export default function SectionHeader({ title }) {
    return(
        <div className={ styles.container }>
            <span className={ styles.title }>{ title }</span>
        </div>
    );
}