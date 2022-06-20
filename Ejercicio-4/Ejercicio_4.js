//Dados tres arrays de números, sacar en un nuevo objeto la intersección de estos.


const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

/*const result = [];
let iteraciones = 0;
arrNumber1.filter((e)=>{
    arrNumber2.filter((i) => {
        arrNumber3.filter((o) => {
            if (e == i && e == o && i == o ){
              result.push(e);
              
            }
            iteraciones++;
        })
    })
})
console.log(iteraciones);
console.log(result)*/

const result = arrNumber1.filter((num) => arrNumber2.includes(num))
.filter((num) => arrNumber3.includes(num));

console.log(result);