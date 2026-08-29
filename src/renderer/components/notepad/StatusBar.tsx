import styles from "./StatusBar.module.css";

function StatusBar() {
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <span className={styles.item}>Line 2, Column 9</span>
                <span className={styles.item}>0/37 Characters</span>
                <span className={styles.item}>Plain Text</span>
                <span className={styles.item}>UTF-8</span>
                <span className={styles.item}>LF</span>
            </div>
            <span className={styles.item}>100%</span>
        </div>    
    )
}

export default StatusBar;