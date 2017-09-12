/**
 * @Author: Asaf Ofer
 * @Date:   12-09-2017 17:17
 * @Last modified by:   Asaf Ofer
 * @Last modified time: 12-09-2017 18:28
 */



var oFileIn;

$(function() {
    oFileIn = document.getElementById('my_file_input');
    if(oFileIn.addEventListener) {
        oFileIn.addEventListener('change', filePicked, false);
    }
});


function filePicked(oEvent) {
// Get The File From The Input
var oFile = oEvent.target.files[0];
var sFilename = oFile.name;
// Create A File Reader HTML5
var reader = new FileReader();

// Ready The Event For When A File Gets Selected
reader.onload = function(e) {
    var data = e.target.result;
    var cfb = XLSX.read(data, {type: 'binary'});
    console.log(cfb);
    cfb.SheetNames.forEach(function(sheetName) {
        // Obtain The Current Row As CSV
        var sCSV = XLS.utils.make_csv(cfb.Sheets[sheetName]);
        var oJS = XLS.utils.sheet_to_json(cfb.Sheets[sheetName]);

        $("#my_file_output").html(sCSV);
        oJS.forEach(row => {
          console.log(row);
        });
    });
};

// Tell JS To Start Reading The File.. You could delay this if desired
reader.readAsBinaryString(oFile);}
