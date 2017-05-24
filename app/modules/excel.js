var XLSX = require('xlsx');
// var workbook = XLSX.readFile('C:\\Users\\whansen\\Desktop\\test1.xlsx');
// var sheet_name_list = workbook.SheetNames;
// var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
// console.log(data)

module.exports = {
    excelToJSON: function(file){
        var workbook = XLSX.readFile(file);
        var sheet_name_list = workbook.SheetNames;
        return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
    }
};

