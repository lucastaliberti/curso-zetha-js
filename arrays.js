var lucas = {
   nome: 'Lucas'
  ,idade: 26
  ,sexo: 'Masculino'
  ,andar: function(){
    return 'ando com os pés'
  }
}

var rodrigo = {
   nome: 'Rodrigo'
  ,idade: 31
  ,sexo: 'Masculino'
  ,andar: function(){
    return 'ando com os mãos'
  }
}

var raphael = {
   nome: 'Raphael'
  ,idade: 30
  ,sexo: 'Masculino'
  ,andar: function(){
    return 'ando abaixado'
  }
}

var pessoas = [
  lucas
  ,rodrigo
  ,raphael
]
//console.log(pessoas)
//console.log('---')
/*
pessoas.forEach(function(item){
  console.log(item)
})
*/

var arrayMapeado = pessoas.map(function(item){
  return item.idade
}).reduce(function(prev,value,index){
  return prev + value
},0)

console.log(arrayMapeado)
console.log('---')

arrayMapeado = pessoas.map(function(item){
  return item.nome
}).map(function(item){
  return item.substring(0,1)
}).filter(function(item){
  return item === 'R'
})

console.log(arrayMapeado)
console.log('---')
