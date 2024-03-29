const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}

class Coffee {
    constructor(obj) {
        Object.assign(this, obj)
    }

    getClass(){
        return ['coffee'];
    }


    makeCoffee() {
        return `<div class="cup">
            <div class="${this.getClass().join(' ')}">${this.getIngredients()}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }

    getIngredients(){
        const ingredient = [];
        if (this.ingredients) {
            for (let key in this.ingredients) {
                ingredient.push(`<p style="height: ${this.ingredients[key]}%" class="ingredient ${key.replaceAll(' ', '__')}">${key}</p>`);
            }
            return `<div class="coffee__ingredients"> ${ingredient.join(' ')}</div>`;
        }
    }
}

class Espresso extends Coffee {
    constructor(obj){
        super(obj);
    }
    getClass(){
        return ['coffee', 'coffee--espresso'];
    }
}

class EspressoMilk extends Coffee {
    constructor(obj){
        super(obj);
    }
    getClass(){
        return ['coffee', 'coffee--espressoMilk'];
    }
}

class Alcoholic extends Coffee {
    constructor(obj){
        super(obj);
    }
    getClass(){
        return ['coffee', 'coffee--alcoholic'];
    }
}

class Dessert extends Coffee {
    constructor(obj){
        super(obj);
    }
    getClass(){
        return ['coffee', 'coffee--dessert'];
    }
}

let renderDefaultCoffee = new Coffee(
    {
        title: `Default Coffee`,
        ingredients: {
            espresso: 50,
            whiskey: 10,
            "whipped cream": 40
        }
    }
).makeCoffee();

const COFFEE_CLASS = {
    Espresso: coffee => new Espresso(coffee),
    EspressoMilk: coffee => new EspressoMilk(coffee),
    Alcoholic: coffee => new Alcoholic(coffee),
    Dessert: coffee => new Dessert(coffee)
}

let coffeeClass = [];
for (key in COFFEE_TYPES) {
      let coffeeWithClass = COFFEE_TYPES[key]
           .map(coffee => {
               return COFFEE_CLASS[key] ? COFFEE_CLASS[key](coffee) : new Coffee(coffee)
           })
            .map(coffee => coffee.makeCoffee())
	        coffeeClass = coffeeClass.concat(coffeeWithClass);
        }


document.write(`<section class="cups">${renderDefaultCoffee} ${coffeeClass.join(' ')}</section>`);