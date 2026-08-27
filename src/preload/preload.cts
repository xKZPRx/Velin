const { contextBridge, ipcRenderer } = require("electron");
import type { IpcRendererEvent } from "electron";

contextBridge.exposeInMainWorld("electron", {
    minimize: () => ipcRenderer.send('window-minimize'),
    maximize: () => ipcRenderer.send('window-maximize'),
    restore: () => ipcRenderer.send('window-restore'),
    close: () => ipcRenderer.send('window-close'),

    onMaximized: (callback: (isMaximized: boolean) => void) => {
        ipcRenderer.on(
            "window-maximized",
            (_event: IpcRendererEvent, value: boolean) => {
                callback(value);
            }
        );
    },
});