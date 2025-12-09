
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Demo form handling for registration page (prevents real submission in this demo)
  const regForm = document.getElementById('registration-form');
  if(regForm){
    regForm.addEventListener('submit', function(e){
      e.preventDefault();
      // Simple client-side validation example
      const name = regForm.querySelector('[name="participant_name"]').value.trim();
      if(!name){
        alert('Please enter participant name.');
        return;
      }
      // Show a success message on page
      const parent = regForm.parentElement;
      parent.innerHTML = '<div class="card"><h2>Registration submitted</h2><p class=\"muted\">Thank you! Your registration has been received. We will contact you with confirmation and payment instructions.</p><p class=\"muted\">(This demo intercepts submission — integrate with a real backend or Formspree to process.)</p></div>';
    });
  }

  // Contact form (demo)
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! We received your message (demo).');
      contactForm.reset();
    });
  }
});
