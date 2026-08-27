import settingsIcon from "../../assets/settings.svg";
import styles from "./MenuBar.module.css";

function MenuBar() {
    return (
        <nav className={styles.container}>

            <div className={styles.menuItems}>
                <button className={styles.button}>File</button>
                <button className={styles.button}>Edit</button>
                <button className={styles.button}>View</button>
                <button className={styles.button}>Help</button>
            </div>

            <button className={`${styles.button} ${styles.settings}`} aria-label="Settings">
                <img src={settingsIcon} alt=""></img>
            </button>

        </nav>
    )
}

export default MenuBar;