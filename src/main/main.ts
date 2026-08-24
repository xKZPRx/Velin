import { app, BrowserWindow, ipcMain } from "electron";
import path from 'path';
import { isDev } from './util.js';
import { getPreloadPath } from './pathResolver.js';

app.on('ready', ()=> {
    const mainWindow = new BrowserWindow({
        frame: false,
        titleBarStyle: 'hidden',
        titleBarOverlay: false,

        webPreferences: {
            preload: getPreloadPath(),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    ipcMain.on('window-minimize', () => {
        mainWindow.minimize();
    });

    ipcMain.on('window-restore', () => {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
        } else {
            mainWindow.maximize();
        }
    });

    ipcMain.on('window-close', () => {
        mainWindow.close();
    });

    if(isDev()) {
        mainWindow.loadURL('http://localhost:5123');
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
    }
})