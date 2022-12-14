var tittle = document.querySelector('.tittle');
tittle.textContent = prompt("Type name of Nutrionist");

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length ; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var validaPeso = true;
    var validaAltura = true;

    if (peso <= 20 || peso >= 400) {
    console.log("Peso Invalido");
    validaPeso = false;
    tdPeso.textContent = "Peso Invalido";
    paciente.style.backgroundColor = "lightcoral";
    paciente.style.fontWeight = 600;
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura Invalida");
        validaAltura = false;
        tdAltura.textContent = "Altura Invalida";
    }

    if ( validaPeso && validaAltura) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
};

function criarTd(dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
    return td;
};

function calcImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
};


// Search inside Table

var searchIpt = document.querySelector(".pesq");

searchIpt.addEventListener("input", function(){
    if(searchIpt.value.length > 0 ) {
        var nomes = document.querySelectorAll(".info-nome");
        for (var i = 0; i < nomes.length; i++){
            var nome = nomes[i].textContent;
            var exp = new RegExp(this.value,"i");
            if(!exp.test(nome)) {
                nomes[i].parentNode.classList.add("pesq1");
            }else{
                nomes[i].parentNode.classList.remove("pesq1");
            }
        }
    }else{
        var nomes = document.querySelectorAll(".info-nome");
        for(var i = 0; i < nomes.length; i++){
            nomes[i].parentNode.classList.remove("pesq1");
        }
    }
    
});
