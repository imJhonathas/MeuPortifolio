document.addEventListener('DOMContentLoaded', function() {
    const btnVoltarTopo = document.getElementById('btnVoltarTopo');
    const btnAlterarEstilo = document.getElementById('btnAlterarEstilo');

    btnVoltarTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    let isDarkMode = false;

    btnAlterarEstilo.addEventListener('click', function() {
        if (!isDarkMode) {
            document.body.style.backgroundImage = 'none';

            const textos = document.querySelectorAll('.textoPrincipal, .conteudoTexto, footer');
            textos.forEach(function(texto) {
                if (texto.classList.contains('textoPrincipal')) {
                    texto.style.color = '#000000'; 
                } else {
                    texto.style.color = '#ffffff'; 
                }
            });

            isDarkMode = true;
        } else {
            document.body.style.backgroundImage = 'url("assents/gifbackground.gif")';

            const textos = document.querySelectorAll('.textoPrincipal, .conteudoTexto, footer');
            textos.forEach(function(texto) {
                texto.style.color = '#22D4FD'; 
            });

            isDarkMode = false;
        }
    });
});