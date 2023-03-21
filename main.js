    
    const form = document.getElementById('form-EBAC');
    let formEValido = false;
    function validaCampo(campoA, campoB) {
        return campoB > campoA; 
    }
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
   
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');

    formEValido = validaCampo(campoB.value)
    if (formEValido)  {
        alert("Está ok");

    } else {
        alert("O valor do campo A deve ser maior que o do campo B");
    }

})

console.log(form);

