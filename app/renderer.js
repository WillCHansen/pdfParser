const electron = require('electron');
const remote = electron.remote;
const ipc = electron.ipcRenderer;
const mainProcess = remote.require('./app');
const $ = require('jquery');

const $claimInputPath = $('#claim-input-path');
const $claimInputButton = $('#claim-input-button');
const $claimOutputButton = $('#claim-output-button');
const $claimOutputPath = $('#claim-output-path');

const $claimSplitStart = $('#claim-split-start');
// const $claimSplitStop = $('#claim-split-stop');

const $cons = $('#console');

const logEvent = function(data){
    $cons.append("<p>"+ data +"</p>");
    $cons.scrollTop($cons.prop('scrollHeight'));
};

ipc.on('log-event', function (event, data) {
    logEvent(data);
});

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

$claimSplitStart.on('click', () => {
    var inFile = $claimInputPath.val()
    var outFolder = $claimOutputPath.val()

    if (!inFile){
        logEvent("ERROR, NO INPUT CLAIM FILE SELECTED");
        return 0
    };
    if (!outFolder){
        logEvent("ERROR, NO OUTPUT CLAIM FOLDER SELECTED");
        return 0
    };
    logEvent("Starting....");
    mainProcess.pdfTools.pdfParseAndSplit(inFile, outFolder);
});