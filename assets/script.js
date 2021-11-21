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

function queryStore() {
  // console.log("queryStore");
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
queryStore()


function parseStoreData(data) {
  //var to hold array list of stores
  var storesList = data.stores;
  console.log(storesList);
  if (storesList.length > 0) {
    for (let x in storesList) {
      if (storesList[0]) {
        var storeNameLeft = document.getElementById("storeNameLeft");
        var consoleNameLeft = document.getElementById("consoleNameLeft");
        var quantityLeft = document.getElementById("quantityLeft");
        storeNameLeft.innerHTML = "<a href='https://stores.bestbuy.com/ca/elk-grove/9131-w-stockton-blvd-349.html'>" + storesList[0].name + "<br />" + storesList[0].address + "</a>";
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
  for (let i = 0; i < response.data.products.length; i++) {
    
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
    if (response.data.products[i].name.includes("PlayStation 5")) {
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