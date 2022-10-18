var btn = document.querySelector("#btn");

btn.addEventListener("click", adicionar);

function adicionar(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = ObtemDadosPaciente(form);

    var novoPaciente = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calcImc(peso, altura);


    novoPaciente.appendChild(nomeTd);
    novoPaciente.appendChild(pesoTd);
    novoPaciente.appendChild(alturaTd);
    novoPaciente.appendChild(gorduraTd);
    novoPaciente.appendChild(imcTd);


    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(novoPaciente);

    console.log(ObtemDadosPaciente(form));

}

function ObtemDadosPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }

    return paciente;

};
