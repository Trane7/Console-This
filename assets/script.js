var selectedConsoleArray = [];

const APIKey = "XMAvBzSYr4Q7yiRb5DYdO6b4";

function selectConsole(val) {
  //if console is in array
  if (selectedConsoleArray.includes(val)) {
    var x = document.getElementById(val);
    x.style = "background-color: #A333C8 !important"; 
    var index = selectedConsoleArray.indexOf(val);
    selectedConsoleArray.splice(index, 1);
    console.log(selectedConsoleArray);
  } else {
    //if console is not in array
    var x = document.getElementById(val);
    x.style = "background-color: black !important";
    selectedConsoleArray.push(val);
    console.log(selectedConsoleArray);
  }
}
var bby = require('bestbuy')(APIKey);
bby.stores('postalCode=55423', {show: 'storeId,storeType,name,city,region'}).then(function(data){
  console.log(data);
});