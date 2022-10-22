var download = document.querySelector(".download");

download.addEventListener("click", function(){
    var conn = new XMLHttpRequest();

    conn.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    conn.addEventListener("load", function(){
        if ( conn.status == 200){
            var response = conn.responseText;
            var patients = JSON.parse(response);
            patients.forEach( function(patient){
                var patientTr = createTr(patient);
                var tabela = document.querySelector("#tabela-pacientes");
                tabela.appendChild(patientTr)
            });
        }else{
            var er404 = document.querySelector("#er404");
            er404.classList.remove("pesq1");
            er404.textContent = conn.responseText;
        }
    });

    conn.send();
});
