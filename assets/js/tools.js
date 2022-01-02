/* Desplegar menu ul contextual de lenguaje */

let langs = document.getElementById("lang-handler");

langs.addEventListener("click", function(){
    console.log("Click");
    let boxlang = document.getElementById("box-lang");

    if(document.querySelector("#box-lang.oculto")){
        boxlang.classList.remove("oculto");
        boxlang.classList.add("visible");
    }else{
        boxlang.classList.remove("visible");
        boxlang.classList.add("oculto");
    }
});

/* Cerrar mensaje de cookies */

let aceptCookies = document.getElementById("acept-cookies");

aceptCookies.addEventListener("click", function(){
    let cookiesBar = document.getElementById("cookies");
    cookiesBar.classList.add("oculto");
});



