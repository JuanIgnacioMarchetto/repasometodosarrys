function buscarMetodo() {
    const entradaMetodo = document.getElementById('methodInput').value;
    const resultadoDiv = document.getElementById('result');
  
    const metodosArray = [
      {
        nombre: 'forEach',
        descripcion: 'forEach() ejecuta una función dada una vez por cada elemento de un array.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3]; array.forEach(elemento => console.log(elemento));'
      },
      {
        nombre: 'map',
        descripcion: 'map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada elemento.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3]; const nuevoArray = array.map(elemento => elemento * 2);'
      },
      {
        nombre: 'filter',
        descripcion: 'filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3]; const nuevoArray = array.filter(elemento => elemento > 1);'
      },
      {
        nombre: 'find',
        descripcion: 'find() devuelve el valor del primer elemento del array que cumple una condición dada por una función.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3]; const encontrado = array.find(elemento => elemento === 2);'
      },
      {
        nombre: 'findIndex',
        descripcion: 'findIndex() devuelve el índice del primer elemento del array que cumple una condición dada por una función.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3]; const indice = array.findIndex(elemento => elemento === 2);'
      },
      {
        nombre: 'some',
        descripcion: 'some() comprueba si al menos un elemento del array cumple una condición dada por una función.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3]; const algunoCumple = array.some(elemento => elemento > 2);'
      },
      {
        nombre: 'every',
        descripcion: 'every() comprueba si todos los elementos del array cumplen una condición dada por una función.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3]; const todosCumplen = array.every(elemento => elemento > 0);'
      },
      {
        nombre: 'reduce',
        descripcion: 'reduce() reduce el array a un único valor aplicando una función acumuladora a cada elemento.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3]; const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);'
      },
      {
        nombre: 'sort',
        descripcion: 'sort() ordena los elementos del array según la función de comparación proporcionada.',
        ejemplo: 'Ejemplo: const array = [3, 1, 2]; array.sort((a, b) => a - b);'
      },
      {
        nombre: 'reverse',
        descripcion: 'reverse() invierte el orden de los elementos del array.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3]; array.reverse();'
      },
      {
        nombre: 'slice',
        descripcion: 'slice() devuelve una porción del array especificada por índice de inicio y fin (sin incluir el elemento final).',
        ejemplo: 'Ejemplo: const array = [1, 2, 3, 4, 5]; const nuevaPorcion = array.slice(1, 3);'
      },
      {
        nombre: 'splice',
        descripcion: 'splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3, 4, 5]; array.splice(2, 1); // Elimina el elemento en el índice 2'
      },
      {
        nombre: 'includes',
        descripcion: 'includes() comprueba si un array contiene un determinado elemento y devuelve true o false.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3]; const contiene = array.includes(2);'
      },
      {
        nombre: 'indexOf',
        descripcion: 'indexOf() devuelve el índice del primer elemento igual al valor especificado, o -1 si no se encuentra.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3, 2]; const indice = array.indexOf(2);'
      },
      {
        nombre: 'lastIndexOf',
        descripcion: 'lastIndexOf() devuelve el último índice del elemento igual al valor especificado, o -1 si no se encuentra.',
        ejemplo: 'Ejemplo: const array = [1, 2, 3, 2]; const ultimoIndice = array.lastIndexOf(2);'
      },
      
    ];
  
    const datosMetodo = metodosArray.find(metodo => metodo.nombre === entradaMetodo);
  
    if (datosMetodo) {
      const explicacion = `<p><strong>${datosMetodo.nombre}:</strong> ${datosMetodo.descripcion}</p>`;
      const ejemplo = `<p>${datosMetodo.ejemplo}</p>`;
      resultadoDiv.innerHTML = explicacion + ejemplo;
    } else {
      resultadoDiv.innerHTML = '<p>Método no encontrado. Por favor, ingresa un nombre válido.</p>';
    }
  }
  
  
