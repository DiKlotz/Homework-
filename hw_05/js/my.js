const question = confirm(`Tell me three most important words 💚`)

if (question) {
    result = ``;

    for (word = 1; word <= 3; word++) {
        do {
            mainWord = prompt(`Enter word #${word}`);
            letters = true;
            if (mainWord) {
                for (i = 0; i < 9; i++) {
                    if (mainWord.includes(i)) {
                        letters = false;
                        break;
                    }
                }
            }
        } while (!mainWord || !letters)
        console.log(`Word #${word}: ${mainWord}`);

        do {
            typeTransform = prompt(`Choose type of transfromation for "${mainWord}": uppercase or lowercase or capitalize`)

            if(typeTransform)
                typeTransform = typeTransform.toLowerCase().replaceAll(` `,``);

            if (typeTransform === `uppercase`) {
                typeTransformWord = mainWord.toUpperCase();
            } else if (typeTransform === `lowercase`) {
                typeTransformWord = mainWord.toLowerCase();
            } else if (typeTransform === `capitalize`) {
                typeTransformWord = mainWord.charAt(0).toUpperCase() + mainWord.slice(1);
            }
        } while (!typeTransform || typeTransform !== `uppercase` && typeTransform !== `lowercase` && typeTransform !== `capitalize`)

        console.log(`Transform type for word #${word}: ${typeTransform}`);
        console.log(`Transformed word #${word}: ${typeTransformWord}`);

        result += typeTransformWord;
        result += word === 3 ? `!` : ` `;
    }
    console.log(`******`);
    console.log(result);
}