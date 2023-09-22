function temaEscuro() {
    var body = document.body;
    var temaEscuroButton = document.getElementById("tema-escuro");

    if (body.classList.contains("tema-escuro")) {
        body.classList.remove("tema-escuro");
        temaEscuroButton.innerText = "Tema Escuro";
    } else {
        body.classList.add("tema-escuro");
        temaEscuroButton.innerText = "Tema Claro";
    }
}

function temaEscuro() {
    var body = document.body;
    var temaEscuroButton = document.getElementById("tema-escuro");

    if (body.classList.contains("tema-escuro")) {
        body.classList.remove("tema-escuro");
        temaEscuroButton.innerText = "Tema Escuro";
        temaEscuroButton.style.backgroundColor = ""; 
        temaEscuroButton.style.color = ""; 
    } else {
        body.classList.add("tema-escuro");
        temaEscuroButton.innerText = "Tema Claro";
        temaEscuroButton.style.backgroundColor = "#1E2433"; 
        temaEscuroButton.style.color = "white";
        temaEscuroButton.style.boxShadow = "0 4px 20px";
    }
}