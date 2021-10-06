// Constant variable named kelvin that contains today's forecast
const kelvin = 0;
// Convert kelvin value to celsius
let celsius = kelvin - 273;
// Convert celsius value to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Round down the Fahrenheit value 
fahrenheit = Math.floor(fahrenheit);
// Log temperature value to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
/* Additional task: Newton conversion of kelvin temperature*/
// Convert celsius value to Newton
let Newton = celsius * (33/100);
// Round down the Newton temperature
Newton = Math.floor(Newton);
// Log temperature value to the console
console.log(`The temperature is ${Newton} degrees Newton.`);