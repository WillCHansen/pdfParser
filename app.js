let fs = require('fs')
var ipp = require('ipp');

// var ipp = require('ipp-encoder')
// var C = ipp.CONSTANTS

// // decode binary buffer from IPP client
// var decoded = ipp.request.decode("buf")

// // ...handle request...

fs.readFile("u:/pdfParser/test.txt", function(err, data){
	// console.log(ipp.response.decode(data))
	console.log(JSON.stringify(ipp.parse(data),null,2));
})

// {
//   "version": {
//     "major": 2,
//     "minor": 0
//   },
//   "groups": [
//     {
//       "tag": 1,
//       "attributes": [
//         {
//           "tag": 71,
//           "name": "attributes-charset",
//           "value": [
//             "utf-8"
//           ]
//         },
//         {
//           "tag": 72,
//           "name": "attributes-natural-language",
//           "value": [
//             "en"
//           ]
//         },
//         {
//           "tag": 69,
//           "name": "printer-uri",
//           "value": [
//             "http://10.1.205.71"
//           ]
//         },
//         {
//           "tag": 68,
//           "name": "requested-attributes",
//           "value": [
//             "job-template"
//           ]
//         }
//       ]
//     },
//     {
//       "tag": 2,
//       "attributes": [
//         {
//           "tag": 52,
//           "name": "media-col",
//           "value": [
//             "",
//             "media-source",
//             "tray-2",
//             ""
//           ]
//         }
//       ]
//     }
//   ],
//   "requestId": 87280824,
//   "statusCode": 0
// }


// // prepare response
// var response = {
//   statusCode: C.SUCCESSFUL_OK, // set `operationId` instead if encoding a request
//   requestId: 1,
//   groups: [
//     { tag: C.OPERATION_ATTRIBUTES_TAG, attributes: [
//       { tag: C.CHARSET, name: 'attributes-charset', value: 'utf-8' },
//       { tag: C.NATURAL_LANG, name: 'attributes-natural-language', value: 'en-us' },
//       { tag: C.TEXT_WITH_LANG, name: 'status-message', value: { lang: 'en-us', value: 'successful-ok' } }
//     ] },
//     { tag: C.JOB_ATTRIBUTES_TAG, attributes: [
//       { tag: C.INTEGER, name: 'job-id', value: 147 },
//       { tag: C.NAME_WITH_LANG, name: 'job-name', value: { lang: 'en-us', value: 'Foobar' } }
//     ] }
//   ]
// }

// // // encode response to binary buffer
// console.log(ipp.response.encode(response)) // <Buffer 01 01 00 00 ... >


// // var uri = "http://10.1.205.70";
// 10.1.205.80
// 10.1.205.80
// http://10.1.205.71
// var uri = "http://10.1.205.71";
// // // // // var PDFDocument = require("pdfkit");

// // // // // // ipp://10.1.205.71/ipp/print
// var data = ipp.serialize({
// 	"operation":"print-job",
// 	"operation-attributes-tag": {
// 		"attributes-charset": "utf-8",
// 		"attributes-natural-language": "en",
// 		"printer-uri": uri,
// 		"requested-attributes": "job-template"
// 	},
// 	"job-attributes-tag": {
// 		"media-col": {
// 			"media-source": "tray-2"
// 		}
// 	}
// });

// console.log(data);

//  fs.writeFile("u:/pdfParser/test.txt", data);


//  var data = ipp.serialize({
// 	"operation":"Get-Printer-Attributes",
// 	"operation-attributes-tag": {
// 		"attributes-charset": "utf-8",
// 		"attributes-natural-language": "en",
// 		"printer-uri": uri,
// 		"requested-attributes": "job-template"
// 	}
// });

// // console.log(data);

//  fs.writeFile("u:/pdfParser/test.txt", data);


// ipp.request(uri, data, function(err, res){
// 	if(err){
// 		return console.log(err);
// 	}
// 	console.log(JSON.stringify(res,null,2));
// })

