const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const myPromise = new Promise((resolve, reject) => { confirm(`Подивитись баланс карти?`) ? resolve(userData) : reject({ userData: userData, bankData: bankData }) })
myPromise
    .then(
        (userData) => {
            let valuteArrName = []
            let valute;

            for (let key in userData) { valuteArrName.push(key) }
            do {
                valute = prompt(`Введіть валюту, за якою буде виведено баланс: ${valuteArrName.join(`, `)}`)
            } while (!valute || valuteArrName.indexOf(valute) < 0)
            console.log(`Баланс становить: ${userData[valute]} ${valute}`)
        },

        (obj) => {
            let userData = obj.userData,
                bankData = obj.bankData,
                valuteArrName = [],                
                value

            for (let key in userData) {
                if (bankData[key] && bankData[key].max > 0) valuteArrName.push(key)
            }

            do {
                valute = prompt(`Введіть валюту, за якою буде проведено зняття готівки: ${valuteArrName.join(`, `)}`)
            } while (!valute || valuteArrName.indexOf(valute) < 0)

            do {
                value = prompt(`Введіть суму, яку ви хочете зняти`);
            } while (!value);
            if (value > userData[valute]) return Promise.reject(`Некоректна сума зняття`)
            if (value > bankData[valute].max) return Promise.reject(`Введена сума більша за доступну. Максимальна сума зняття: ${bankData[valute].max} ${valute}`)
            if (value < bankData[valute].min) return Promise.reject(`Введена сума менша за доступну. Мінімальна сума зняття: ${bankData[valute].min} ${valute}`)
            console.log(`От Ваші гроші ${value} ${valute} ${bankData[valute].img}`)
        }
    )
    
    .finally(() => console.log(`Дякую, гарного дня 😊`))