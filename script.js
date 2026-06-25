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



document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('nav ul');
  if (navToggle && navUl) {
    navToggle.addEventListener('click', function() {
      navUl.classList.toggle('open');
    });
  }

  const internshipLink = document.getElementById('internship');
  const popupWindow = document.querySelector('.window');
  const popupButtons = popupWindow.querySelectorAll('button');
  const titleBar = popupWindow.querySelector('.title-bar');

  function setPopupPosition() {
    const rect = internshipLink.getBoundingClientRect();
    const left = rect.right + 12 + window.scrollX;
    const top = rect.top + window.scrollY;
    popupWindow.style.left = `${left}px`;
    popupWindow.style.top = `${top}px`;
  }

  function showPopup() {
    setPopupPosition();
    popupWindow.classList.add('visible');
  }

  function hidePopup() {
    popupWindow.classList.remove('visible');
  }

  internshipLink.addEventListener('click', function(event) {
    event.preventDefault();
    showPopup();
  });

  popupButtons.forEach(button => {
    button.addEventListener('click', hidePopup);
  });
});