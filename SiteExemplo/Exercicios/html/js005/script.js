let res=document.querySelector("div#res")
let par = document.getElementById("engordou")
let amigo = {nome: 'José', sexo: 'M', peso: 85, engordar(p) { this.peso += p } }

function engorda(){
    alert("clicou")
    alert(`Engordou ${par.value}`)
    
    res.innerHTML += `<p>Nome: ${amigo.nome}</p>`
    res.innerHTML += `<p>Sexo: ${amigo.sexo}</p>`
    res.innerHTML += `<p>Peso anterior: ${amigo.peso}Kg</p>`
    amigo.engordar(Number(par.value))
    res.innerHTML += `<p>Peso atual: ${amigo.peso}Kg</p>`
    res.innerHTML += `<p>Engordou: ${par.value}Kg</p>`
}