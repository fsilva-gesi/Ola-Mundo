let num = document.querySelector("input#num")
let lista = document.querySelector("select#lista")
let res=document.querySelector("div#res")
let numeros = []

function adicionar(){
    if (isNum(num.value) && !inList(num.value, numeros)){
        numeros.push(num.value)
        let item = document.createElement("option")
        item.text=`Valor ${num.value} adicionado`
        lista.append(item)
    } else {
        alert("Número inválido ou já existente na lista")
    } 
    res.innerHTML=""
    num.value=""
    num.focus()  
}

function isNum(n){
    if (Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inList(n,l){
    if (l.indexOf(n)!=-1){
        return true
    } else {
        return false
    }
}
function finalizar(){
    if (numeros.length == 0){
        alert("Tem que adicionar números para Finalizar")
    } else {
        res.innerHTML=""
        let qt = numeros.length
        let maior=numeros[0]
        let menor=numeros[0]
        let soma=0
        let media=0
        for(let pos in numeros){
            soma += Number(numeros[pos])
            if (numeros[pos] > maior)
                maior = numeros[pos]
            if (numeros[pos] < menor)
                menor=numeros[pos]
        }
        media=soma/qt
        switch (qt){
            case 1:
                res.innerHTML = `<p>Ao todo temos ${qt} número adicionado</p>`
                break;
            default:
                res.innerHTML = `<p>Ao todo temos ${qt} números adicionados</p>`
                break;
        }
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os números adicionados é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os números adicionados é ${media}</p>`
    }   
}