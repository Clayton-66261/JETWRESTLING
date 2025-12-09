// Smooth-scroll for anchor links (e.g. “#register”)
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Example: handle form submission to show a simple “Thank you” alert (for demo only)
const form = document.getElementById('registration-form');
if (form) {
  form.addEventListener('submit', function(e) {
    // For demo: prevent actual submission
    e.preventDefault();
    alert('Thank you for registering! We will contact you soon with confirmation.');
    form.reset();
  });
}
