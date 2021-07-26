class Plates {
    constructor(restName) {
        this.restName = restName;
        this.platesData = [];
        this.platesQty = this.platesData.qty;
        console.log(this.platesData);
    }//

    intro() {
        console.log(`Hi, this restoran has no plates! Please, buy some.`);
    }
    buyPlates(platesQty) {
        this.platesData.push({
            qty: platesQty,
        })
        console.log(`Restoran purchased ${platesQty} plates.`);
    }
}

module.exports = Plates;