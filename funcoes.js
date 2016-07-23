//funcao como parametro
console.log(soma(10,2,function(x,y){
  return x*y
}))

//funcao soma
function soma(x,y,funcao)
{
  return x + funcao(x,y)
}
