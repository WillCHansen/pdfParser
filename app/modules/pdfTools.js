var cmd = require('node-cmd');
var fs = require('fs');
var PDFParser = require("pdf2json");
var path = require("path")

module.exports = {

    pdfParseAndSplit: function(inputFile, outputLoc){
        console.log("Parsing... Please wait")
        let pdfParser = new PDFParser();
        var acnArr = [];
        pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
        pdfParser.on("pdfParser_dataReady", pdfData => {
            for (i=0; i<pdfData.formImage.Pages.length; i++){
                for (y=0; y<pdfData.formImage.Pages[i].Texts.length; y++){
                    if (pdfData.formImage.Pages[i].Texts[y].x > 10.5 &&
                    pdfData.formImage.Pages[i].Texts[y].x < 11.5 &&
                    pdfData.formImage.Pages[i].Texts[y].y > 42 &&
                    pdfData.formImage.Pages[i].Texts[y].y < 44 &&
                    pdfData.formImage.Pages[i].Texts[y].w == 86.4 &&
                    pdfData.formImage.Pages[i].Texts[y].sw == 0.78125 &&
                    pdfData.formImage.Pages[i].Texts[y].clr == 0 &&
                    pdfData.formImage.Pages[i].Texts[y].A == "left"){
                        //need to add err handling if unable to parse claim num for each page
                        acnArr.push({
                            claimNum: pdfData.formImage.Pages[i].Texts[y].R[0].T,
                            pageNum: i+1
                        });
                    }
                };
            };
            var arr = createAcnPgArr(acnArr);
            splitPdfRecursive(inputFile, outputLoc, arr, 0);
        });
        pdfParser.loadPDF(inputFile);
    }

}

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

var splitPdfRecursive = function(inputFile, outputLoc, arr, index){
  if ( index === arr.length ) return 1
  var msg = 'pdftk ' + '"' + path.normalize(inputFile) + '"' + ' cat ' + arr[index].start + '-' + arr[index].end + ' output ' + '"' + path.normalize(outputLoc + '\\' + arr[index].claimNum + '.pdf') + '"';
  console.log("Working on " + arr[index].claimNum + " (" + (index+1) + " of " + (arr.length) + ") " + "(Pages " + arr[index].start + "-" + arr[index].end + ")");
  cmd.get(msg, function(err, data){
      //add err handling here
      if(err) console.log('ERROR');
      splitPdfRecursive(inputFile, outputLoc, arr, index+1);
  });
};