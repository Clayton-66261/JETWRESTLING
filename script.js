// scripts.js - interactivity for the Hello World demo

(() => {
  const cards = Array.from(document.querySelectorAll('.card'));
  const randomBtn = document.getElementById('randomize');
  const resetBtn = document.getElementById('reset');

  // Toggle active class on click or Enter key
  function toggleCard(e) {
    if (e.type === 'click' || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) {
      e.currentTarget.classList.toggle('active');
    }
  }

  // Attach handlers
  cards.forEach(card => {
    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', toggleCard);
  });

  // Randomize: pick a random card and activate it (visual demo)
  function randomize() {
    // clear all
    cards.forEach(c => c.classList.remove('active'));
    const n = Math.floor(Math.random() * cards.length);
    cards[n].classList.add('active');
    // bring the chosen card into view (nice UX)
    cards[n].scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'});
  }

  function reset() {
    cards.forEach(c => c.classList.remove('active'));
  }

  randomBtn.addEventListener('click', randomize);
  resetBtn.addEventListener('click', reset);

  // Optional: keyboard shortcuts: R = randomize, 0 = reset
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') randomize();
    if (e.key === '0') reset();
  });

  // Small accessibility improvement: announce when randomizing
  randomBtn.addEventListener('click', () => {
    randomBtn.setAttribute('aria-pressed', 'true');
    setTimeout(() => randomBtn.setAttribute('aria-pressed','false'), 700);
  });
})();

