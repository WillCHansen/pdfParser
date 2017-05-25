var excel = require('./excel');
var print = require('./print');
var fs = require('fs');

// console.log(excel.excelToJSON('C:\\Users\\whansen\\Desktop\\test1.xlsx'))
// var data = "ABC";
// console.log("0xF1" + data.charCodeAt(2).toString(16));


// print.printWithOptions('C:\\Users\\whansen\\Desktop\\Provider Inquiry Form.pdf', 'http://10.1.205.71','claim')

var correlatedPrint = function(xlFile, medrecLoc, claimLoc, uri){
    var workObj = excel.excelToJSON(xlFile);
    // console.log(workObj);
    // workObj.forEach(function(entry, index){
    for (i=0; i<workObj.length; i++){
        var Accn = workObj[i]['Accn ID'];
        console.log('Working on ' + Accn + ' (' +  (i+1) + ' of ' + workObj.length + ')');
        var medRec = findFile(medrecLoc, Accn);
        var claim = findFile(claimLoc, Accn);
        if (!medRec){
            console.log('Unable to locate Medical Records');
            continue;
        }
        if (!claim){
            console.log('Unable to locate Claim');
            continue;
        }
        var medRecFilePath = medrecLoc + '\\' + medRec;
        var claimFilePath = claimLoc + '\\' + claim;
        print.printWithOptions(claimFilePath, uri, 'claim');
        print.printWithOptions(medRecFilePath, uri, 'medrec');
        console.log('sent')
    };
}

var findFile = function(searchLoc, Accn){
    var files = fs.readdirSync(searchLoc);
    for (i=0; i<files.length; i++){
        if ( files[i].toLowerCase().indexOf(Accn.toLowerCase()) >= 0 ){
            return files[i]
        };
    };
    return 0
};

correlatedPrint('c:\\users\\whansen\\desktop\\test1.xlsx', 'c:\\users\\whansen\\desktop\\2017-05-25-0921-whansen', 'C:\\Users\\whansen\\Desktop\\pdfParser\\work\\New folder', 'http://10.1.205.71');
// console.log(findFile('c:\\users\\whansen\\desktop\\2017-05-16-1253-whansen', 'AB1382963'));