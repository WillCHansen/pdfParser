var excel = require('./excel');
var print = require('./print');

// console.log(excel.excelToJSON('C:\\Users\\whansen\\Desktop\\test1.xlsx'))
// var data = "ABC";
// console.log("0xF1" + data.charCodeAt(2).toString(16));

var stringToHex = function(str){
    var arr = [];
    for (i=0; i<str.length; i++){
        arr.push(str.charCodeAt(i).toString(16));
    }
    return arr.toString().replace(/,/g , "");
}

console.log(stringToHex("http://10.1.205.71"));