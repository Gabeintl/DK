document.addEventListener('DOMContentLoaded', function() {
    function createRandomImages() {
        const numImages = 25; // Número de imagens a serem criadas
        const container = document.getElementById('image-container');
        
        for (let i = 0; i < numImages; i++) {
            const div = document.createElement('div');
            div.className = 'image';
            
            // Define uma posição aleatória
            const x = Math.random() * (window.innerWidth - 100); // Subtrai a largura da imagem para garantir que não saia da tela
            const y = Math.random() * (window.innerHeight - 100); // Subtrai a altura da imagem para garantir que não saia da tela
            
            div.style.left = `${x}px`;
            div.style.top = `${y}px`;
            
            container.appendChild(div);
        }
    }

    // Cria as imagens aleatoriamente ao carregar a página
    createRandomImages();
});
