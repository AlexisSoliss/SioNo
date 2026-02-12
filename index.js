const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const preguntaDiv = document.querySelector('#pregunta');
const mensajeFinalDiv = document.querySelector('#mensajeFinal');

// Lógica para el botón SÍ
yesBtn.addEventListener('click', function () {
    // Ocultamos la pregunta y los botones
    preguntaDiv.style.display = 'none';
    // Mostramos el mensaje final y el gif
    mensajeFinalDiv.style.display = 'block';
});

// Lógica para el botón NO (huye del mouse)
noBtn.addEventListener('mouseover', function () {
    // Limitamos el movimiento para que no se salga taaaanto de la pantalla (90%)
    const randomX = Math.random() * 90;
    const randomY = Math.random() * 90;
    
    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';
    // Esto asegura que el botón se centre en la coordenada
    noBtn.style.transform = 'translate(-50%, -50%)'; 
});