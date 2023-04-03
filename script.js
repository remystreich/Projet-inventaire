//////script pour la modal
let createButton = document.getElementById('create');
let modalForm = document.getElementById('modalForm');
let confirmBtn = document.getElementById('updateSupply');
let form = document.getElementById('form')
createButton.addEventListener('click', (event) => {
    modalForm.showModal();
    event.stopPropagation()
})
confirmBtn.addEventListener('click', () => {
    modalForm.close()
});
document.addEventListener('click', (event) => {
    if (event.target !== form && !form.contains(event.target)) {
        modalForm.close()
    }
});
///////Ajout au stock d'un nouvel article
let itemManager = new Stock()

confirmBtn.addEventListener('click', () => {
    let name = document.querySelector("#name").value;
    let type = document.querySelector("#type").value;
    let number = document.querySelector("#number").value;
    let dlc = document.querySelector("#dlc").value;
    let price = document.querySelector("#price").value;
    let article = new Supply(name, type, number, dlc, price); ///créer un nouvel objet Supply qui reprend les valeurs entrées dans le form
    itemManager.createItem(article); ///entrer la variable article dans le  tableau Stock avec la méthode createItem du Stock


    document.getElementById("form").reset()  ///vider le formulaire du dialog

})

let searchBtn = document.getElementById('searchButton')
searchBtn.addEventListener('click', () => {
    document.getElementById('filters').style.display = "flex"
    document.querySelector('main').style.gridTemplateColumns = '1fr 8fr'

})
let hideSearch = document.getElementById('hideSearchBar')
hideSearch.addEventListener('click', () => {
    document.getElementById('filters').style.display = "none"
    document.querySelector('main').style.gridTemplateColumns = '1fr '

})

let searchbar = document.getElementById('filterBtn');
searchbar.addEventListener('click', () => {
    let filter = {
        name: document.getElementById('searchName').value,
        type: document.getElementById('searchType').value,
        price: document.getElementById('searchPrice').value,
        dlc: document.getElementById('searchDlc').value
    }
    
    itemManager.searchItem(filter)

})
let returnList = document.getElementById('returnList')
returnList.addEventListener('click', () => {
    itemManager.returnList()

})

let createList = document.getElementById('createList')
createList.addEventListener('click', () => {
    itemManager.groceryList()
})