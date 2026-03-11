// ═══════════════════════════════════════════
//   ROTOPEÇAS ABRASIVOS — GLOBAL SCRIPT
// ═══════════════════════════════════════════

// Navbar mobile toggle
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');

if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// Mobile menu toggle for inline onclick handlers
document.addEventListener('DOMContentLoaded', function() {
  const navToggles = document.querySelectorAll('.nav-toggle');
  navToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      this.nextElementSibling.classList.toggle('open');
    });
  });
});

// Atualizar ano dinamicamente no rodapé
document.addEventListener('DOMContentLoaded', function() {
  const anoAtual = document.getElementById('ano-atual');
  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }
});

// ═══════════════════════════════════════════
//   BANNER DE CONSENTIMENTO DE COOKIES
// ═══════════════════════════════════════════════

// Banner de Cookies
document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('cookie-accept');
  
  // Verificar se já foi aceito
  if (localStorage.getItem('cookieConsent') === 'accepted') {
    cookieBanner.classList.add('hidden');
    return;
  }
  
  // Aceitar cookies
  acceptButton.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.add('hidden');
  });
});
