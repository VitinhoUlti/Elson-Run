let inicio = document.getElementById("inicio");
let jogo = document.getElementById("jogo")
let tela = document.getElementById("telapeq")
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
}
function pulo(){
    tela.style.alignItems = "start"
    setTimeout(volte, 1000)
}
function volte(){
    tela.style.alignItems = "end"
}