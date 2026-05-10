
  function toggleMenu() {
    const links = document.getElementById('navLinks');
    links.classList.toggle('open');
  }
 
  // Scroll animation observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.6s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.logo-card, .feat-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
