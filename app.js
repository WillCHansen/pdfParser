var PDFDocument = require("pdfkit");
let fs = require('fs')
var ipp2 = require('ipp');
var uri = "http://10.1.205.71";
var ipp = require('ipp-encoder')
// var C = ipp.CONSTANTS

// // decode binary buffer from IPP client
// var decoded = ipp.request.decode("buf")

// // ...handle request...

// var doc = new PDFDocument;
// doc.text("Hello World");
// var buffers = [];
// doc.on('data', buffers.push.bind(buffers));
// doc.on('end', function () {
//   var msg = {
//       "operation":"Print-Job",
//       "operation-attributes-tag": {
//           "attributes-charset": "utf-8",
//           "attributes-natural-language": "en",
//           "printer-uri": uri,
//           "document-format": "application/pdf"
//       },
//       "job-attributes-tag": {
//         "media-col": {
//             "media-source": "tray-2"
//           },
//           "copies": "2"
//       },
//       "data": Buffer.concat(buffers)
//   }
// fs.writeFile("u:/pdfParser/test1.txt", ipp2.serialize(msg))
  // ipp2.request(uri, ipp2.serialize(msg), function(err, res){
	// if(err){
	// 	return console.log(err);
	// }
	// console.log(JSON.stringify(res,null,2));
// })

  // fs.writeFile("u:/pdfParser/test1.txt", ipp2.serialize(msg))
  // console.log("done")
// });
// doc.end();

// fs.readFile("u:/pdfParser/test1.txt", function(err, data){
//   // ipp2.request(uri, data, function(err, res){
// 	// if(err){
// 	// 	return console.log(err);
// 	// }
// 	console.log(JSON.stringify(ipp.response.decode(data),null,2));
// })
// })

// 	// console.log(JSON.stringify(ipp.response.decode(data),null,2))
// 	// console.log(JSON.stringify(ipp2.parse(data),null,2));
// })


var test = {
  "version": {
    "major": 2,
    "minor": 0
  },
  "groups": [
    {
      "tag": 1,
      "attributes": [
        {
          "tag": 71,
          "name": "attributes-charset",
          "value": [
            "utf-8"
          ]
        },
        {
          "tag": 72,
          "name": "attributes-natural-language",
          "value": [
            "en"
          ]
        },
        {
          "tag": 69,
          "name": "printer-uri",
          "value": [
            "http://10.1.205.71"
          ]
        },
        {
          "tag": 68,
          "name": "requested-attributes",
          "value": [
            "job-template"
          ]
        }
      ]
    },
    {
      "tag": 2,
      "attributes": [
        {
          "tag": 52,
          "name": "media-col",
          "value": [
            "media-source",
            "tray-2"
          ]
        }
      ]
    }
  ],
  "requestId": 87280824,
  "statusCode": 0
}


// var doc = new PDFDocument;
// doc.text("Hello World");

// var buffers = [];
// doc.on('data', buffers.push.bind(buffers));
// doc.on('end', function () {
//   var msg = {
//       "operation-attributes-tag": {
//           "attributes-charset": "utf-8",
//           "attributes-natural-language": "en",
//           "printer-uri": uri,
//           "document-format": "application/pdf"
//       },
//       "job-attributes-tag": {
//         "media-col": {
//             "media-source": "tray-2"
//           },
//           "copies": "2"
//       },
//       "data": Buffer.concat(buffers)
//   }

//   fs.writeFile("u:/pdfParser/test1.txt", ipp2.serialize(msg))
//   console.log("done")
// });
// doc.end();



// console.log(ipp2.serialize(msg))



// var zone = new Buffer(2)
// var date = new Date(2015, 11, 1, 1, 23, 45, 678)
// var sign = date.getTimezoneOffset() > 0 ? '2d' : '2b'
// var dateHex = '07df0c0101172d06' + sign + zone.toString('hex')

