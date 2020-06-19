
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


function getQuestions(){
    const endpointQuestions = 'https://opentdb.com/api.php?amount=10'
    fetch(endpointQuestions)
        .then((response) => response.json())
        .then((myJson) => {
            printQuestions(myJson.results)
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
        html += `<option value='${category.id}'>${category.name}</option>`
    });
    selectCategories.innerHTML = html
}

function getCategoriesID(){
    const categoryID = document.getElementById('select-categories').value
    console.log(`ha seleccionado la categoria que tiene el id ${categoryID}`)
}

function printQuestions(questions){
    const typeQuestion = document.getElementById('select-typeQuestion')
    let questionHTML = ''
    
    
    
}

getQuestions()
getCategories()