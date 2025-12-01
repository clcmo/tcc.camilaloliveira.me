document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // BOTÃO DE VOLTAR
    // ============================================
    const backButton = document.getElementById('return');
    
    if (backButton) {
        // Adiciona o conteúdo do botão
        backButton.innerHTML = `
            <span class="material-symbols-outlined">arrow_back</span>
            Voltar
        `;
        
        // Adiciona evento de clique
        backButton.addEventListener('click', function() {
            // Verifica se há histórico de navegação
            if (window.history.length > 1) {
                window.history.back();
            } else {
                // Se não houver histórico, vai para a página inicial
                window.location.href = 'index.html';
            }
        });
    }

    // ============================================
    // ESTRELAS ANIMADAS NO FUNDO
    // ============================================


    const starsContainer = document.getElementById('stars');
    
    if (starsContainer) {
        // Criar estrelas no fundo
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }
    }

    // ============================================
    // SISTEMA DE TROCA DE TEMA (se existir)
    // ============================================

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    if (themeToggle) {
        // Carregar tema salvo
        const savedTheme = localStorage.getItem('theme') || 'default';
        if (savedTheme === 'ocean') {
            body.setAttribute('data-theme', 'ocean');
            themeToggle.innerHTML = '<span class="material-symbols-outlined">waves</span>';
        }

        // Alternar tema
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            
            if (currentTheme === 'ocean') {
                body.removeAttribute('data-theme');
                themeToggle.innerHTML = '<span class="material-symbols-outlined">palette</span>';
                localStorage.setItem('theme', 'default');
            } else {
                body.setAttribute('data-theme', 'ocean');
                themeToggle.innerHTML = '<span class="material-symbols-outlined">waves</span>';
                localStorage.setItem('theme', 'ocean');
            }
        });
    }
});