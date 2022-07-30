let arrAny = [];
let minArr = +2;
let maxArr = +10; 
let arrAnyLength = arrAny.length;
let arrProduct = 1;
do{
    arrAnyLength = +prompt(`Enter the desired length of the array from ${minArr} to ${maxArr}`);
    if (arrAnyLength < 0) arrAnyLength = Math.abs(arrAnyLength);
    if(!Number.isInteger(arrAnyLength)) arrAnyLength = Math.round(arrAnyLength);   
} while(arrAnyLength < minArr || arrAnyLength > maxArr || isNaN(arrAnyLength));

for (let i = 0; i< arrAnyLength; i++) {
    let randomValue = Math.round(Math.random()*10); 
    arrAny[i] = randomValue;
    arrProduct *= arrAny[i];
}

console.log(arrAny)
console.log(arrProduct)