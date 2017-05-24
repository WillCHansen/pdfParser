// var pdfTools = require('./pdfTools.js');

// var inputFile = "c://users//whansen//desktop//pdfparser//work//FileServerServlet.pdf";
// var outputLoc = "c://users//whansen//desktop//pdfparser//work";

// pdfTools.pdfParseAndSplit(inputFile, outputLoc);

const {app, BrowserWindow, dialog} = require('electron')
const electron = require('electron');
const path = require('path')
const url = require('url')

const fs = require('fs');

const openFile = function () {
  var files = dialog.showOpenDialog(win, {
    properties: ['openFile']
  });

  if (!files) { return; }

  var file = files[0];
  var content = fs.readFileSync(file).toString();

  win.webContents.send('file-opened', file, content);
};

exports.openFile = openFile;


let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})
    // require('bootstrap');

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, '/app/index.html'),
    protocol: 'file:',
    slashes: true
  }))

//   win.jQuery = require('jquery');
//   require('bootstrap');

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
