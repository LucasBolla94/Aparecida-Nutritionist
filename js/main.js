var tittle = document.querySelector('.tittle');
tittle.textContent = "Aparecida Nutricionista";

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
        tdImc.style.backgroundColor = 'lightgreen';
        tdImc.style.border = '1px black solid';
        tdImc.style.fontWeight = 600;
    }
};

function montaTD(dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
};

var btn = document.querySelector("#btn");

btn.addEventListener("click", adicionar);

function adicionar(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;

    var novoPaciente = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;


    novoPaciente.appendChild(nomeTd);
    novoPaciente.appendChild(alturaTd);
    novoPaciente.appendChild(pesoTd);
    novoPaciente.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(novoPaciente);

}

function novoTd(x) {
    var novoTd = document.createElement("td");
    novoTd.textContent = x;

}