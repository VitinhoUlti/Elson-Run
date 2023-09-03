let inicio = document.getElementById("inicio");
let jogo = document.getElementById("jogo");
let bot = document.getElementById("bot")
let jogador = document.getElementById("jogador")
let tela = document.getElementById("telapeq");
let pontosf = document.getElementById("pontos");
let pontosv = 0;
let vi = 0;

document.addEventListener('keydown', function(e){
    if(e.key == "Enter") {
        const btn = document.getElementById("btn");
        btn.click();
    }
    if(e.key == " ") {
        const btn = document.getElementById("btn");
        btn.click();
        pulo();
    }
})
function jog(){
    inicio.style.display = 'none';
    jogo.style.display = 'grid';
    if(pontosv==0){
        pontosv++
        pontosf.textContent = pontosv;
     function pontos(){
     pontosv++;
     pontosf.textContent = pontosv; 
    }
}
setInterval(pontos, 3*1000)
}
function pulo(){
    tela.style.alignItems = "start";
    setTimeout(volte, 1000)
}
function volte(){
    tela.style.alignItems = "end";
}
function gameover(){
    if(bot.style.display == 'none'){
        window.alert("punheta")
    }
    
}