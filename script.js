/* Hamburger Navigation */

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('nav ul');
  if (navToggle && navUl) {
    navToggle.addEventListener('click', function() {
      navUl.classList.toggle('open');
    });
  }
});


