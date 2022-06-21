//Dados tres arrays de números, sacar en un nuevo objeto la intersección de estos.


const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];


const result = arrNumber1.filter((num) => arrNumber2.includes(num))
.filter((num) => arrNumber3.includes(num));

console.log(result);