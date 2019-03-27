import { app, BrowserWindow, WebPreferences } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { MenuBuilder } from './menu';

let mainWindow: BrowserWindow | null = null;

const webPreferences: WebPreferences =
  process.env.NODE_ENV === 'development'
    ? {
        // if you have CROS issue, you may uncomment below config
        // webSecurity: false
      }
    : {
        // https://electronjs.org/docs/tutorial/security#2-disable-nodejs-integration-for-remote-content
        nodeIntegration: false,
        nodeIntegrationInWorker: false
      };

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    height: 600,
    width: 800,
    webPreferences
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '../build/index.html'),
      protocol: 'file:',
      slashes: true
    });

  mainWindow.loadURL(startUrl);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
