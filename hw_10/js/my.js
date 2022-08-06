const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', 
	['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', 
	['Iron Man', 'the Hulk', 'Black Widow']]
]
function getInfo(array, caption) {
	document.write(`<table><caption>${caption} info</caption><tbody>`);
	for (i=0; i <array.length; i++) {
		document.write(`
				<tr>`);
			for(j=0; j<array[i].length; j++) {
				if (Array.isArray(array[i][j]))	{
					str = array[i][j].join('; ');
					document.write(`
				<td>${str}</td>`);
				} else {
					document.write(`
					<td>${array[i][j]}</td>`);
				}
				
			}
			document.write(`</tr>`);
	}
	document.write(`</tbody></table>
	<br>`);
}

getInfo(animals, 'Animals');
getInfo(food, 'Food');
getInfo(universes, 'Universes');