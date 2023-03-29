const form = document.getElementById('form-ebac');
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

    document.getElementById("btn-enviar").addEventListener("click", function() {
            if (campoB.value > campoA.value) {
              alert("Formulário Válido");
            } else {
              alert("Formulário Inválido - O campo B deve ser maior que o campo A");
            }
          });


        });
