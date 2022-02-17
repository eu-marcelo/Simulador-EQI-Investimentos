const form = document.getElementById("form")
const aporte = document.getElementById("aporte")
const aporteMensal = document.getElementById("aporte-mensal")
const prazo = document.getElementById("prazo")
const rentabilidade = document.getElementById("rentabilidade")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const aporteValue = aporte.value.trim()
    const aporteMensalValue = aporteMensal.value.trim()
    const prazoValue = prazo.value.trim()
    const rentabilidadeValue = rentabilidade.value.trim()


    if (aporteValue === '') {
        errorValidation(aporte, "Aporte deve ser um número")
    }

    if(aporteMensalValue === ''){
        errorValidation(aporteMensal, "Aporte deve ser um número")
    }

    if(prazoValue === ''){
        errorValidation(prazo, "Prazo deve ser um número")
    }
    
    if(rentabilidadeValue === ''){
        errorValidation(rentabilidade, "Rentabilidade deve ser um número")
    }
}

function errorValidation(input, message){
    const formCtrl = input.parentElement
    const small = formCtrl.querySelector('small')

    small.innerText = message

    formCtrl.className = 'campo error'
}