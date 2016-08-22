'use strict'

//ler um arquivo MOCK_DATA.txt, separado por tabulação e
//descobrir a idade média das mulheres

const fs = require('fs')

const arquivo = fs.readFileSync('MOCK_DATA.txt', 'utf8');

  console.log(
    arquivo.split("\n")
      .map(i => {
        let pessoa = i.split('\t')

        return {
           id: pessoa[0]
          ,nome: pessoa[1]
          ,sobrenome: pessoa[2]
          ,email: pessoa[3]
          ,sexo: pessoa[4]
          ,age: parseInt(pessoa[5])
          ,ip: pessoa[6]
        }
      })
      .filter(i => i.sexo === 'Female')
      .reduce((prev,value,index) => {
        let count = prev.count + 1
        let age = prev.age + value.age
        let avg = Math.round(age/count)

        return {
           count: count
          ,age: age
          ,avg: avg
        }
      },
      {
         count: 0
        ,age: 0
        ,avg: 0
      })
  )
