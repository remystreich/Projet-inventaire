class Supply {
    constructor(_name, _type, _number, _dlc, _price) {
        this.name = _name;
        this.type = _type;
        this.number = _number;
        this.dlc = _dlc;
        this.price = _price;
        this.totalPrice = this.price * this.number;
        
        switch (this.type) {
            case "Produit frais":
                this.backgroundColor = 'rgba(0, 106, 255, 0.884)';
                this.img = "url(./assets/img/froid.png)"
                break;
            case "Conserve":
                this.backgroundColor = 'rgba(13, 169, 34, 0.593)';
                this.img = "url(./assets/img/conserve.png)"
                break
            case "Produit sec":
                this.backgroundColor = "#ECA72C";
                this.img = "url(./assets/img/sec.png)"
                break
            case "Consommable":
                this.backgroundColor = "#DB5461";
                this.img = "url(./assets/img/conso.png)"
                break
            case "Surgelé":
                this.backgroundColor = 'rgba(29, 187, 187, 0.799)';
                this.img = "url(./assets/img/flocon.png)"
                break
            default:
                break;
        }
    }
}