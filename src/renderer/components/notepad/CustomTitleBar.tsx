import logo from "../../assets/logo.svg";
import minimizeIcon from "../../assets/minimize.svg";
import restoreIcon from "../../assets/restore.svg";
import closeIcon from "../../assets/close.svg";
import styles from "./CustomTitleBar.module.css";

function CustomTitleBar() {
    return (
        <div className={styles.container}>

            <img src={logo} alt="Velin" className={styles.logo} />
            <h1 className={styles.filename}>document.txt</h1>

            <div className={styles.windowControls}>

                <button className={styles.button} onClick={() => window.electron.minimize()}>
                    <img src={minimizeIcon} alt="Minimize" />
                </button>

                <button className={styles.button} onClick={() => window.electron.restore()}>
                    <img src={restoreIcon} alt="Restore" />
                </button>

                <button className={`${styles.button} ${styles.close}`} onClick={() => window.electron.close()}>
                    <img src={closeIcon} alt="Close" />
                </button>

            </div>
        </div>
    )
}

export default CustomTitleBar;