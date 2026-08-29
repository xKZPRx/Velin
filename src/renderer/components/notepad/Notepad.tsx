import CustomTitleBar from "./CustomTitleBar.tsx";
import MenuBar from "./MenuBar.tsx";
import Editor from "./Editor.tsx";
import StatusBar from "./StatusBar.tsx";

import styles from "./Notepad.module.css";

function Notepad() {
    return (
        <div className={styles.container}>
            <CustomTitleBar />
            <MenuBar />
            <Editor />
            <StatusBar />
        </div>
    )
}

export default Notepad;