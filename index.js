const username = document.querySelector('.username');
const card = document.querySelector('.card');

let hideTimeout;

// Show card on username hover
username.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
 card.classList.add('show');
});

// Hide card when mouse leaves username (but allow time to move to card)
username.addEventListener('mouseleave', () => {
hideTimeout = setTimeout(() => {
card.classList.remove('show');
}, 200); // short delay to allow card hover
});

// Show card if mouse enters card itself
card.addEventListener('mouseenter', () => {
 clearTimeout(hideTimeout);
 card.classList.add('show');
});

// Hide card when mouse leaves card
card.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
card.classList.remove('show');
}, 200);
});
