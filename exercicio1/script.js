//parte 1

let nome = undefined
let idade = undefined
console.log(nome, "aparece undefined porque nao ha nada na variavel")
console.log(idade, "2")
console.log(typeof nome)
console.log(typeof idade)

// foi impresso undefined porque deixamos em aberto indefinido podendo ser atribuido posteriormente
nome = prompt("Qual o seu nome? ")
idade = Number(prompt("Qual sua idade?"))
console.log(typeof nome)
console.log(typeof idade)
// aqui pedi para a variavel nome receber a string do prompt,
// e em seguida a var idade ja recebe do prompt convertida para Num
console.log( "Olá, ", nome, "você tem ", idade," anos")

console.log("2-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=")

// Parte 2
const pergunta1 = "Esta chovendo agora?"
const pergunta2 = "Voce gosta de lasanha?"
const pergunta3 = "voce torce para o Gremio?"

const quest1 = prompt(pergunta1)
const quest2 = prompt(pergunta2)
const quest3 = prompt(pergunta3)

console.log("Esta chovendo agora? ",quest1,",", "Voce gosta de lasanha?", quest2,",", "voce torce para o Gremio? ",quest3,".")

console.log(pergunta1,quest1)
console.log(pergunta2,quest2)
console.log(pergunta3,quest3)



console.log('3-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=')
//Parte 3

console.log(pergunta1, quest1)
console.log(pergunta2, quest2)
console.log(pergunta3, quest3)