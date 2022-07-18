const userLine = prompt("Enter the text");
const userId = Number(prompt(`Enter a number:
1. Find out the unicode value of a symbol.
2. Remove a symbol from string.
3. Change a symbol from a string to a random smiley.
4. Find the number of letters in a string.`));
let lineSymbol;
let lineIndex;

smile = [")", ":)", ":(", "=)", ":P", ";)", "=(", ":D", ":S", ":$"];


switch (userId) {

    case 1:
        lineSymbol = prompt(`Enter the symbol whose unicode should be obtained from your string:
${userLine}`);
        lineIndex = userLine.indexOf(lineSymbol);
        const unicodeLine = userLine.charCodeAt(lineIndex);
        console.log(`a unicode symbol "${lineSymbol}" - ${unicodeLine}`);
        break;
    
    case 2:
        lineSymbol = prompt(`Enter the symbol that needs to be removed from your string:
${userLine}`);
        lineIndex = userLine.indexOf(lineSymbol);
        const deleteSymbol = userLine.slice(0, lineIndex) + userLine.slice(lineIndex + 1);
        console.log(deleteSymbol);
        break;
    
    case 3:
        lineSymbol = prompt(`Enter the symbol to be changed to a smiley from your string:
${userLine}`);
        lineIndex = userLine.indexOf(lineSymbol);
        const randomInt = getRandomIntInclusive(0, 9);
        const replaceSymbol = userLine.substring(0, lineIndex) + smile[randomInt] + userLine.substring(lineIndex + 1);
        console.log(replaceSymbol);
        break;
    
    case 4:
       const letterCount = userLine.replace(/\s/g, "").length;
        console.log(`Number of letters in a string "${userLine}" - ${letterCount}`);
        break;
}




function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max); 

  return Math.floor(Math.random() * (max - min + 1) + min);
}