const yearofBirth = prompt("Enter year of birth:");                
    console.log(Number(yearofBirth));    

let firstName = prompt("Enter your name:");
    console.log(firstName);

let lastName = prompt("Enter your last name:");
    console.log(lastName);    

const CURRENTYEAR = 2022;

alert("User Bio:\ " + firstName + "\ " + lastName + ", " + (CURRENTYEAR - yearofBirth) + "\ " + "years old;");