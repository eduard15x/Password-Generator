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


