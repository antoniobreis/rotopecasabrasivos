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
