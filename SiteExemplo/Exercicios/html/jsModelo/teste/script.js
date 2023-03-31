var bt1 = document.getElementById("bt1")
var bt2 = document.getElementById("bt2")
var bt3 = document.getElementById("bt3")
var bt4 = document.getElementById("bt4")

bt1.addEventListener("click", function () { muda(1) })
bt2.addEventListener("click", function () { muda(2) })
bt3.addEventListener("click", function () { muda(3) })
bt4.addEventListener("click", function () { muda(3) })

function muda(bt) {
    switch (bt) {
        case 1:
            alert("clicou 1")
            break;
        case 2:
            alert("clicou 2")
            break;
        case 3:
            alert("clicou 3")
            break;
        case 4:
            alert("clicou 4")
            break;
    }
}
function clicou(bt) {
    switch (bt) {
        case 1:
            bt1.style.transform = "translate(1px,1px)"
            break;
        case 2:
            bt2.style.transform = "translate(1px,1px)"
            break;
        case 3:
            bt3.style.transform = "translate(1px,1px)"
            break;
        case 4:
            bt4.style.transform = "translate(1px,1px)"
            break;
    }
}
function desclicou(bt) {
    switch (bt) {
        case 1:
            bt1.style.transform = "translate(-1px,-1px)"
            break;
        case 2:
            bt2.style.transform = "translate(-1px,-1px)"
            break;
        case 3:
            bt3.style.transform = "translate(-1px,-1px)"
            break;
        case 4:
            bt4.style.transform = "translate(-1px,-1px)"
            break;
    }

}
