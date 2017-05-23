var cmd = require('node-cmd');
var fs = require('fs');
var PDFParser = require("pdf2json");

// cmd.get('pdftk C:\\Users\\whansen\\Desktop\\pdfParser\\work\\test.pdf cat 2 output C:\\Users\\whansen\\Desktop\\pdfParser\\work\\output.pdf', function(err, data, stderr){
//   console.log('the current working dir is : ',data)
// });
// pdftk C:\\Users\\whansen\\Desktop\\pdfParser\\work\\test.pdf cat 2 output C:\\Users\\whansen\\Desktop\\pdfParser\\work\\output.pdf
//pdftk C:\Users\whansen\Desktop\pdfParser\work\test.pdf cat 1-1 output C:\Users\whansen\Desktop\pdfParser\work\output.pdf




let pdfParser = new PDFParser();

var acnArr = [];

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    // console.log(pdfData.formImage.Pages[0]);

    for (i=0; i<pdfData.formImage.Pages.length; i++){
        // console.log(pdfData.formImage.Pages[i].Texts.length);
        for (y=0; y<pdfData.formImage.Pages[i].Texts.length; y++){
            // console.log(pdfData.formImage.Pages[i].Texts[y].x);
            if (pdfData.formImage.Pages[i].Texts[y].x === 11.177 &&
            pdfData.formImage.Pages[i].Texts[y].y == 43.258 &&
            pdfData.formImage.Pages[i].Texts[y].w == 86.4 &&
            pdfData.formImage.Pages[i].Texts[y].sw == 0.78125 &&
            pdfData.formImage.Pages[i].Texts[y].clr == 0 &&
            pdfData.formImage.Pages[i].Texts[y].A == "left"){
                acnArr.push({
                    claimNum: pdfData.formImage.Pages[i].Texts[y].R[0].T,
                    pageNum: i+1
                });
                // console.log(pdfData.formImage.Pages[i].Texts[y].R[0].T);
            }
        };
        // console.log(pdfData.formImage.Pages[i].);
    };
    console.log(acnArr);
    // fs.writeFile("u:/pdfParser/work/export.json", JSON.stringify(pdfData, null, 2));
});

pdfParser.loadPDF("c:/users/whansen/desktop/pdfparser/work/test.pdf");

