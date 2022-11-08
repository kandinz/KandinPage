var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    Init();

    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
    
    function Init(){
        readTextFile("data.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
        });
    }
   
});