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
          ,ip: pessoa[5]
        }
      })
      .filter(i => i.sexo === 'Female')
      .reduce((prev,value,index) => {
        let count = prev.count + 1
        return {
          count: count
        }
      },
      {
        count: 0
      })
  )
