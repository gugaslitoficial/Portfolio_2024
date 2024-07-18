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

