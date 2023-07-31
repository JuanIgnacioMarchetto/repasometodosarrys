const numeros = [1, 5, 10, 3, 7, 2];

const duplicados = numeros.map((numero) => numero * 2);
console.log("Duplicados:", duplicados);

const mayoresACinco = numeros.filter((numero) => numero > 5);
console.log("Mayores a cinco:", mayoresACinco);

const encontrado = numeros.find((numero) => numero === 3);
console.log("Encontrado:", encontrado);

const algunMayorACinco = numeros.some((numero) => numero > 5);
console.log("¿Hay algún número mayor a cinco?:", algunMayorACinco);

const numerosOrdenados = numeros.sort((a, b) => a - b);
console.log("Números ordenados:", numerosOrdenados);



const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 20 },
  { nombre: "Ana", edad: 27 },
  { nombre: "Luis", edad: 22 },
];

const nombres = personas.map((persona) => persona.nombre);
console.log("Nombres:", nombres);

const mayoresDe25 = personas.filter((persona) => persona.edad > 25);
console.log("Mayores de 25:", mayoresDe25);

const personaDe27Anios = personas.find((persona) => persona.edad === 27);
console.log("Persona de 27 años:", personaDe27Anios);

const hayMenorDe18 = personas.some((persona) => persona.edad < 18);
console.log("¿Hay alguna persona menor de 18 años?:", hayMenorDe18);

personas.sort((a, b) => a.edad - b.edad);
console.log("Personas ordenadas por edad:", personas);



const autos = [
  { modelo: "Toyota Corolla", kilometraje: 50000, estado: "usado" },
  { modelo: "Honda Civic", kilometraje: 30000, estado: "usado" },
  { modelo: "Ford Focus", kilometraje: 8000, estado: "nuevo" },
  { modelo: "Chevrolet Cruze", kilometraje: 15000, estado: "usado" },
  { modelo: "Volkswagen Golf", kilometraje: 2000, estado: "nuevo" },
];

const modelos = autos.map((auto) => auto.modelo);
console.log("Modelos de autos:", modelos);

const autosUsados = autos.filter((auto) => auto.estado === "usado");
console.log("Autos usados:", autosUsados);

const autoMenosDe10000Km = autos.find((auto) => auto.kilometraje <= 10000);
console.log("Auto con menos de 10000 km:", autoMenosDe10000Km);

const hayAutoNuevo = autos.some((auto) => auto.estado === "nuevo");
console.log("¿Hay algún auto nuevo?:", hayAutoNuevo);

autos.sort((a, b) => a.kilometraje - b.kilometraje);
console.log("Autos ordenados por kilometraje:", autos);

/* const gente= [{nombre:"juan",
                   edad:20,},
                {nombre:"rosa",
                  edad:15}]
const menor= gente.filter((pibes)=>pibes>18);
console.log(menor)
 */
const gente = [
    { nombre: "juan", edad: 20 },
    { nombre: "rosa", edad: 15 },
    { nombre: "ico", edad: 36 }
  ];
  
  const menor = gente.filter((pibe) => pibe.edad < 18);
  console.log(menor);
  
  const mayor= ((a,b)=>a.edad+b.edad);
  console.log(gente)
