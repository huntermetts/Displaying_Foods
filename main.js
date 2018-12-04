// Function that creates DOM elements | MASTER FUNCTION
function appendAndCreateElements(name, type, ethnic, barcode){
    // Declarations:
    let container = document.querySelector("#foodListId");
    let foodSections = document.createElement("section");
    let foodName = document.createElement("h1");
    let foodType = document.createElement("p");
    let foodEthnicity = document.createElement("p");

    // PART 2: MAKING LIST
    let foodIngredientsUl = document.createElement("ul");
    let foodIngredientsLi = document.createElement("li");
    // Appending elements and then adding the text (ORDER MATTERS)
    container.appendChild(foodSections);

    foodSections.appendChild(foodName);
    foodName.innerHTML = name;
    foodName.classList.add("sections");

    foodName.appendChild(foodType);
    foodType.innerHTML = type;

    foodName.appendChild(foodEthnicity);
    foodEthnicity.innerHTML = ethnic;

    foodName.appendChild(foodIngredientsUl);
    foodIngredientsUl.appendChild(foodIngredientsLi);
    foodIngredientsLi.innerHTML = barcode;



    // Creating text elements:
    // foodEthnicity.innerHTML = "The ethnicity of the food will be here";
    // foodType.innerHTML = "The type of the food will be here";
    // foodName.innerHTML = "The name of the food will be here";
}

// appendAndCreateElements();


// This line makes a request to the secific domain, then the port address, and then the resource on the web
fetch("http://localhost:8088/food")
//
// This line acceptes the request and parses the data (when data is recieved from a .json file, it is a string, the data here is being converted to a js object 'foods')
    .then(foods => foods.json())
//
// These lines accept the newly converted js object as an arguement to a function, and then console.logs a table with the data
    .then(parsedFoods => {
        parsedFoods.forEach(function(allFoods){
            let ingredientList;
        fetch(`https://world.openfoodfacts.org/api/v0/product/${allFoods.barcode}.json`)  // Fetch from the API
        .then(productInfo => productInfo.json())  // Parse as JSON
        .then(parsedProductInfo => {
            ingredientList = parsedProductInfo.product.ingredients_text;
            console.log(ingredientList);
            appendAndCreateElements(allFoods.name, allFoods.type, allFoods.ethnicity, ingredientList);
        // What should happen when we finally have the array?
    })
        // appendAndCreateElements(allFoods.name, allFoods.type, allFoods.ethnicity, ingredientList);
        // console.table(allFoods);
        });
    });




    // PART 2:
    // FETCHING BARCODE API:
    // Fetch from the API:
    // fetch(`https://world.openfoodfacts.org/api/v0/product/${}.json`) 
    // .then(codes => codes.json())  // Parse as JSON
    // .then(barcodes => {
    //     barcodes.forEach(function(barcode){
    //     console.table(barcode);
    //     }
    //     );
    // })




