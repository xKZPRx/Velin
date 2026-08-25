import logo from "../../assets/logo.svg";
import minimizeIcon from "../../assets/minimize.svg";
import restoreIcon from "../../assets/restore.svg";
import closeIcon from "../../assets/close.svg";
import styles from "./CustomTitleBar.module.css";

function CustomTitleBar() {
    return (
        <nav className={styles.container}>

            <img src={logo} alt="Velin" className={styles.logo} />
            <h1 className={styles.filename}>document.txt</h1>

            <div className={styles.windowControls}>

                <button className={styles.button} onClick={() => window.electron.minimize()} aria-label="Minimize">
                    <img src={minimizeIcon} />
                </button>

                <button className={styles.button} onClick={() => window.electron.restore()} aria-label="Restore">
                    <img src={restoreIcon} />
                </button>

                <button className={`${styles.button} ${styles.close}`} onClick={() => window.electron.close()} aria-label="Close">
                    <img src={closeIcon} />
                </button>

            </div>
            
        </nav>
    )
}

export default CustomTitleBar;