document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const messageDiv = document.getElementById('form-message');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          form.reset();
          messageDiv.textContent = "Your message was sent! I'll get back to you ASAP";
          messageDiv.style.color = "#4F377B";
          messageDiv.style.marginTop = "18px";
        } else {
          messageDiv.textContent = "Oops! Something went wrong. Please try again.";
          messageDiv.style.color = "red";
        }
      });
    });
  }
});