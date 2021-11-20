var selectedConsoleArray = [];//["6430277", "6428324", "6426149", "6470923", "6257135", "6364255"];
//let sku = selectedConsoleArray.toString() 
//document.getElementById("skus").innerHTML = sku;


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


/**/

async function queryStore() {
  console.log("queryStore");
  //grab input
  var zipCode = document.getElementById("userZip").value;
  //if statement to check the length of that input
  if (zipCode.length == 5) {
    var sku = "6469083";
    var apiUrl =
      "https://api.bestbuy.com/v1/products/" +
      sku +
      "/stores.json?postalCode=" +
      zipCode +
      "&apiKey=XMAvBzSYr4Q7yiRb5DYdO6b4";
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          parseStoreData(data);
        });
      }
      //then if it passes queryStore
      //feed reponse to next method to parse JSON
    });
  }
}



function parseStoreData(data) {
  //var to hold array list of stores
  var storesList = data.stores;
  if (storesList.length > 0) {
    for (let x in storesList) {
      if (storesList[0]) {
        var storeNameLeft = document.getElementById("storeNameLeft");
        var consoleNameLeft = document.getElementById("consoleNameLeft");
        var quantityLeft = document.getElementById("quantityLeft");
        storeNameLeft.innerHTML = storesList[0].name + "<br />" + storesList[0].address;
        consoleNameLeft.innerText = "Xbox Series S";
        quantityLeft.innerHTML = "IN STOCK";
      }
      if (storesList[1]) {
        var storeNameRight = document.getElementById("storeNameRight");
        var consoleNameRight = document.getElementById("consoleNameRight");
        var quantityRight = document.getElementById("quantityRight");
        storeNameRight.innerHTML = storesList[1].name + "<br />" + storesList[1].address;
        consoleNameRight.innerText = "Xbox Series S";
        quantityRight.innerHTML = "IN STOCK";
      }
    }
  } //else show user error no stores

  //for loop list go store by store get map from JSON

  //provide data to DOM
}




{ /* BulkGetInventoryItem */
  "requests": [
    { /* GetInventoryItem*/
      "sku": "string"
    }
  ]
}