var selectedConsoleArray = [];//"6430277", "6428324", "6426149", "6470923", "6257135", "6364255"];
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

function queryStore() {
  // console.log("queryStore");
  //grab input
  var zipCode = document.getElementById("userZip").value;
  //if statement to check the length of that input
  if (zipCode.length == 5) {
    var sku = "6452232";
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
queryStore()


function parseStoreData(data) {
  //var to hold array list of stores
  var storesList = data.stores;
  console.log(storesList);
  if (storesList.length > 0) {
    for (let x in storesList) {
      if (storesList[0]) {
        var storeNameLeft = document.getElementById("rowOneLocation");
        var consoleNameLeft = document.getElementById("console");
        var quantityLeft = document.getElementById("rowOnePrice");
        var inStock = document.getElementById("rowOneBestBuy");
        storeNameLeft.innerHTML = storesList[0].name + "<br />" + storesList[0].address + "<br />" + storesList[0].city + ", " + storesList[0].state + " " + storesList[0].postalCode; 
        
        consoleNameLeft.innerText = "Xbox Series S";
        quantityLeft.innerHTML = "19.99";
        inStock.innerHTML = "IN STOCK";
      }
 /*     if (storesList[1]) {
        var storeNameRight = document.getElementById("storeNameRight");
        var consoleNameRight = document.getElementById("consoleNameRight");
        var quantityRight = document.getElementById("quantityRight");
        storeNameRight.innerHTML = storesList[1].name + "<br />" + storesList[1].address + "<br />" + storesList[1].city + ", " + storesList[1].state + " " + storesList[1].postalCode;
        consoleNameRight.innerText = "Xbox Series S";
        quantityRight.innerHTML = "IN STOCK";
      } */
    }
  } //else show user error no stores

  //for loop list go store by store get map from JSON

  //provide data to DOM
}






// EBAY API!
var options = {
  method: 'GET',
  url: 'https://ebay-product-search-scraper.p.rapidapi.com/index.php',
  // this is what it is searching for
  params: {query: 'game_console'},
  headers: {
    'x-rapidapi-host': 'ebay-product-search-scraper.p.rapidapi.com',
    'x-rapidapi-key': 'b92f59801fmsh8a976a850e11445p144c1fjsnab68690b862b'
  }
};




axios.request(options).then(function (response) {
	console.log(response.data);
  var storeNameLeft = document.getElementById("storeNameLeft");
  var consoleNameLeft = document.getElementById("consoleNameLeft");
  var quantityLeft = document.getElementById("quantityLeft");
  storeNameLeft.innerHTML = "<a href= "+ response.data.products[60].link +"> <br /></a>";
  consoleNameLeft.innerText = "Game Console";
  quantityLeft.innerHTML = "IN STOCK";
  for (let i = 60; i < response.data.products.length; i++) {
    //---Two---
    var consoleTwoName = response.data.products[60].name;
    var consoleTwoPrice = response.data.products[60].price;
    var consoleTwoResults = response.data.products[60].link;
    document.getElementById("console2").innerText = consoleTwoName;
    document.getElementById("rowTwoPrice").innerText = consoleTwoPrice;
    document.getElementById("rowTwoEbay").innerText = consoleTwoResults;
    //---Three
    var consoleThreeName = response.data.products[61].name;
    var consoleThreePrice = response.data.products[61].price;
    var consoleThreeResults = response.data.products[61].link;
    document.getElementById("console3").innerText = consoleThreeName;
    document.getElementById("rowThreePrice").innerText = consoleThreePrice;
    document.getElementById("rowThreeEbay").innerText = consoleThreeResults;
    //---Four
    var consoleFourName = response.data.products[62].name;
    var consoleFourPrice = response.data.products[62].price;
    var consoleFourResults = response.data.products[62].link;
    document.getElementById("console4").innerText = consoleFourName;
    document.getElementById("rowFourPrice").innerText = consoleFourPrice;
    document.getElementById("rowFourEbay").innerText = consoleFourResults;
    //---Five
    var consoleFiveName = response.data.products[63].name;
    var consoleFivePrice = response.data.products[63].price;
    var consoleFiveResults = response.data.products[63].link;
    document.getElementById("console5").innerText = consoleFiveName;
    document.getElementById("rowFivePrice").innerText = consoleFivePrice;
    document.getElementById("rowFiveEbay").innerText = consoleFiveResults;
    // calling for which console
    if (response.data.products[i].name.includes("Nintendo Switch")) {
      console.log(response.data.products[i]);
    }
    if (response.data.products[i].name.includes("Nintendo Switch Lite")) {
      console.log(response.data.products[i]);
    }
    if (response.data.products[i].name.includes("Nintendo Switch OLED")) {
      console.log(response.data.products[i]);
    }
    if (response.data.products[i].name.includes("PlayStation 5", "ps5", "sony playstation 5")) {
      console.log(response.data.products[i]);
    }
    if (response.data.products[i].name.includes("Xbox Series X")) {
      console.log(response.data.products[i]);
    }
    if (response.data.products[i].name.includes("Xbox Series S 512GB")) {
      console.log(response.data.products[i]);
    }
  }
  console.log(response.data.products[60].link);
}).catch(function (error) {
	console.error(error);
});