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
    var printObj = [];
    for (i=0; i<workObj.length; i++){
        var Accn = workObj[i]['Accn ID'];
        // console.log('Working on ' + Accn + ' (' +  (i+1) + ' of ' + workObj.length + ')');
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
        printObj.push({
            accn: Accn,
            type: 'claim',
            path: claimFilePath
        });
        printObj.push({
            accn: Accn,
            type: 'medrec',
            path: medRecFilePath
        });
    };
    print.printObj(printObj, uri, 0);
    // console.log(printObj);
}

var findFile = function(searchLoc, Accn){
    var files = fs.readdirSync(searchLoc);
    for (f=0; f<files.length; f++){
        if ( files[f].toLowerCase().indexOf(Accn.toLowerCase()) >= 0 ){
            return files[f]
        };
    };
    return 0
};

// print.printWithOptions('c:\\users\\whansen\\desktop\\2017-05-25-0921-whansen\\AB3047155_2017-05-25-0921-whansen.pdf', 'http://10.1.205.71', 'medrec');

// console.log(fs.readFileSync('c:\\users\\whansen\\desktop\\2017-05-25-0921-whansen\\AB3047155_2017-05-25-0921-whansen.pdf','hex'));

correlatedPrint('c:\\users\\whansen\\desktop\\test1.xlsx', 'c:\\users\\whansen\\desktop\\2017-05-25-0921-whansen', 'C:\\Users\\whansen\\Desktop\\pdfParser\\work\\New folder', 'http://10.1.205.71');
// console.log(findFile('c:\\users\\whansen\\desktop\\2017-05-16-1253-whansen', 'AB1382963'));