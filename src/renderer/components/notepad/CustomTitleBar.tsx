import { useEffect, useState } from "react";

import logo from "../../assets/logo.svg";
import minimizeIcon from "../../assets/minimize.svg";
import maximizeIcon from "../../assets/maximize.svg";
import restoreIcon from "../../assets/restore.svg";
import closeIcon from "../../assets/close.svg";

import styles from "./CustomTitleBar.module.css";

function CustomTitleBar() {
    const [isMaximized, setIsMaximized] = useState(false);

    useEffect(() => {
        window.electron.onMaximized(setIsMaximized);
    }, []);

    return (
        <nav className={styles.container}>

            <img src={logo} alt="Velin" className={styles.logo} />
            <h1 className={styles.filename}>document.txt</h1>

            <div className={styles.windowControls}>

                <button className={styles.button} onClick={() => window.electron.minimize()} aria-label="Minimize">
                    <img src={minimizeIcon} />
                </button>

                <button 
                    className={styles.button}
                    onClick={() => {
                        if (isMaximized) {
                            window.electron.restore();
                        } else {
                            window.electron.maximize();
                        }
                    }} 
                aria-label={isMaximized ? "Restore" : "Maximize"}
                >
                    <img src={isMaximized ? restoreIcon : maximizeIcon} alt="" />
                </button>

                <button className={`${styles.button} ${styles.close}`} onClick={() => window.electron.close()} aria-label="Close">
                    <img src={closeIcon} alt="" />
                </button>

            </div>
            
        </nav>
    )
}

export default CustomTitleBar;