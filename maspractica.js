const variable1 = "Hola mundo"
const  perros = [ 
    {
        name: "Bobby",
        gender: "male"
    },
    {
        name: "Pichu",
        gender: "female" 
    }
]

const  personas = [ 
    {
        name: "Juani",
        gender: "shemale"
    },
    {
        name: "Pichu",
        gender: "female" 
    }
]

const personas2 = [
    ...personas,
    {
        name: "Martin",
        gender: "male"
    }
]

co

// const persona = {
//     name: "Martin",
//     gender: "male"
// }


// const tincho = {
//     persona
// }

// console.log(tincho)





const callback = ( arr, cb ) => {
    let newArray = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const res = cb( element, index )
        newArray = [

        ]
    }
    return newArray
}

// callback( personas, (persona) => {
//     console.log(persona.gender)
// } )

const newPerros = callback( perros, (perro) => {
    return (perro.name)
} )






// const fn = (array, i) => {
//    for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//         if(index === i){
//             return element
//         }
//    }
// }

// console.log(fn(arr, 1))






