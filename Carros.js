//inserir Carros
function mostraCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros)
  }
}


//Movimento dos Carros
function movimentosCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i]
  }
}


function reiniciaCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  
  if (xCarros[i] < -40){
    xCarros[i] = 600
    }
  }
}  






