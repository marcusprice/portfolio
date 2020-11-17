import styles from './ContentSection.module.css';

export default function ContentSection({ children }) {
    return(
        <div className={ styles.container }>
            { children }
        </div>
    );
}