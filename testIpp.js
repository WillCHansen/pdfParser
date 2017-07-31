var ipp = require('ipp');
// var uri = "http://10.1.205.31";
// var printer = ipp.Printer(uri);


// var msg = {
//     "operation-attributes-tag": {
//         "attributes-charset": "utf-8",
//         "attributes-natural-language": "en",
//         "printer-uri": uri
//         // "requesting-user-name": "mdawson"
//     }
// };

var printer = ipp.Printer('http://10.1.205.71', {
    version: '1.1'
});

// var msg = {
//     "operation-attributes-tag": {
//         // "requesting-user-name": "William",
//         // "job-name": "My Test Job",
//         // "document-format": "application/pdf",
//         "ipp-attribute-fidelity": false
//     }
//     // "job-attributes-tag":{
        
//     // }
// };

printer.execute("Get-Printer-Attributes", null, function(err, res){
    console.log(res);
    console.log(err);
});
// console.log(ipp.serialize(msg));

// var msg = {
// 	"operation-attributes-tag": {
//         "printer-uri": uri,
// 		'job-uri': 'ipp://10.1.205.71/17054'
// 	}
// };
// function go(){
	// printer.execute("Get-Job-Attributes", msg, function(err, res){
		// console.log(res);
		// setTimeout(go, 0);
	// });
// }