

const valor_1 = document.getElementById("primeiro-numero");
const valor_2 = document.getElementById("segundo-numero");
const form = document.getElementById("formulario");
const p = document.querySelector("p");


form.addEventListener("submit", function(e){
    e.preventDefault();

    if(valor_1.value > valor_2.value){
        p.textContent = "O primeiro Valor é maior que o segundo";
        p.classList.add("editar-p");
        p.style.padding ="15px"
    }else if(valor_2.value > valor_1.value){
        p.textContent = "O segundo valor é maior que o Primeiro";
        p.classList.add("editar-p");
        p.style.padding ="15px"
    }else{
        p.textContent = "Os valores são iguais";
        p.classList.add("editar-p");
        p.style.padding ="15px"
    }

})


