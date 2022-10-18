var btn = document.querySelector("#btn");

btn.addEventListener("click", adicionar);

function adicionar(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = ObtemDadosPaciente(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);

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

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));

    return pacienteTr;
};