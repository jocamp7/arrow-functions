const greetings= () =>{

    return "Hola";
}

const division=(a,b) => a / b;


const myName= (name) => {

    return `Mi nombre es ${name}`;
}
  
const test2=()=> {
    console.log("Función test 2 ejecutada.");
}

const test1=(callback)=> callback();

let people = [
    { name: 'Jamiro', age: 45 },
    { name: 'Juan', age: 35 },
    { name: 'Paco', age: 34 },
    { name: 'Pepe', age: 14 },
    { name: 'Pilar', age: 24 },
    { name: 'Laura', age: 24 },
    { name: 'Jenny', edad: 10 },
]

/* Usando un Foreach: 
Crea un array con la gente mayor de 25 años y muéstralo por consola.
Crea un array con la gente que empieza por J. */

let over25=[];

people.forEach( (elemento)=>{

    if(elemento.age>25){
        over25.push(elemento);
    }

} );

console.log(over25);

let jNames=[];

people.forEach( (elemento)=>{

    if(elemento.name[0]==="J"){
        jNames.push(elemento);
    }

});

console.log(jNames);

//Utilizando el array de antes (?) crea un array con la gente mayor de 25 años y muéstralo por consola.

const arrayOver25 = people.map ((edades) => {

  if (edades.age > 25 ){
    return edades;
  }

});

console.log (arrayOver25);

//Crea un array con la gente que empieza por J. 


const arrayJ = people.map ((letras) => { 

 if  (letras.name [0]==='J') {
    return letras;
 }

});

console.log (arrayJ);


//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo.

// Resultado esperado:
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const numbers = [ 4, 5, 6, 7, 8, 9, 10];

let elevar= numbers.map ((numeros) => { 

   return numeros**numeros;

});

console.log(elevar);

// Filter
// Crea un segundo array que devuelva los impares

 const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 let impares= numbers2.filter( (numero)=>numero % 2 !== 0 );

 console.log(impares);

 //Dado el siguiente array, genera un segundo array que filtre los platos veganos 
 //y saque una sentencia como la del ejemplo:

 const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesebacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];

let vegano= foodList.filter( (plato)=> plato.isVeggie===true );


for (let i=0; i<vegano.length;i++){
   
    console.log(` Que rico ${vegano[i].name} me voy a comer!`);
}

// Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numbers3  = [39, 2, 4, 25, 62];

let multiplicacion= numbers3.reduce((numero1,numero2) => numero1*numero2);

console.log(multiplicacion);

// Salida--> 483600 tiene que ser






   

  