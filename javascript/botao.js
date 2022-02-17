
const botao2 = document.getElementById("botao-pre")
const icone = document.querySelector('.icone')
botao2.addEventListener('click', function() {
    this.style = 'background-color: orange'
    if(icone.style.display === 'none') {
        icone.style.display = 'block'
    }else {
        icone.style.display = 'none'
        this.style = ''
    }
})

const botao3 = document.getElementById("botao-pos")
const icone1 = document.querySelector('.icone1')
botao3.addEventListener('click', function() {
    this.style = 'background-color: orange'
    if(icone1.style.display === 'none') {
        icone1.style.display = 'block'
    }else {
        icone1.style.display = 'none'
        this.style = ''
    }
})

const botao4 = document.getElementById("botao-fix")
const icone2 = document.querySelector('.icone2')
botao4.addEventListener('click', function() {
    this.style = 'background-color: orange'
    if(icone2.style.display === 'none') {
        icone2.style.display = 'block'
    }else {
        icone2.style.display = 'none'
        this.style = ''
    }
})

const botao5 = document.getElementById("botao-bruto")
const icone3 = document.querySelector('.icone3')
botao5.addEventListener('click', function() {
    this.style = 'background-color: orange'
    if(icone3.style.display === 'none') {
        icone3.style.display = 'block'
    }else {
        icone3.style.display = 'none'
        this.style = ''
    }
})

const botao6 = document.getElementById("botao-liquido")
const icone4 = document.querySelector('.icone4')
botao6.addEventListener('click', function() {
    this.style = 'background-color: orange'
    if(icone4.style.display === 'none') {
        icone4.style.display = 'block'
    }else {
        icone4.style.display = 'none'
        this.style = ''
    }
})

const botao = document.getElementById("botao")
const resultado = document.querySelector('.resultado')
botao.addEventListener('click', function() {
    this.style = 'background-color: orange'
    if(resultado.style.display === 'none') {
        resultado.style.display = 'block'
    }else {
        resultado.style.display = 'none'
    }
})
