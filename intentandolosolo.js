/* const personas  = [
    {
        nombre: "pedro",
        edad: 25,
    },
    {
        nombre: "peepe",
        edad: 22,
    },
    {
        nombre: "lolo",
        edad: 15,
    },
    {
        nombre: "luis",
        edad: 20,
    },
    {
        nombre: "lola",
        edad: 18,
    }
    
];
const mayorMenor=  personas .sort((a,b)=>a-b);
console.log(mayorMenor);

/* const encontrar: personas .find((veinte)=>veinte===20);
console.log( encontrar) 
const encontrar = personas .find((persona) => persona.edad === 20);
console.log(encontrar);
/* 
const mayoresA18= personas .filter((mayores)=>mayores<18);
console.log(mayoresA18)

const mayoresA18= personas .filter((mayores)=>mayores.edad<18);
console.log(mayoresA18)

const modificar= personas .map((restar)=>restar.edad - 1);
console.log(modificar)

/* const verificado= personas .some((chiquitos)=chiquitos.edad >18);
console.log(verificado) 
const verificado= personas .some((chiquitos)=>chiquitos.edad >18);
console.log(verificado)
/* if {
    "pedro".edad===18
}console.log("sip")else{
    "nop" 

if ("pedro".edad === 18) {
    console.log("sip");
  } else  {
    console.log("nop");
  }
  prompt("q eda tene guacho?")
  if(prompt>18){console.log("pasa noma")}else{console.log("anda pa ya bobo")} 
  const edad = parseInt(prompt("q eda tene guacho?"));

if (edad > 18) {
  console.log("pasa noma");
} else {
  console.log("anda pa ya bobo");
}


const cabaña = [
    {
      nombre: "pedro",
      diaOcupada: 25,
    },
    {
      nombre: "peepe",
      diaOcupada: 22,
    },
    {
      nombre: "lolo",
      diaOcupada: 15,
    },
    {
      nombre: "luis",
      diaOcupada: 20,
    },
    {
      nombre: "lola",
      diaOcupada: 18,
    },
  ];
  
  const diaNecesitas = parseInt(prompt("¿Qué día necesitas la cabaña?"));
  
  const cabañaOcupada = cabaña.find((cabaña) => cabaña.diaOcupada === diaNecesitas);
  
  if (cabañaOcupada) {
    console.log("La cabaña está ocupada, estas están libres:");
    const cabañasLibres = cabaña.filter((cabaña) => cabaña.diaOcupada !== diaNecesitas);
    cabañasLibres.forEach((cabaña) => console.log(cabaña.nombre));
  } else {
    console.log("La cabaña está disponible. ¡Pasa nomá!");
  }
  */

const personas = [
  { nombre: 'Persona1', peso: 65 },
  { nombre: 'Persona2', peso: 78 },
  { nombre: 'Persona3', peso: 53 },
  { nombre: 'Persona4', peso: 71 },
  { nombre: 'Persona5', peso: 64 },
  { nombre: 'Persona6', peso: 70 },
  { nombre: 'Persona7', peso: 55 },
  { nombre: 'Persona8', peso: 68 },
  { nombre: 'Persona9', peso: 61 },
  { nombre: 'Persona10', peso: 72 },
  { nombre: 'Persona11', peso: 58 },
  { nombre: 'Persona12', peso: 69 }
];

const pesado = personas.sort((a, b) => b.peso - a.peso);
console.log(pesado);


const encontrar = personas.find((persona) => persona.peso === 70);
console.log(encontrar);

const filtrado = personas.filter((persona) => persona.peso > 60);
console.log(filtrado)

const aumentaron = personas.map((persona) => persona.peso + 100);
console.log(aumentaron)

const masDe = personas.some((persona) => persona.peso < 60);
console.log(masDe)

const livianos = personas.sort((a, b) => a.peso - b.peso)
console.log(livianos)

const buscar = personas.find((persona) => persona.peso !== 69)
console.log(buscar)

const masLivianos = personas.filter((persona) => persona.peso !== 69)
console.log(masLivianos)

const bajaron = personas.map((persona) => persona.peso - 25);
console.log(bajaron)

const pares = personas.some((persona) => persona.peso % 2 === 0)
console.log(pares)
const inpares = personas.some((persona) => persona.peso % 2 !== 0)
console.log(inpares)
const existe = personas.some((persona) => persona.peso === 5 + 5)
console.log(existe)

/* const quiereConocer = parseInt(prompt("¿Quien queres conocer?"));
  
const miraSupeso = personas.find((personas) => personas. suPeso=== quiereConocer);

if (quiereConocer) {
  console.log(peso+ " kilos de sensualidad");
} else {
  console.log("no la conozco");
}
 */
/* const quiereConocer = prompt("¿A quién quieres conocer?");

const miraSuPeso = personas.find((persona) => persona.nombre.toLowerCase === quiereConocer.toLowerCase);

if (miraSuPeso) {
  console.log(miraSuPeso.peso + " kilos de sensualidad");
} else {
  console.log("No la conozco");
} */


const alumnos = [
  {
  nombre: "pedro",
  edad: 35,},
 {
  nombre: "penelope",
  edad: 33,
},
{
  nombre: "psaavier",
  edad: 34,
},
{
  nombre: "plolo",
  edad: 32,
},
{
  nombre: "jasinto",
  edad: 30,
},]

const mayorAMenor= alumnos.sort((a, b) => a.edad - b.edad) 
console.log(mayorAMenor)

const hayado= alumnos.find((viejo)=>viejo.edad  >  34)
console.log(hayado)

const masJovenes= alumnos.filter((jovenes)=>jovenes.edad < 34);
console.log(masJovenes)

const existira = alumnos.some((existe) => existe.nombre === "jasinto");
console.log(existira);

const cambiar= alumnos.map((imbesiles)=>imbesiles.nombre +" idiota" );
console.log(cambiar)


console.log("Antes de llamar a la función: ", miFuncionVar);

var miFuncionVar = function() {
  console.log("¡Hola desde la función declarada con var!");
};

miFuncionVar(); // Llamando a la función

console.log("Después de llamar a la función: ", miFuncionVar);




var myArray = [10, 20, 30];
var objectCreatedFromArray = myArray.reduce((accumulator, number, index, arr) => {
  accumulator[`number${index}`] = number;
  return accumulator;console.log(objectCreatedFromArray)
}, {});
objectCreatedFromArray;
// Prints {number0: 10, number1: 20, number2: 30, number3: 40}



function salludo(nombre){
document.write("hola buen dia tengas, "+ nombre);

}
saludo("Arturo");


function suma(numero1,numero2){
  var numero1 = numero1;
  var numero2 = numero2;

  document.write(numero1+numero2);}
  suma(10,30)


/*   for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */
