var download = document.querySelector(".download");

download.addEventListener("click", function(){
    var conn = new XMLHttpRequest();

    conn.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    conn.addEventListener("load", function(){
        var response = conn.responseText;
        var patients = JSON.parse(response);
        patients.forEach( function(patient){
            var patientTr = createTr(patient);
            var tabela = document.querySelector("#tabela-pacientes");
            tabela.appendChild(patientTr)
        });
    });

    conn.send();
});
