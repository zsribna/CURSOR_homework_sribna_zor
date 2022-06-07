function getMaxDigit () {
    let a;
    while (!Number.isInteger(a) || !a)  {
        a =  Number( prompt("Function 1. max number", "1000") );
    }
    a = String(a);
    let max = 0;
    for (const i of a) {
       if (i > max) {
           max = i;  }
    }
   return max;
}

function pow(number, power) {
    if (power === 0) return 1;
    if (number === 0) return 0;
    if (number === 1) return 1;
  
    let result = 1;
    while (power !== 0) {
      result = result * number;
      power = power - 1;
    }
  
    return result;
}
const number = +prompt("Введите число");
const degree = +prompt("Введите степень");
alert ("Результат: " + pow(number, degree));

function firstLetterToUpperCase(string){
    string = string.toLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const salery = function (number2) {
    return number2 - (19.5 * number2) / 100;
}

function getRandomNumber (n,m){
    return Math.floor(Math.random()*(m-n)+n)

}
function countLetter (letter, string){
    string=string.toLowerCase()
    return string.split(letter).length - 1
}
// 7Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$

function convertCurrency(currency){
    if (currency.includes('$')) {
        return currency.split('').splice(0,currency.length - 1).join('') * 32 + 'грн';
    
    } else if (currency.includes('uan')) {
        return currency.split('').splice(0, currency.length - 3).join('') / 32 + '$';

    } else {
        return `incorrect value`
    }
}

// 8 Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

function getRandomPassword(n=8){
    let randomNumber = Math.floor(Math.random(1000000)* Math.pow(10,n))

    return randomNumber
}

//Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
function deleteLetters(letter, string){
    return string.replaceAll(letter,'')
}

function funcPalindrom(string)
{
    return string==string.split('').reverse().join('')
}

document.writeln(`Функція №1: Max number - ${getMaxDigit()};`)
document.writeln(`Функція №3(перша літера велика): ${firstLetterToUpperCase('влад')}`)
document.writeln(`Функція податок : ${salery(1000)}`)
document.writeln(`Функція випадкове ціле число: ${getRandomNumber(1, 10)}`)
document.writeln(`Функція №6(скільки раз повторюється буква в слові): ${countLetter('а', 'Асталавіста')}`)
document.writeln(`Функція №7(конвертація валюти): ${convertCurrency('100$')}`)
document.writeln(`Функція №8(випадковий пароль): ${getRandomPassword()}`)
document.writeln(`Функція №9(видалення всіх букв з речення): ${deleteLetters('а', 'мамаріка')}`)
document.writeln(`Функція №10(паліндром): ${funcPalindrom('ovo')}`)