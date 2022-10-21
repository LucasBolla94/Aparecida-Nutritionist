// Get Patients Data
function getPatientData(form) {
    var patient = {
        nome: form.name.value,
        peso: form.weight.value,
        altura: form.height.value,
        gordura: form.bodyfat.value,
        imc: calcImc(form.weight.value, form.height.value)
    }

    return patient;

};

// Create Td
function createTd(dataTd, classTd) {
	var td = document.createElement("td");
	td.textContent = dataTd;
	td.classList.add(classTd);
    return td;
};

// calculate IMC
function calcImc(weightPatient, heightPatient) {
    var imc = 0;

    imc = weightPatient / (heightPatient * heightPatient);

    return imc.toFixed(2);
};

// Create TR
function createTr(patient) {
    var patientTr = document.createElement("tr");
    patientTr.classList.add("paciente");

    patientTr.appendChild(createTd(patient.nome, "info-nome"));
    patientTr.appendChild(createTd(patient.peso, "info-peso"));
    patientTr.appendChild(createTd(patient.altura, "info-altura"));
    patientTr.appendChild(createTd(patient.gordura, "info-gordura"));
    patientTr.appendChild(createTd(patient.imc, "info-imc"));

    return patientTr;
};

// Create Patient
function createPatient(patient){
    createTr(patient);
    var table = document.querySelector("#tabela-pacientes")
    table.appendChild(patient);
};

