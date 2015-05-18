/*
Modified from http://stackoverflow.com/questions/3916191/download-data-url-file. 
Extremely cool client side file creation method. Data URL standard.
*/

function downloadURI() {
  var link = document.createElement("a");
  var d = new Date();
  var fname =window.prompt("Enter Filename?");
  if(fname =='')fname = d.toString();
  link.download = fname+'.nushblock';
  link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace)))
  link.click();
}

function upload(files){
var file = files[0];
console.log(files);
if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
		var xml = Blockly.Xml.textToDom(evt.target.result);
		Blockly.Xml.domToWorkspace(workspace, xml);
    }
    reader.onerror = function (evt) {
        alert("Error Reading File");
    }
}
}

function shift_cipher(word,p){
	ciphered =''
	shift = 0
	for (var i = 0, len = p.length; i < len; i++) {
	    shift+=p.charCodeAt(i)
	}
	
	for (var i = 0, len = word.length; i < len; i++) {
		appended = (word.charCodeAt(i)+shift)%256
		ciphered += String.fromCharCode(appended)
	}
	return ciphered
}
	