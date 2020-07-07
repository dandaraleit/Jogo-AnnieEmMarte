function preload() {
  imagemCenario = loadImage('imagens/cenario/space.jpg');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/lari_sprite.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
   imagemVida = loadImage('imagens/assets/coracao.png');
  imagemTelaInicial = loadImage('imagens/assets/firewatchred.jpg');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON("fita/fita.json")
  somDoJogo = loadSound ('sons/smooth-criminal.mp3');
  somDoPulo = loadSound ('sons/air-bubble.mp3');
  somColisao = loadSound ('sons/no.mp3');
  somGameOver = loadSound ('sons/dontask.mp3');
}
