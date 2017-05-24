const electron = require('electron');
const remote = electron.remote;
const ipc = electron.ipcRenderer;
const mainProcess = remote.require('./app');
const $ = require('jquery');

const $markdownView = $('.raw-markdown');
const $htmlView = $('.rendered-html');
const $openFileButton = $('#open-file');


ipc.on('file-opened', function (event, file, content) {
    $markdownView.text(content);
//   console.log(content);
});

$openFileButton.on('click', () => {
    mainProcess.openFile();
});