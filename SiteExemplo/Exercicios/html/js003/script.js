var bt1 = window.document.getElementById("bt1")
var bt2 = window.document.getElementById("bt2")
var bt3 = window.document.getElementById("bt3")
var img = document.getElementById("img")

bt1.addEventListener("click", function () { muda(1) })
bt2.addEventListener("click", function () { muda(2) })
bt3.addEventListener("click", function () { muda(3) })

function muda(par){
    switch (par){
        case 1:
            img.src ="imagens/manha.png"
            break;
        case 2:
            img.src = "imagens/tarde.png"
            break;
        case 3:
            img.src = "imagens/noite.png"
    }
}

