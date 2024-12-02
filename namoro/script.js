document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    
    // Função para o botão "Sim"
    yesButton.addEventListener('click', function() {
        // Redireciona para o arquivo PDF
        window.location.href = 'https://drive.google.com/file/d/1HstxOTTnrEXNPq_1fB1Z7aItI_H7Htev/view?usp=sharing'; // Coloque o nome do seu PDF aqui
    });

    // Função para mover o botão "Não" aleatoriamente ao passar o mouse
    noButton.addEventListener('mouseover', function() {
        // Selecionar o container para limitar a área de movimento
        const container = document.querySelector('.container');
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        // Calcula posições aleatórias dentro do container
        const randomX = Math.random() * (containerWidth - noButton.offsetWidth);
        const randomY = Math.random() * (containerHeight - noButton.offsetHeight);

        // Aplica as posições calculadas
        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    });
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);
