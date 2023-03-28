$(document).ready(function() {

$('#campo-telefone').mask('(00) 00000-0000', {
    placeholder: '(__) _____-____ '
})

$('#CPF').mask('000.000.000-00', {
    placeholder: '___.___.___-__ '
})

$('#CEP').mask('00.000-000', {
    placeholder: '__.___-___ '
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        CPF: {
            required: true
        },
        endereço: {
            required: true
        },
        CEP: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome completo'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos){
            alert(`Existem ${camposIncorretos} campos vazios`)
        }
    }
})

})
