// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
const numero = [10,50,34,29,42,17]

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(numero.length)
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(numero[0])
console.log(numero[1])
console.log(numero[3])
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, 
// e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` 
// verdadeiro, e outro falso.

console.log(numero.includes(50))

const diversos = [17,24, "árvore", "flores", true, false]
console.log(diversos.length)
console.log(diversos.includes(99))



