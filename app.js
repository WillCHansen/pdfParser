var pdfTools = require('./pdfTools.js');

var inputFile = "c://users//whansen//desktop//pdfparser//work//FileServerServlet.pdf";
var outputLoc = "c://users//whansen//desktop//pdfparser//work";

pdfTools.pdfParseAndSplit(inputFile, outputLoc);