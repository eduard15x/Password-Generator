//generate 4 different password into our inputs

const btnGenerate = document.querySelector('#generate-btn');
const inputs = document.querySelectorAll('input');

btnGenerate.addEventListener('click', () => {
    for(let j = 0; j < inputs.length; j++){
        inputs[j].value = generateRandom();
    }
    
});

function generateRandom() {
    let password = '';
    let symbols = ['~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','','"','|',',','>','<',':','?'];
    //for short name i will use lett for letters & nr for numbers
    let lettAndNr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let lettAndNr1 = '';
    let lettAndNr2 = '';
    let lettAndNr3 = '';

    let symbols1 = '';
    let symbols2 = '';
    let symbols3 = '';

    for(let i = 0; i < 3; i++) {
        lettAndNr1 += lettAndNr.charAt(Math.floor(Math.random() * lettAndNr.length));// 
        lettAndNr2 += lettAndNr.charAt(Math.floor(Math.random() * lettAndNr.length));
        lettAndNr3 += lettAndNr.charAt(Math.floor(Math.random() * lettAndNr.length));

        symbols1 += symbols[Math.floor(Math.random() * symbols.length)];
        symbols2 += symbols[Math.floor(Math.random() * symbols.length)];
        symbols3 += symbols[Math.floor(Math.random() * symbols.length)];
    }
    password = lettAndNr1 + symbols1 + lettAndNr2 + symbols2 + lettAndNr3 + symbols3;
    return password;
}


let inputRange = document.getElementById('input-range');
let outputRange = document.getElementById('output-range');


function showRange() {
    outputRange.textContent = inputRange.value;
    return outputRange.textContent;    
}
showRange();












// //Exercise 1 - Object and function
// let person = {
//     "name": "Eduard",
//     "age": 23,
//     "country": "Romania" 
// };

// function logData() {
//     console.log( `${person.name} is ${person.age} years old and lives in ${person.country}`);
// }
// logData();


// //Exercise 2 - If/else if/else
// let age = Math.floor(Math.random() *100) + 1;

// if( age < 6) {
//     console.log("free")
// } else if ( age < 18) {
//     console.log("child discount")
// } else if ( age < 27) {
//     console.log("student discount")
// } else if ( age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }

// console.log(age)


// //Exercise 3 - Loops and arrays
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// for ( let i = 0; i< largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }


// //Exercise 4 - Push, pop, shit, unshift
// let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// largeCountries2.pop();
// largeCountries2.push("Pakistan");
// largeCountries2.shift();
// largeCountries2.unshift("China")

// console.log(largeCountries2);


// //Exercise 5 - Logical Operator
// let dayOfMonth = 13;
// let weekDay = 'Friday';

// if ( dayOfMonth === 13 && weekDay === 'Friday') {
//     console.log('😱')
// }


// //Exercise 6 - Rock papers scissors
// let hands = ['rock', 'paper', 'scissors'];

// function returnItem() {
//     let randomIndex = Math.floor(Math.random() * 3);
//     let randomItem = hands[randomIndex];
//     console.log(randomIndex);
//     console.log(randomItem);
//     //return hands[randonIndex];
// }
// returnItem();


// //Exercise 7 - Sorting fruits from an array
// let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.querySelector('.apple-shelf');
// let orangeShelf = document.querySelector('.orange-shelf');

// for ( let i = 0; i < fruits.length; i++) {
//     if( fruits[i] === "🍎") {
//         appleShelf.textContent += "🍎";
//     } else if ( fruits[i] === "🍊") {
//         orangeShelf.textContent += "🍊";
//     } else {
//     }
// }


// //Exercise 8




// let passwords = ['~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','','"','|',',','>','<',':','?']

// btnGenerate.addEventListener('click', ()=> {
//     for ( let i = 0; i < x.length; i++) {
//         x[i].value = Math.random() *3;
//     }
// })

// function makeid() {
//     let password = "";
//     let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let text1 = "";
//     let text2 = "";
//     let text3 = "";
//     let text4 = "";
//     for (let i = 0; i < 3; i++){
//         text1 += possible.charAt(Math.floor(Math.random() * possible.length));
//         text2 += possible.charAt(Math.floor(Math.random() * possible.length));
//         text3 += possible.charAt(Math.floor(Math.random() * possible.length));
//         text4 += possible.charAt(Math.floor(Math.random() * possible.length));
        
//     }
//     password = text1 + text2 + text3 + text4;
//     return password;
// }

// console.log(makeid())






// function generatePassword() {

//     let password = '';
//     let symbols = ['~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','','"','|',',','>','<',':','?'];
//     //for short name i will use lett for letters & nr for numbers
//     let lettAndNr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//     let lettAndNr1 = '';
//     let lettAndNr2 = '';
//     let lettAndNr3 = '';

//     let symbols1 = '';
//     let symbols2 = '';
//     let symbols3 = '';

//     for(let i = 0; i < 3; i++) {
//         lettAndNr1 += lettAndNr.charAt(Math.floor(Math.random() * lettAndNr.length));
//         lettAndNr2 += lettAndNr.charAt(Math.floor(Math.random() * lettAndNr.length));
//         lettAndNr3 += lettAndNr.charAt(Math.floor(Math.random() * lettAndNr.length));

//         symbols1 += symbols[Math.floor(Math.random() * symbols.length)];
//         symbols2 += symbols[Math.floor(Math.random() * symbols.length)];
//         symbols3 += symbols[Math.floor(Math.random() * symbols.length)];
//     }

//     password = lettAndNr1 + symbols1 + lettAndNr2 + symbols2 + lettAndNr3 + symbols3;
//     console.log(password);

// };

// generatePassword();




//Exercise 8

// const btnGenerate = document.querySelector('#generate-btn');

// btnGenerate.addEventListener('click', generatePassword());

// function generatePassword() {

//     let password = '';
//     let symbols = ['~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','','"','|',',','>','<',':','?'];
//     //for short name i will use lett for letters & nr for numbers
//     let lettAndNr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//     let lettAndNr1 = '';
//     let lettAndNr2 = '';
//     let lettAndNr3 = '';

//     let symbols1 = '';
//     let symbols2 = '';
//     let symbols3 = '';

//     for(let i = 0; i < 3; i++) {
//         lettAndNr1 += lettAndNr.charAt(Math.floor(Math.random() * lettAndNr.length));
//         lettAndNr2 += lettAndNr.charAt(Math.floor(Math.random() * lettAndNr.length));
//         lettAndNr3 += lettAndNr.charAt(Math.floor(Math.random() * lettAndNr.length));

//         symbols1 += symbols[Math.floor(Math.random() * symbols.length)];
//         symbols2 += symbols[Math.floor(Math.random() * symbols.length)];
//         symbols3 += symbols[Math.floor(Math.random() * symbols.length)];
//     }

//     password = lettAndNr1 + symbols1 + lettAndNr2 + symbols2 + lettAndNr3 + symbols3;

//     console.log(input);
// };



