//Imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//Sons
let somPonto;
let somColisao;
let somFundo;

//Pré-carregamento de imagens e sons
function preload(){
  //Imagens
  imagemEstrada = loadImage("Imagens/estrada.png")
  imagemAtor = loadImage("Imagens/ator-1.png")
  imagemCarro1 = loadImage("Imagens/carro-1.png")
  imagemCarro2 = loadImage("Imagens/carro-2.png")
  imagemCarro3 = loadImage("Imagens/carro-3.png")
  imagemCarros = [imagemCarro1, imagemCarro2,
imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  //Sons
  somPonto = loadSound("sons/pontos.wav")
  somColisao = loadSound("sons/colidiu.mp3")
  somFundo = loadSound("sons/trilha.mp3")
}







