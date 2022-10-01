const API_HERO = `https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes`;
const API_UNIVERSE = `https://61c9d37520ac1c0017ed8eac.mockapi.io/universes`;
let heroes;


const controller = async (url, method = `GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }
    if (obj) options.body = JSON.stringify(obj)
    const respons = await fetch(url, options);
    return respons.ok ? respons.json() : Promise.reject(respons.status);
}

const getUniverses = async () => {
    try {
        let universe = await controller(API_UNIVERSE);
        renderUniverses(universe)
    } catch { }
}

const getHeroes = async () => {
    try {
        heroes = await controller(API_HERO)
        heroes.forEach(element => renderComponent(element))
    } catch { }
}

const removeHero = async (id) => {
    try {
        await controller(API_HERO + `/${id}`, `DELETE`)
        document.querySelector(`tr[data-id="${id}"]`).remove()
    } catch { }
}

const setFavourite = async (id, set) => {
    try {
        let findHero = heroes.find(e => e.id === id)
        findHero.favourite = set
        controller(API_HERO + `/${id}`, `PUT`, findHero)
    } catch { }
}

const checkHero = async (obj) => {
    heroes = await controller(API_HERO);
    if (heroes.find(x => x.name === obj.name)) throw `Користувач з таким ім'ям вже є в базі`
}

const addHero = async (obj) => {
    try {
        await checkHero(obj);
        let succesHero = await controller(API_HERO, `POST`, obj);
        renderComponent(succesHero);
    } catch (err) { console.log(err) }
}

const renderComponent = (obj) => {
    let heroesTable = document.querySelector(`#heroesTable`),
        tBody = document.createElement(`tbody`),
        component = document.createElement(`tr`)

        component.setAttribute(`data-id`, obj.id);

        component.innerHTML = `<td>${obj.name}</td>
                                <td>${obj.comics}</td>
                                <td>
                                    <label class="heroFavouriteInput">
                                    Favourite: <input type="checkbox" data-id="${obj.id}" ${obj.favourite ? `checked` : ``}>
                                    </label>
                                </td>
                                <td><button data-id="${obj.id}">Delete</button></td>`;

    tBody.append(component)

    let button = component.querySelector(`button`),
        inputCheckbox = component.querySelector(`input[type="checkbox"]`)

    button.addEventListener(`click`, e => removeHero(e.target.dataset.id))
    inputCheckbox.addEventListener(`change`, e => setFavourite(e.target.dataset.id, e.target.checked))

    heroesTable.append(tBody)
}

const renderUniverses = (foo) => {
    let form = document.querySelector(`#heroesForm`),
        heroComics = document.querySelector(`select[data-name="heroComics"]`)

    foo.forEach(item => {
        let optionComics = document.createElement(`option`)

        optionComics.value = item.name
        optionComics.innerHTML = item.name
        heroComics.append(optionComics)
    })

    form.addEventListener(`submit`, e => {
        e.preventDefault();

        let heroName = form.querySelector(`input[data-name="heroName"]`),
            heroComics = form.querySelector(`select[data-name="heroComics"]`),
            heroFavourite = form.querySelector(`input[data-name="heroFavourite"]`)

        let hero = {
            name: heroName.value,
            comics: heroComics.value,
            favourite: heroFavourite.checked
        }
        addHero(hero)
    })
}

getUniverses()
getHeroes()