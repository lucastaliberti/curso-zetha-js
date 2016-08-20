'use strict'

const lucas = {
   nome: 'Lucas'
  ,idade: 26
  ,sexo: 'Masculino'
  ,andar: function(){
    return 'ando com os pés'
  }
}

const rodrigo = {
   nome: 'Rodrigo'
  ,idade: 31
  ,sexo: 'Masculino'
  ,andar: function(){
    return 'ando com os mãos'
  }
}

const raphael = {
   nome: 'Raphael'
  ,idade: 30
  ,sexo: 'Masculino'
  ,andar: () => 'ando abaixado'
}

const pessoas = [
  lucas
  ,rodrigo
  ,raphael
]

const arrayMapeado = pessoas
  .map(x => x.nome)
  .map(x =>  x.substring(0,1))
  .filter(x => x === 'R')

console.log(arrayMapeado)
