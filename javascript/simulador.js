//Chamando as simulacoes

var xhrRequest = new XMLHttpRequest()
xhrRequest.open('GET', 'http://localhost:3000/simulacoes', true)
xhrRequest.responseType = 'json'
xhrRequest.onload = function() {
    var status = xhrRequest.stauts
    if(status == 200) {
        console.log(xhrRequest.response)

    }else {
        console.log(status, xhrRequest.response)
    }
}

xhrRequest.send(null)

