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

const $printExcelInputPath = $('#print-excel-input-path');
const $printClaimInputPath = $('#print-claim-input-path');
const $printMedrecInputPath = $('#print-medrec-input-path');
const $printPrinterIp = $('#print-printer-ip');
const $printExcelButton = $('#print-excel-button');
const $printClaimInputButton = $('#print-claim-input-button');
const $printMedrecInputButton = $('#print-medrec-input-button');

// const $claimSplitStop = $('#claim-split-stop');

$printClaimInputButton.on('click', () => {
    mainProcess.openDiag(folderDialog, "print-claim-input-path");
});

ipc.on('print-claim-input-path', function (event, file) {
    $printClaimInputPath.val(file);
});

$printMedrecInputButton.on('click', () => {
    mainProcess.openDiag(folderDialog, "print-medrec-input-path");
});

ipc.on('print-medrec-input-path', function (event, file) {
    $printMedrecInputPath.val(file);
});

$printExcelButton.on('click', () => {
    mainProcess.openDiag(excelDialog, "print-excel-input-path");
});

ipc.on('print-excel-input-path', function (event, file) {
    $printExcelInputPath.val(file);
});


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

const excelDialog = {
    properties: ['openFile'],
    filters: [{name: 'Excel Files', extensions: ['xlsx']}]
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