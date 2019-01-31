/*jslint node: true */
/*jslint esversion: 6 */
const electron = require("electron");
const app = electron.app; /* a life cycle module */
const BrowserWindow = electron.BrowserWindow; /* a browser window module */
const path = require("path");
/* a global link */
/* the window will close once the JS object is cleared */
var mainWindow = null;
/* check if all the app’s windows are closed and shut down the app */
app.on("window-all-closed", function () {
	/* in OS X stay active until Cmd + Q is pressed */
	if (process.platform !== "darwin") {
		app.quit();
	}
});
/* called when Electron inits and is ready to create a browser window */
app.on("ready", function () {
	/* create the window */
	/* https://github.com/electron/electron/blob/master/docs/api/browser-window.md */
	/* https://electronjs.org/docs/tutorial/security */
	mainWindow = new BrowserWindow({
			webPreferences: {
				contextIsolation: false,
				nodeIntegration: true
			},
			width: 844,
			height: 640,
			icon: "favicon.ico",
			title: "img-lightbox Demo Page"
		});
	/* load index.html */
	mainWindow.loadURL(path.join("file://", __dirname, "/index.html"));
	/* open DevTools. */
	/* mainWindow.webContents.openDevTools(); */
	/* gets executed when window close event is generated */
	mainWindow.on("closed", function () {
		/* remove the link to the window */
		mainWindow = null;
	});
	/* https://stackoverflow.com/questions/48854265/why-do-i-see-an-electron-security-warning-after-updating-my-electron-project-t */
	process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1";
});
