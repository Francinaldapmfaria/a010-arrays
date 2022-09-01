// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** 
// novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const original1 = ["arroz", "feijão","macarrão", "leite"]
const original2 = [1,4,9,12,14]
const original3 = ["futebol", "basquete", "tenis","vôlei"]

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
const copia1 = original1.slice()
console.log(original1)
copia1.push(10)
console.log(copia1)



// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
const copia2 = original2.slice()
copia2.pop()
console.log(original2)
console.log(copia2)

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
const copia3 = original3.slice()
copia3.splice(1,1)
console.log(original3)
console.log(copia3)