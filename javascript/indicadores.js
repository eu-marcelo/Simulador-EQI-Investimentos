//Chamando os indicadores CDI e IPCA

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/indicadores',true);
xhr.responseType = 'json';
xhr.onload = function () {
    var status = xhr.status;
    if (status == 200){
        console.log(xhr.response);
        let indicador1 = '{"nome":"cdi", "valor":"9.15%"}'
        let indicador2 = '{"nome":"ipca", "valor":"10.06%"}'
        let cdi = JSON.parse(indicador1)
        let ipca = JSON.parse(indicador2)
        document.getElementById("cdi").innerHTML = cdi.valor
        document.getElementById("ipca").innerHTML = ipca.valor
    }else {
        console.log(status, xhr.response);
    }
    
    
};

xhr.send(null);



