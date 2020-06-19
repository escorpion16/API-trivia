const endpoint = 'https://opentdb.com/api.php?amount=10&category=32&type=multiple'



// Funcion para obtener las categorias
function getCategories(){
    const endpointCategories = 'https://opentdb.com/api_category.php'
    fetch(endpointCategories)
    .then((response) => response.json())
    .then((dataJson) => {
        printCategories(dataJson)
    })
    .catch((error) => console.error(error))
}


function printCategories(categories){
    console.log(categories)
}

getCategories()