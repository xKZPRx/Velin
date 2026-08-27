export {};

interface ElectronAPI {
    minimize: () => void;
    maximize: () => void;
    restore: () => void;
    close: () => void;
    onMaximized: (callback: (isMaximized: boolean) => void) => void;
}

declare global {
    interface Window {
        electron: ElectronAPI;
    }
}