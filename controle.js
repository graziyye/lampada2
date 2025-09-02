function alterarNome(){
    var n = document.getElementById("nome");
    n.innerHTML = `acenda, apague ou quebre`;
}



function ligar(){
    document.getElementById("lampada").src = "on.jpg";
}

function desligar(){
    document.getElementById("lampada").src = "off.jpg";
}

function quebrar(){
    document.getElementById("lampada").src = "broken (1).jpg"
}

alterarNome();