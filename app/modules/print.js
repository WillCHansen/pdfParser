var PDFDocument = require("pdfkit");
var path = require('path');
let fs = require('fs');
var ipp = require('ipp');
var uri = "http://10.1.205.71";

module.exports = {
  printWithOptions: function(file, uri, tray, fit){
    file = path.normalize(file);
    var readStream = fs.createReadStream(file);

    var buffers = [];
    readStream.on('data', buffers.push.bind(buffers));
    readStream.on('end', function(){
      var buf = Buffer.concat(buffers);
      console.log(buf);
      var catBuf = Buffer.concat([msg, buf]);
      ipp.request(uri, catBuf, function(err, res){
        if(err){
          return console.log(err);
        }
        console.log(JSON.stringify(res,null,2));
      });
    });
  }
};

// var msg = new Buffer(
//   '0200'+ //Version
//   '000201e6d5f2'+
//   '01'+ //Operation attributes tag
//     '47'+ //charset tag
//     '0012'+ //length
//     '617474726962757465732d63686172736574'+ //attributes-charset
//     '0005'+ //length
//     '7574662d38'+ //utf-8
//     '48'+ //natural language tag
//     '001b'+ //length
//     '617474726962757465732d6e61747572616c2d6c616e6775616765'+//attributes-natural-language
//     '0002'+//length
//     '656e'+ //en
//     '45'+ // URI tag
//     '000b'+ //length
//     '7072696e7465722d757269'+ //printer-uri
//     '0012'+//length
//     '687474703a2f2f31302e312e3230352e3731'+//http://10.1.205.71
//     '49'+ //mimeMediaType tag
//     '000f'+ //length
//     '646f63756d656e742d666f726d6174'+ //document format
//     '000f'+ //length
//     '6170706c69636174696f6e2f706466'+ //application/pdf
//   '02'+ //job attributes tag
//     '34'+ //begin collection
//       '0009'+ //length
//       '6d656469612d636f6c'+ //media-col
//       '0000'+ //value length
//       '4a'+ //collection entry
//       '0000'+ //name length
//       '000c'+ //value length
//       '6d656469612d736f75726365'+ //media-source
//       '44'+ // collection entry
//       '0000'+ //name length
//       '0006'+ //value length
//       '747261792d32'+ //tray-2
//     '37'+ //end of collection
//     '00000000'+ //name length and value length
//   '03', 'hex');


//need to add fittopage
  var createMsg = function(uri, tray){
     var msg = 
    '0200'+ //Version
    '000201e6d5f2'+
    '01'+ //Operation attributes tag
      '47'+ //charset tag
      '0012'+ //length
      '617474726962757465732d63686172736574'+ //attributes-charset
      '0005'+ //length
      '7574662d38'+ //utf-8
      '48'+ //natural language tag
      '001b'+ //length
      '617474726962757465732d6e61747572616c2d6c616e6775616765'+//attributes-natural-language
      '0002'+//length
      '656e'+ //en
      '45'+ // URI tag
      '000b'+ //length
      '7072696e7465722d757269'+ //printer-uri
      '0012'+//length
      stringToHex(uri)+
      '49'+ //mimeMediaType tag
      '000f'+ //length
      '646f63756d656e742d666f726d6174'+ //document format
      '000f'+ //length
      '6170706c69636174696f6e2f706466'+ //application/pdf
    '02'+ //job attributes tag
      '34'+ //begin collection
        '0009'+ //length
        '6d656469612d636f6c'+ //media-col
        '0000'+ //value length
        '4a'+ //collection entry
        '0000'+ //name length
        '000c'+ //value length
        '6d656469612d736f75726365'+ //media-source
        '44'+ // collection entry
        '0000'+ //name length
        '0006'+ //value length
        stringToHex(tray)+
        '37'+ //end of collection
      '00000000'+ //name length and value length
    '03';
    var msgbuf = new Buffer(msg, 'hex');
    return msgbuf;
  }

var noScale = '44'+//keyword tag
  ''+//length
  ''+ //name
  ''+//length
  '';//value

var stringToHex = function(str){
    var arr = [];
    for (i=0; i<str.length; i++){
        arr.push(str.charCodeAt(i).toString(16));
    }
    return arr.toString().replace(/,/g , "");
}

// readStream.end();
// var doc = new PDFDocument;
// doc.text("Hello World");

// var buffers = [];
// doc.on('data', buffers.push.bind(buffers));
// doc.on('end', function () {
  // var msg = {
  //     "operation-attributes-tag": {
  //         "attributes-charset": "utf-8",
  //         "attributes-natural-language": "en",
  //         "printer-uri": uri,
  //         "document-format": "application/pdf"
  //     },
  //     "job-attributes-tag": {
  //       "media-col": {
  //           "media-source": "tray-2"
  //         },
  //         "copies": "2"
  //     },
  //     "data": Buffer.concat(buffers)
  // }

//   fs.writeFile("u:/pdfParser/test1.txt", ipp2.serialize(msg))
//   console.log("done")
// });
// doc.end();


  
// var doc = new PDFDocument;
// doc.text("Hello World");
// var buffers = [];
// doc.on('data', buffers.push.bind(buffers));
// doc.on('end', function () {
//   var data = Buffer.concat(buffers);
//   var catBuf = Buffer.concat([msg, data]);
//   ipp2.request(uri, catBuf, function(err, res){
//     if(err){
//       return console.log(err);
//     }
//     console.log(JSON.stringify(res,null,2));
//   });
// });
// doc.end();

// console.log(JSON.stringify(ipp.request.decode(msg),null,2));