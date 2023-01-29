const divAtual  = document.querySelector(".atual")
const divEmpresa = document.querySelector('.empresa')
const divAnteriores = document.querySelector('.anteriores')
const meuNome = document.querySelector(".meu-nome")

meuNome.innerHTML =''


 const controleExp = (value) =>{
    switch(value){
        case 1:
            divAtual.style.display = 'block'
            divEmpresa.style.display = 'none'
            divAnteriores.style.display = 'none'
        break

        case 2:
            divAtual.style.display = 'none'
            divEmpresa.style.display = 'block'
            divAnteriores.style.display = 'none'
        break

        case 3:
            divAtual.style.display = 'none'
            divEmpresa.style.display = 'none'
            divAnteriores.style.display = 'block'
        break
    }
} 

function escrever(str, el) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
      if (!char.length) return clearInterval(typer);
      var next = char.pop();
      el.innerHTML += next;
    }, 100);
}

escrever("Murilo Silva Bovati", meuNome)