// var test = new Buffer(
//   '0200'+ //version
//   '0000'+ //status code
//   '01eb9c9a01470'+
//   '01'+ //operations attributes tag
//     '26'+ //value tag
//     '17474726962757465732d6368617273657400057574662d3848001b617474726962757465732d6e61747572616c2d6c616e67756167650002656e45000b7072696e7465722d7572690012687474703a2f2f31302e312e3230352e373149000f646f63756d656e742d666f726d6174000f6170706c69636174696f6e2f706466023400096d656469612d636f6c00004a0012000c6d656469612d736f757263654a00000006747261792d323700000000210006636f7069657300040000000203','hex')

var test = new Buffer(
  '0200'+ //version
  '0000'+ //status code
  '01eb9c9a'+
  '01'+ //operation attributes tag
    '47'+ //charset tag
    '0012'+ // length
    '617474726962757465732d63686172736574'+ //attributes-charset
    '0005'+ //length
    '7574662d38'+ //utf-8
    '48'+ //natural language tag
    '001b'+// length
    '617474726962757465732d6e61747572616c2d6c616e6775616765'+ //attributes-natural-language
    '0002'+ //length
    '656e'+ //en (english)
    '45'+ // URI tag
    '000b'+ // length
    '7072696e7465722d757269'+ //printer-uri
    '0012'+ // length
    '687474703a2f2f31302e312e3230352e3731'+ // http://10.1.205.71
    '49'+ //tag maybe?
    '000f'+ // length
    '646f63756d656e742d666f726d6174'+ //document-format
    '000f'+ // length
    '6170706c69636174696f6e2f706466'+ //application/pdf
  // '02'+ //job attributes tag
    // '34'+ //begin collection
    // '0009'+ // length
    // '6d656469612d636f6c'+ //media-col
    // '0000'+
    // '4a'+ //collection entry
    // '000c'+ //length
    // '0c6d656469612d736f75726365'+ //media-source
    // '0000'+
    // '4a'+ //collection entry
    // '0006'+ //length
    // '747261792d32'+ //tray-2
    // '0000'+
    // '37'+//end collection
    // '00000000210006636f70696573000400000002'+
    '03' //end of attributes
    ,'hex')
console.log(JSON.stringify(ipp2.parse(test),null,2));
// console.log(ipp2.parse(test))

// var expected = new Buffer(
//         '0101' + // version
//         '0000' + // statusCode
//         '0000002a' + // requestId
//         '01' + // delimiter tag
//           '44' + // value tag
//             '0006' + // name length
//             '737472696e67' + // name
//             '0003' + // value length
//             '666f6f' + // value
//           '44' + // value tag
//             '0005' + // name length
//             '6172726179' + // name
//             '0003' + // value length
//             '666f6f' + // value
//           '44' + // value tag
//             '0000' + // name length
//             '' + // name
//             '0003' + // value length
//             '626172' + // value
//           '22' + // value tag
//             '0004' + // name length
//             '626f6f6c' + // name
//             '0001' + // value length
//             '01' + // value
//           '23' + // value tag
//             '0004' + // name length
//             '656e756d' + // name
//             '0004' + // value length
//             '0000002a' + // value
//         '02' + // delimiter tag


//           '34'+ //begin col tag
//             '0009'+ //name length
//             '6d656469612d636f6c'+ //media-col
//             '4a'+ //mem attr
//             '0012'+ //length
//             '6d656469612d736f75726365'+ //media-source
//             '41'+ //tag
//             '0006'+ //length
//             '747261792d32'+ //tray-2
            
//           '37'+ //end col tag


//           '44' + // value tag
//             '0006' + // name length
//             '737472696e67' + // name
//             '0003' + // value length
//             '666f6f' + // value
//           '36' + // value tag
//             '0012' + // name length
//             '6e616d652d776974682d6c616e6775616765' + // name
//             '000c' + // value length
//             '0005' + // sub-value length
//             '66722d4341' + // sub-value
//             '0003' + // sub-value length
//             '666f75' + // name
//           '31' + // value tag
//             '0009' + // name length
//             '646174652d74696d65' + // name
//             '000b' + // value length
//             dateHex + // value
//         '03', // end of attributes tag
//         'hex')



// console.log(JSON.stringify(ipp.request.decode(expected),null,2));
// console.log(JSON.stringify(ipp.request.encode(test),null,2));




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