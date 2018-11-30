// Function that creates DOM elements | MASTER FUNCTION
function appendAndCreateElements(name, type, ethnic){
    // Declarations:
    let container = document.querySelector('#foodListId');
    let foodSections = document.createElement("section");
    let foodName = document.createElement("h1");
    let foodType = document.createElement("p");
    let foodEthnicity = document.createElement("p");

    // Appending elements and then adding the text (ORDER MATTERS)
    container.appendChild(foodSections);

    foodSections.appendChild(foodName); 
    foodName.innerHTML = name;  
    foodName.classList.add("sections");

    foodName.appendChild(foodType);
    foodType.innerHTML = type;

    foodName.appendChild(foodEthnicity);
    foodEthnicity.innerHTML = ethnic;

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
        appendAndCreateElements(allFoods.name, allFoods.type, allFoods.ethnicity);
        console.table(allFoods)
        }
        )
    })




