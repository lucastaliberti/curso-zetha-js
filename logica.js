//variaveis booleanas
var t = true
var f = false

//testando verdadeiros

//igualdade
t = 1 == 1
console.log('1 == 1',t)
t = 1 === 1
console.log('1 === 1',t)
//diferença
t = 1 != 2
console.log('1 != 2',t)
t = 1 !== '1'
console.log("1 !== '1'",t)
//valores
t = 2 > 1
console.log("2 > 1",t)
t = 1 < 2
console.log("1 < 2",t)

//operador and
t = 1 == 1 && 2 == 2
console.log("1 == 1 && 2 == 2",t)
t = 1 == 1 & 2 == 2
console.log("1 == 1 & 2 == 2",t)

//operador or
t = 1 == 1 || 2 == 3
console.log("1 == 1 || 2 == 3",t)
t = 1 == 2 || 2 == 2
console.log("1 == 2 || 2 == 2",t)

//negacao
console.log("1 == 2 || 2 == 2 negado",!t)
t = 1 == 2 || !(2 == 2)
console.log("1 == 2 || !(2 == 2)",t)
