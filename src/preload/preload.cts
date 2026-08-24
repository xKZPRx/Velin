const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    minimize: () => ipcRenderer.send("window-minimize"),
    restore: () => ipcRenderer.send("window-restore"),
    close: () => ipcRenderer.send("window-close"),
});