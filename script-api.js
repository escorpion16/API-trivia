const endpoint = 'https://opentdb.com/api.php?amount=10&category=32&type=multiple'



// Funcion para obtener las categorias
function getCategories(){
    const endpointCategories = 'https://opentdb.com/api_category.php'
    fetch(endpointCategories)
    .then((response) => response.json())
    .then((dataJson) => {
        printCategories(dataJson.trivia_categories)
    })
    .catch((error) => console.error(error))
}

// 1. obtener elemento donde se desea imprimir
// 2. generar HTML
// 3. imprimir informacion

function printCategories(categories){
    const selectCategories = document.querySelector('#select-categories')
    let html = ''
    categories.forEach(category => {
        html += `<option>${category.name}</option>`
    });
    selectCategories.innerHTML = html
}

getCategories()