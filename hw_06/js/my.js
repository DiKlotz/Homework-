burger = prompt(`Do you like Hamburger or Cheeseburger? 🍔`);
if(burger) {
    burger = burger.replaceAll(" ", "").toLowerCase();
    burger = burger[0].toUpperCase() + burger.slice(1);
} else {
    alert('Please choose hamburger or cheeseburger !');
}
while (burger !== 'Hamburger' && burger !== 'Cheeseburger') {
    burger = prompt(`Do you like Hamburger or Cheeseburger? 🍔`);
    if(burger) {
        burger = burger.replaceAll(" ", "").toLowerCase();
        burger = burger[0].toUpperCase() + burger.slice(1);
    } else {
        alert('Please choose hamburger or cheeseburger !');  
    }
};

price = 0;

switch (burger) {
    case "Hamburger":
        price += 10;
        console.log(price);
        break;
    case "Cheeseburger":
        price += 15;
        console.log(price);
        break;
}
 
cheese = confirm(`Would you like double cheese?`);
    switch(cheese) {
        case true:
        price +=5;
        console.log(price);
        break;
        };

potato = confirm(`Would you like potato? 🍟`);
    switch(potato) {
        case true:
        potatoSize = prompt(`Choose potato size: small or middle or big`).replaceAll(" ", "").toLowerCase();
            switch (potatoSize) {
                case 'small': 
                price += 10;
                break;
                case 'middle': 
                price += 15;
                break;
                case 'big':
                price += 20;
                break;
            };
        };
      
sause = confirm(`Would you like sause?🧂`);
    switch(sause) {
        case true:
        sauseType = prompt(`Choose sauce: ketchup or mayonnaise`).replaceAll(" ", "").toLowerCase();
            switch (sauseType) {
                case 'ketchup':
                price += 10;
                console.log(price);
                break;
                case 'mayonnaise':
                price +=10;
                console.log(price);
                break;           
            }; 
        };

document.write(
    `<h2>Your order:</h2>
    <ul>
        <li>Bulka 🍔: ${burger}</li>
        ${potato ? `<li>Potato 🍟: ${potatoSize}</li>` : ``}
        ${sause ? `<li>Sauce 🧂: ${sauseType}</li>` : ``}
    </ul>
    <p>Price: $${price} </p>`
);