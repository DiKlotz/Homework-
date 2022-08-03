let sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];
empty = `   `;
stars = `***`;

let winter_sports = sports.slice(0, 5);
fruitsWinter = winter_sports.splice(2, 1);
console.log(`${stars} Winter sports ${stars}`);
for (i=0; i < winter_sports.length; i++) {
    winterSports = winter_sports[i].join().replaceAll(',', ': ');
    console.log(winterSports);
};
console.log(empty);

let summer_sports = sports.slice(5);
fruitsSummer = summer_sports.splice(2,2);
console.log(`${stars} Summer sports ${stars}`);

for (i=0; i < summer_sports.length; i++) {
    summerSports = summer_sports[i].join().replaceAll(',', ': ');
    console.log(summerSports);
};
console.log(empty);

let fruits = fruitsWinter.concat(fruitsSummer);
console.log(`${stars} Fruits ${stars}`);
for (i=0; i < fruits.length; i++) {
    fruitsType = fruits[i].join().replaceAll(',', ': ');
    console.log(fruitsType);
};