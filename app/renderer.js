const electron = require('electron');
const remote = electron.remote;
const ipc = electron.ipcRenderer;
const mainProcess = remote.require('./app');
const $ = require('jquery');

const $claimInputPath = $('#claim-input-path');
const $claimInputButton = $('#claim-input-button');
const $claimOutputButton = $('#claim-output-button');
const $claimOutputPath = $('#claim-output-path');


ipc.on('claim-input-path', function (event, file) {
    $claimInputPath.val(file);
});

ipc.on('claim-output-path', function (event, folder) {
    $claimOutputPath.val(folder);
});

$claimInputButton.on('click', () => {
    mainProcess.openDiag(pdfDialog, "claim-input-path");
});

$claimOutputButton.on('click', () => {
    mainProcess.openDiag(folderDialog, "claim-output-path");
});

const pdfDialog = {
    properties: ['openFile'],
    filters: [{name: 'PDF Files', extensions: ['pdf']}]
};

const folderDialog = {
    properties: ['openDirectory']
};