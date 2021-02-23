//Posição do Ator
let xAtor = 100
let yAtor = 366
let colisao = false
let pontos = 0


//Inserir Ator
function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}


//Movimentos do Ator
function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  
  if (keyIsDown(DOWN_ARROW)){
  if(podeSeMover()){
      yAtor += 3
    }
  }
}

function podeSeMover(){
  return yAtor < 366
}


function verificaColisao(){
 for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 10)
 if (colisao){
    yAtor = 366
    somColisao.play()
    if(pontosMaiorQueZero()){
       pontos -= 1
       
      }
    } 
  }
}

function pontosMaiorQueZero(){
  return pontos > 0
}

function mostraPontos(){
  textAlign(CENTER)
  textSize(20)
  fill(color(255, 240, 60))
  text(pontos, 114.5, 26)
}

function marcaPontos(){
  if(yAtor < 15){
  pontos += 1; 
  yAtor = 366
  somPonto.play()
  }
}









