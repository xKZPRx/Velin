import styles from "./Editor.module.css";

function Editor() {
    return (
        <div className={styles.container}>
            <textarea className={styles.textArea} spellCheck={false} autoComplete="off" autoCorrect="off" autoFocus={false} />
        </div>
    )
}

export default Editor;