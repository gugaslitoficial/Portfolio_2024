function verificarFormulario() {
    var firstName = document.getElementById('first-name').value.trim();
    var lastName = document.getElementById('last-name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    var camposFaltando = [];

    if (firstName === '') {
        camposFaltando.push('First Name');
    }
    if (lastName === '') {
        camposFaltando.push('Last Name');
    }
    if (email === '') {
        camposFaltando.push('Email');
    }
    if (message === '') {
        camposFaltando.push('Message');
    }

    if (camposFaltando.length > 0) {
        alert('Por favor, preencha os seguintes campos: ' + camposFaltando.join(', '));
        return false; 
    }

    return true;
}
