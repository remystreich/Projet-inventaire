class Stock {
    constructor() {
        this.item = [];
    }
    createItem(article) {
        this.item.push(article);
        this.displayItem(this.item);
    }
    returnList() {
        this.displayItem(this.item);
    }
    displayItem(array) {
        let parent = document.querySelector('#gridProduct');
        parent.innerHTML = '';
        array.forEach(element => {
            let container = document.createElement('div');
            container.classList.add('card');
            parent.appendChild(container);

            let nameH = document.createElement('h3');
            nameH.innerHTML = element.name;
            container.appendChild(nameH);

            let typeP = document.createElement('p');
            typeP.innerHTML = `${element.type}`;
            container.appendChild(typeP);

            let numberP = document.createElement('p');
            numberP.innerHTML = `Nombre: ${element.number}`;
            container.appendChild(numberP);

            let dlcP = document.createElement('p');
            dlcP.innerHTML = `DLC: ${element.dlc}`;
            container.appendChild(dlcP);

            let priceP = document.createElement('p');
            priceP.innerHTML = `Prix: ${element.price}`;
            container.appendChild(priceP);

            let totalPriceH = document.createElement('h4');
            totalPriceH.innerHTML = `Prix Total: ${element.totalPrice}`;
            container.appendChild(totalPriceH);

            let btnContainer = document.createElement('div');
            btnContainer.classList.add('cardFooter')
            container.appendChild(btnContainer)

            let btnUpdate = document.createElement('button')
            btnUpdate.innerHTML = "Update"
            let btnDelete = document.createElement('button')
            btnDelete.innerHTML = "delete"
            btnUpdate.addEventListener('click', () => {
                this.displayUpdate(element)
            })
            btnDelete.addEventListener('click', () => {
                this.deleteItem(element)
            })
            btnContainer.appendChild(btnDelete)
            btnContainer.appendChild(btnUpdate)

            container.style.backgroundColor = element.backgroundColor
            container.style.backgroundImage =element.img 
        })
    }
    deleteItem(article) {
        let index = this.item.indexOf(article)
        this.item.splice(index, 1)
        this.displayItem()
    }
    updateItem(article, oldArticle) {
        let index = this.item.indexOf(oldArticle)
        this.item[index] = article
        this.displayItem()
    }

    displayUpdate(item) {
        let parent = document.querySelector('#gridProduct');
        parent.innerHTML = ""
        parent.innerHTML = `
            <form action="" id="form">
                <h3>Modifier l'article</h3>
                <div>
                    <label for="name">Nom du produit</label>
                    <input type="text" id="updateName" value =${item.name}>
                </div>
                <div>
                    <label>Type</label>
                        <select id="updateType">
                            <option>${item.type}</option>
                            <option>Produit frais</option>
                            <option>Conserve</option>
                            <option>Produit secs</option>
                            <option>Consommable</option>
                            <option>Surgelé</option>
                        </select>
                    
                </div>
                <div>
                    <label for="number">Nombre</label>
                    <input type="number" id="updateNumber" value =${item.number}>
                </div>
                <div>
                    <label for="dlc">DLC</label>
                    <input type="date" id="updateDlc" value =${item.dlc}>
                </div>
                <div>
                    <label for="price">Prix d'achat en €</label>
                    <input type="number" name="" id="updatePrice" value =${item.price}>
                </div>
                <button id="updateArticle" type="button">Valider</button>
            </form>
       
       `
        document.querySelector('#updateArticle').addEventListener('click', () => {
            let name = document.querySelector("#updateName").value
            let type = document.querySelector("#updateType").value
            let number = document.querySelector("#updateNumber").value
            let dlc = document.querySelector("#updateDlc").value
            let price = document.querySelector("#updatePrice").value

            let newItem = new Supply(name, type, number, dlc, price)
            this.updateItem(newItem, item)
        })
    }

    searchItem(filter) {
        let result = this.item.filter(function (el) {
            return (el.name == filter.name || filter.name == '') &&
                (el.type == filter.type || filter.type == '') &&
                (el.price <= filter.price || filter.price == '') &&
                (el.dlc <= filter.dlc || filter.dlc == '')
        });
        this.displayItem(result)
    }

    groceryList() {
        let parent = document.querySelector('#gridProduct');
        parent.innerHTML = '';

        let container = document.createElement('div');
        container.classList.add('card');
        parent.appendChild(container);

        let nameH = document.createElement('h2');
        nameH.innerHTML = `Liste de course`;
        container.appendChild(nameH);

        let list = ""
        let result = this.item.filter(function (el) {
            return el.number == 0
        })
        for (let i = 0; i < result.length; i++) {
            list = result[i].name;
            let numberP = document.createElement('p');
            numberP.innerHTML = list;
            container.appendChild(numberP);
        }




    }






}
