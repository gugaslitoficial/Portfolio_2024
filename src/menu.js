document.getElementById('Button-Menu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; // Exibe o menu ao clicar no botão
    } else {
        menu.style.display = 'none'; // Oculta o menu se já estiver visível
    }
});

document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var menuButton = document.getElementById('Button-Menu');
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.style.display = 'none'; // Oculta o menu se clicar fora dele ou no botão
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de submissão e o formulário
    const submitButton = document.getElementById('submitButton');
    const form = document.getElementById('contactForm');
    
    // Função para validar o formulário
    function validateForm() {
      // Seleciona os campos do formulário
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Flag para verificar se o formulário é válido
      let isValid = true;
  
      // Limpa mensagens de erro anteriores
      document.querySelectorAll('.error').forEach(el => el.remove());
      
      // Verifica se o campo First Name está vazio
      if (!firstName) {
        showError('firstName', 'First Name is required');
        isValid = false;
      }
  
      // Verifica se o campo Last Name está vazio
      if (!lastName) {
        showError('lastName', 'Last Name is required');
        isValid = false;
      }
  
      // Verifica se o campo Email está vazio ou inválido
      if (!email || !validateEmail(email)) {
        showError('email', 'Valid Email is required');
        isValid = false;
      }
  
      // Verifica se o campo Message está vazio
      if (!message) {
        showError('message', 'Message is required');
        isValid = false;
      }
  
      return isValid;
    }
  
    // Função para exibir mensagem de erro
    function showError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const error = document.createElement('div');
      error.classList.add('error');
      error.style.color = 'red';
      error.style.marginTop = '5px';
      error.innerText = message;
      field.parentElement.appendChild(error);
    }
  
    // Função para validar o formato de email
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Adiciona o evento de clique ao botão de submissão
    submitButton.addEventListener('click', (e) => {
      e.preventDefault(); // Evita o envio padrão do formulário
  
      if (validateForm()) {
        // Se o formulário for válido, você pode enviar os dados ou executar outras ações
        alert('Form submitted successfully!');
        // form.submit(); // Descomente se quiser enviar o formulário realmente
      }
    });
  });
  
