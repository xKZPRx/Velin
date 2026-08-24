export {};

interface ElectronAPI {
    minimize: () => void;
    restore: () => void;
    close: () => void;
}

declare global {
    interface Window {
        electron: ElectronAPI;
    }
}