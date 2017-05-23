var cmd = require('node-cmd');
var fs = require('fs');
var PDFParser = require("pdf2json");
var path = require("path")

// cmd.get('pdftk C:\\Users\\whansen\\Desktop\\pdfParser\\work\\test.pdf cat 2 output C:\\Users\\whansen\\Desktop\\pdfParser\\work\\output.pdf', function(err, data, stderr){
//   console.log('the current working dir is : ',data)
// });
// pdftk C:\\Users\\whansen\\Desktop\\pdfParser\\work\\test.pdf cat 2 output C:\\Users\\whansen\\Desktop\\pdfParser\\work\\output.pdf
//pdftk C:\Users\whansen\Desktop\pdfParser\work\test.pdf cat 1-1 output C:\Users\whansen\Desktop\pdfParser\work\output.pdf

// var splitPdf = function(inputFile, outputFile, startPg, endPg){
//   var msg = 'pdftk '+
//     inputFile+
//     ' cat '+
//     startPg+
//     '-'+
//     endPg+
//     ' output '+
//     outputFile
//     cmd.run(msg);
// };

var splitPdfRecursive = function(inputFile, outputLoc, arr, index){
  if ( index === arr.length ) return 1
  var msg = "pdftk " + path.normalize(inputFile) + " cat " + arr[index].start + "-" + arr[index].end + " output " + path.normalize(outputLoc + "\\" + arr[index].claimNum + ".pdf");
  console.log("Working on " + arr[index].claimNum + " (Splitting pages " + arr[index].start + "-" + arr[index].end + ")");
  cmd.get(msg, function(){
      splitPdfRecursive(inputFile, outputLoc, arr, index+1);
  });
};

let pdfParser = new PDFParser();

var acnArr = [];

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    // console.log(pdfData.formImage.Pages[0]);

    for (i=0; i<pdfData.formImage.Pages.length; i++){
        // console.log(pdfData.formImage.Pages[i].Texts.length);
        for (y=0; y<pdfData.formImage.Pages[i].Texts.length; y++){
            // console.log(pdfData.formImage.Pages[i].Texts[y]);
            if (pdfData.formImage.Pages[i].Texts[y].x > 11 &&
            pdfData.formImage.Pages[i].Texts[y].x < 11.5 &&
            pdfData.formImage.Pages[i].Texts[y].y > 43 &&
            pdfData.formImage.Pages[i].Texts[y].y < 44 &&
            pdfData.formImage.Pages[i].Texts[y].w == 86.4 &&
            pdfData.formImage.Pages[i].Texts[y].sw == 0.78125 &&
            pdfData.formImage.Pages[i].Texts[y].clr == 0 &&
            pdfData.formImage.Pages[i].Texts[y].A == "left"){
              // console.log(pdfData.formImage.Pages[i].Texts[y].R[0].T)
                acnArr.push({
                    claimNum: pdfData.formImage.Pages[i].Texts[y].R[0].T,
                    pageNum: i+1
                });
                // console.log(pdfData.formImage.Pages[i].Texts[y].R[0].T);
            }
        };
        // console.log(pdfData.formImage.Pages[i].);
    };
    var arr = createAcnPgArr(acnArr);

    splitPdfRecursive("c://users//whansen//desktop//pdfparser//work//FileServerServlet.pdf", "c://users//whansen//desktop//pdfparser//work", arr, 0);
    // console.log(arr);
    // for (i=0; i<arr.length; i++){
    //   splitPdf('C:\\Users\\whansen\\Desktop\\pdfParser\\work\\FileServerServlet.pdf', 'C:\\Users\\whansen\\Desktop\\pdfParser\\work\\'+arr[i].claimNum+'.pdf', arr[i].start, arr[i].end);
    // };
    console.log('done');
    // console.log(acnArr);
    // fs.writeFile("u:/pdfParser/work/export.json", JSON.stringify(pdfData, null, 2));
});

pdfParser.loadPDF("c:/users/whansen/desktop/pdfparser/work/FileServerServlet.pdf");

var createAcnPgArr = function(arr){
  var acnPgArr = [];
  for (i=0; i<arr.length; i++){
    if ( acnPgArr.length === 0 ){
      acnPgArr.push({'claimNum': arr[i].claimNum, 'start': arr[i].pageNum, 'end': arr[i].pageNum});
      continue
    } else {
      var found = 0;
      for (y=0; y<acnPgArr.length; y++){
        if ( arr[i].claimNum === acnPgArr[y].claimNum){
          found = 1;
          acnPgArr[y].end = arr[i].pageNum;
          break;
        };
      };
      if (!found){
        acnPgArr.push({'claimNum': arr[i].claimNum, 'start': arr[i].pageNum, 'end': arr[i].pageNum});
      };
    };
  };
  return acnPgArr;
};