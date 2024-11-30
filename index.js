


const form = document.getElementById("formulario");
const p = document.querySelector("p");


form.addEventListener("submit", function(e){

    const valor_1 = parseFloat(document.getElementById("primeiro-numero").value);
    const valor_2 = parseFloat(document.getElementById("segundo-numero").value);
    e.preventDefault();

    if(isNaN(valor_1) || isNaN(valor_2)){
        p.textContent = "Digite apenas Números";
        p.classList.add("editar-p");
        p.style.padding = "15px";
        return;
    }
    
    if(valor_1 > valor_2){
        p.textContent = "O primeiro Valor é maior que o segundo";
        p.classList.add("editar-p");
        p.style.padding ="15px"
    }else if(valor_2 > valor_1){
        p.textContent = "O segundo valor é maior que o Primeiro";
        p.classList.add("editar-p");
        p.style.padding ="15px"
    }else{
        p.textContent = "Os valores são iguais";
        p.classList.add("editar-p");
        p.style.padding ="15px"
    }

})


