let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");
let email = document.getElementById("email");
let pass = document.getElementById("pswd");
let name = document.getElementById("name");
let encontrado = false;

let promesa;

$(document).ready(function(){
    
});

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    signUp.style.display = "none";
    if(signIn.innerHTML == "Login"){
        promesa = fetch("https://app.sheetlabs.com/CODO/usuarios");
        promesa.then((response) => response.json())
        .then(data => {
            for(dato of data){
                if(email.value == dato.email && pass.value == dato.password){
                    alert("Bienvenido " + dato.name);
                    encontrado = true;
                    break;
                }
            }
            if(!encontrado){
                alert("ACCESO INCORRECTO");
            }

            email.value = "";
            pass.value = "";
        });

    }

    signIn.innerHTML = "Login";
    
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");

    let datos = [{
        "name": name.value,
        "email": email.value,
        "password": pass.value
    }];

    promise = fetch("https://app.sheetlabs.com/CODO/usuarios", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(datos)
    });

    name.value = "";
    email.value = "";
    pass.value = "";

}
