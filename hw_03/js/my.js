let firstName = prompt("Enter your name:");
    console.log(firstName);

let lastName = prompt("Enter your last name:");
    console.log(lastName);

const day = prompt("Enter day of birth:");                
    console.log(Number(day));

const month = prompt("Enter month of birth:");                
    console.log(Number(month));

const year = prompt("Enter year of birth:");                
    console.log(Number(year));

let old = 2022 - year;
  
let zodiac;

let leap;
if(year % 400 ==0 || (year % 100 != 0 && year % 4 == 0) ){
    leap = 'years old (leap year)'
}else {
    leap = 'years old'
}


if ( (month == 1 && 19 < day < 32) || (month == 2 && 0 < day < 19) ) {   //1
    zodiac = 'Aquarius♒'
}
else if((month == 2 && 18 < day < 30) || (month == 3 && 0 < day < 21)) { //2
    zodiac ='Pisces♓'
}
else if((month == 3 && 20 < day < 32) || (month == 4 && 0 < day < 20)) {//3
    zodiac ='Aries♈'
}
else if((month == 4 && 19 < day < 31) || (month == 5 && 0 < day < 19)) {//4
    zodiac ='Taurus♉'
}
else if((month == 5 && 21 < day < 32) || (month == 6 && 0 < day < 19)) {//5
    zodiac ='Gemini♊'
}
else if ((month == 6 && 22 < day < 31) || (month == 7 && 0 < day < 23)) {//6
    zodiac ='Cancer♋'
}
else if((month == 7 && 22 < day < 32) || (month == 8 && 0 < day < 23)) {//7
    zodiac ='Leo♌'
}
else if((month == 8 && 22 < day < 32) || (month == 9 && 0 < day < 23)) {//8
    zodiac ='Virgo♍'
}
else if((month == 9 && 22 < day < 31) || (month == 10 && 0 < day < 23)) {//9
    zodiac ='Libra♎'
}
else if((month == 10 && 22 < day < 32) || (month == 11 && 0 < day < 22)) {//10
    zodiac ='Scorpio♏'
}
else if((month == 11 && 21 < day < 30) || (month == 12 && 0 < day < 21)) {//11
    zodiac ='Sagittarius♐'
}
else if ( (month == 12 && 21 < day < 30) || (month == 1 && 0 < day < 20) ) {
    zodiac ='Capricorn♑'
}
    
alert("User Bio:\ " + firstName + "\ " + lastName + ", " + old + "\ " + "years old" + "\ " + leap + "\ "+ zodiac + "; ");