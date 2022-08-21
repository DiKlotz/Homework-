const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

class Vegetable {
    constructor(product){
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;

        Object.assign(this, product);
    }

    getPrice(){
    return this.season ? this.price * this.seasonKoef : this.price;
    }
    getInfo() {
        return `Type: Vegetable. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}.  ${this.season === true ? 'Season: true':''}`;
    }  
}


let newVegetables = vegetables
    .map(product => new Vegetable(product))
    .map(product => `<li>${product.getInfo()}</li>`)
    .join('')

document.write(`<ul>${newVegetables}</ul>`);