// var printer = ipp.Printer(uri);
// var doc = new PDFDocument;
// doc.text("Hello World");

// var buffers = [];
// doc.on('data', buffers.push.bind(buffers));
// doc.on('end', function () {

// var printer = ipp.Printer(uri);

// var msg = {
//     "operation-attributes-tag": {
//         "attributes-charset": "utf-8",
//         "attributes-natural-language": "en",
//         "last-document": true,
//         "job-uri": "http://10.1.205.71/14689"
//     },
//     "data": Buffer.concat(buffers)
// }

// printer.execute("Send-Document", msg, function(err, res){
//     console.log(JSON.stringify(res,null,2));
// });

// });
// var printer = ipp.Printer(uri);

// var msg = {
//     "operation-attributes-tag": {
//         "attributes-charset": "utf-8",
//         "printer-uri": uri
//     },
//     "job-attributes-tag": {
//         "media-col": {
// 			"media-source": "tray-1"
// 		},
// 		"output-bin": "left"
//     }
// }

// printer.execute("Create-Job", msg, function(err, res){
//     console.log(JSON.stringify(res,null,2));
// });

// get job attrs

// var printer = ipp.Printer(uri);

// var msg = {
//     "operation-attributes-tag": {
//         "attributes-charset": "utf-8",
//         "attributes-natural-language": "en",
//         "job-uri": "http://10.1.205.71/14821"
//     }
// }

// printer.execute("Get-Job-Attributes", msg, function(err, res){
//     console.log(JSON.stringify(res,null,2));
// });


// var printer = ipp.Printer(uri);

// var msg = {
//     "operation-attributes-tag": {
//         "attributes-charset": "utf-8",
//         "attributes-natural-language": "en",
//         "printer-uri": uri
//     }
// }

// printer.execute("Get-Jobs", msg, function(err, res){
//     console.log(JSON.stringify(res,null,2));
// });


// var ipp = require('ipp');
// var uri = "http://10.1.205.71";
// var PDFDocument = require("pdfkit");

// var doc = new PDFDocument;
// doc.text("Hello World");

// var buffers = [];
// doc.on('data', buffers.push.bind(buffers));
// doc.on('end', function () {


//     var printer = ipp.Printer(uri);


// 	var msg = {
// 		"operation-attributes-tag": {
// 			"requesting-user-name": "William",
// 			"job-name": "My Test Job",
// 			"document-format": "application/pdf"
// 		},
// 		"job-attributes-tag":{
// //			"copies": 2,
// //			"sides":"two-sided-long-edge",
// 			"media-col": {
// 				"media-source": "tray-2"
// 			}
// 		}
// 		, data: Buffer.concat(buffers)
// 	};

//     // var msg = {
//     //     "operation-attributes-tag": {
//     //         "attributes-charset": "utf-8",
//     //         "attributes-natural-language": "en",
//     //         "printer-uri": uri,
//     //         "document-format": "application/pdf",
//     //     },
//     //     "job-attributes-tag": {
// 	// 		"media-col": [{
// 	// 			"media-source": "tray-2"
// 	// 		}],
//     //         "media": "na_legal_8.5x14in",
//     //         "copies": 1
//     //   },
//     //     data: Buffer.concat(buffers)
//     // }

//     printer.execute("Print-Job", msg, function(err, res){
//         console.log(JSON.stringify(res,null,2));
//     });
// });
// doc.end();
// var PDFDocument = require('pdfkit');

// //make a PDF document

	// var printer = ipp.Printer(uri);
	// var msg = {
    //     // "printer-attributes-tag": {
    //     //     "media-source": "tray-1"
    //     // },
    //     // "operation-attributes-tag": {
	// 	// 	"requesting-user-name": "William",
	// 	// 	"job-name": "My Test Job",
	// 	// 	"document-format": "text/plain"
	// 	// },
    //     "printer-attributes-tag": {
    //        "printer-input-tray": "type=sheetFeedAutoRemovableTray;mediafeed=21590;mediaxfeed=27940;maxcapacity=520;level=390;status=0;name=Tray1\u0000"
    //     }
	// 	// data: "test"
	// };
	// printer.execute("Set-Printer-Attributes", msg, function(err, res){
	// 	console.log(res);
	// });


