var pessoa = {
   nome: 'Lucas'
  ,idade: 10
  ,sexo: 'Masculino'
  ,andar: function(){
    return 'ando com os pés'
  }
}

console.log('Nome da pessoa: ',pessoa.nome)
console.log('Idade da pessoa: ',pessoa.idade)
console.log('Sexo da pessoa: ',pessoa.sexo)
console.log('Como a pessoa anda? ',pessoa.andar())

var lucas = {
   nome: 'Lucas'
  ,idade: 10
  ,sexo: 'Masculino'
  ,andar: function(){
    return 'ando com os pés'
  }
}

var rodrigo = {
   nome: 'Rodrigo'
  ,sexo: 'Masculino'
  ,andar: function(){
    return 'ando com os mãos'
  }
}

rodrigo.idade = 31

var printPessoa = function(){
    console.log('Nome da pessoa: '    ,this.nome)
    console.log('Idade da pessoa: '   ,this.idade)
    console.log('Sexo da pessoa: '    ,this.sexo)
    console.log('Como a pessoa anda? ',this.andar())
  }

var printPessoaParametro = function(pessoa){
    console.log('Nome da pessoa: '    ,pessoa.nome)
    console.log('Idade da pessoa: '   ,pessoa.idade)
    console.log('Sexo da pessoa: '    ,pessoa.sexo)
    console.log('Como a pessoa anda? ',pessoa.andar())
  }

var printLucas = printPessoa.bind(lucas)
var printRodrigo = printPessoaParametro(rodrigo)

printLucas()
