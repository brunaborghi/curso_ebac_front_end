    
        
    const form = document.getElementById('form-EBAC');
    let formEValido = true;
   
    formEValido = validaCampo(Number(campoA.value), Number(campoB.value)); 
    
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();

    if (formEValido == validaCampo) {
        alert("Está ok");

    } else {
        alert("O valor do campo A deve ser maior que o do campo B");
    }

});
