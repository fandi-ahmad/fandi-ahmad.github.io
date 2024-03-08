// const { app, BrowserWindow } = require('electron')

import { app, BrowserWindow } from 'electron'

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });


    win.loadFile(path.join(__dirname, 'build', 'index.html'));
    // win.loadFile('index.js');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