// var Printer = require('node-printer');
// // Get available printers list
// var test = Printer.list();

// // var test = Printer.getDefaultPrinterName();

// console.log(test);

// let fs = require('fs'),
//     PDFParser = require("pdf2json");

// var exec = require('child_process').exec;

// let pdfParser = new PDFParser();

// var acnArr = [];

// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
// pdfParser.on("pdfParser_dataReady", pdfData => {
//     // console.log(pdfData.formImage.Pages[0]);

//     for (i=0; i<pdfData.formImage.Pages.length; i++){
//         // console.log(pdfData.formImage.Pages[i].Texts.length);
//         for (y=0; y<pdfData.formImage.Pages[i].Texts.length; y++){
//             // console.log(pdfData.formImage.Pages[i].Texts[y].x);
//             if (pdfData.formImage.Pages[i].Texts[y].x === 11.177 &&
//             pdfData.formImage.Pages[i].Texts[y].y == 43.258 &&
//             pdfData.formImage.Pages[i].Texts[y].w == 86.4 &&
//             pdfData.formImage.Pages[i].Texts[y].sw == 0.78125 &&
//             pdfData.formImage.Pages[i].Texts[y].clr == 0 &&
//             pdfData.formImage.Pages[i].Texts[y].A == "left"){
//                 acnArr.push({
//                     claimNum: pdfData.formImage.Pages[i].Texts[y].R[0].T,
//                     pageNum: i+1
//                 });
//                 // console.log(pdfData.formImage.Pages[i].Texts[y].R[0].T);
//             }
//         };
//         // console.log(pdfData.formImage.Pages[i].);
//     };
//     console.log(acnArr);
//     // fs.writeFile("u:/pdfParser/work/export.json", JSON.stringify(pdfData, null, 2));
// });

// // pdfParser.loadPDF("u:/pdfParser/work/test.pdf");

// var cmd = '"C:/Program Files (x86)/PDFtk Server/bin/pdftk.exe" u:/pdfParser/work/test.pdf cat 1-4 output u:/pdfParser/work/testexp.pdf';


// child = exec(cmd, function (error, stdout, stderr) {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if (error !== null) {
//         console.log('exec error: ' + error);
//     }
// });

// //  {
// //             "x": 11.177,
// //             "y": 43.258,
// //             "w": 86.4,
// //             "sw": 0.78125,
// //             "clr": 0,
// //             "A": "left",
// //             "R": [
// //               {
// //                 "T": "AB2430611Z02",
// //                 "S": -1,
// //                 "TS": [
// //                   0,
// //                   15,
// //                   0,
// //                   0
// //                 ]
// //               }
// //             ]
// //           }

// // RUNDLL32.EXE PRINTUI.DLL,PrintUIEntry /Ss /n "\\ML7PRINTSVR\AS1 Billing Copier 2" /a "file.dat"
// // RUNDLL32.EXE PRINTUI.DLL,PrintUIEntry /Xg /n "\\ML7PRINTSVR\AS1 Billing Copier 1"

// // RUNDLL32.EXE PRINTUI.DLL,PrintUIEntry /Xg /n "\\ML7PRINTSVR\AS1 Billing Copier 1"

// // RUNDLL32.EXE PRINTUI.DLL,PrintUIEntry /Sr /n "\\ML7PRINTSVR\AS1 Billing Copier 2" /a "tray1.dat"
// // RUNDLL32.EXE PRINTUI.DLL,PrintUIEntry /Sr /n "\\ML7PRINTSVR\AS1 Billing Copier 2" /a "tray2.dat"

// // printui.exe /Sr /n "\\ML7PRINTSVR\AS1 Billing Copier 2" /a "tray2.dat"

// // /Ss /n "\\ML7PRINTSVR\AS1 Billing Copier 2" /a "file.dat"