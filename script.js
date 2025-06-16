a
// Función personalizada que filtra sin usar Array.filter()
function customFilter(arr, fn) {
    const result = [];    // 1. Crear un array vacío para guardar los valores filtrados
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {     // 2. Si la función fn devuelve un valor truthy
        result.push(arr[i]);  // 3. Agrega el valor actual al array result
      }
    }
    return result;
  }
  


  function filtrar() {
    const rawInput = document.getElementById("inputArray").value;
    const selected = document.getElementById("filterFunction").value;
    const array = rawInput.split(",").map(Number);
  
    let fn;
    if (selected === "greaterThan10") {
      fn = n => n > 10;
    } else if (selected === "even") {
      fn = n => n % 2 === 0;
    } else if (selected === "positive") {
      fn = n => n > 0;
    }
  
    const result = customFilter(array, fn);
    document.getElementById("output").innerText = "Resultado: [" + result.join(", ") + "]";
  }