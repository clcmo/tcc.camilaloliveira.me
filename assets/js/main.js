// Criar estrelas no fundo
const starsContainer = document.getElementById('stars');
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

// Sistema de Troca de Tema
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

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