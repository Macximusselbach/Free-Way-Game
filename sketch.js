function setup() {
  createCanvas(500, 400)
  somFundo.loop()
}

function draw() {
  background(imagemEstrada)
  mostraAtor()
  mostraCarros()
  movimentosCarros()
  movimentoAtor()
  reiniciaCarros()
  verificaColisao()
  mostraPontos()
  marcaPontos()
 
}







