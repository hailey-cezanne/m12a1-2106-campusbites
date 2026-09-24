// Week 1: search and category filtering on the Food Spots page.
const searchInput = document.querySelector('#food-search');
const filterButtons = document.querySelectorAll('[data-filter]');
const foodCards = document.querySelectorAll('#food-list .food-card');
let selectedCategory = 'all';

function filterFoodSpots() {
  const searchText = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  foodCards.forEach(function (card) {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const category = card.dataset.category;
    const matchesSearch = (name + ' ' + category).includes(searchText);
    const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
    card.hidden = !(matchesSearch && matchesCategory);
    if (!card.hidden) visibleCount++;
  });

  document.querySelector('#result-count').textContent = visibleCount + ' sample spots shown.';
  document.querySelector('#no-results').hidden = visibleCount !== 0;
}

// Other pages share this file, so only attach these events when search exists.
if (searchInput) {
  searchInput.addEventListener('input', filterFoodSpots);
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      selectedCategory = button.dataset.filter;
      filterButtons.forEach(function (filterButton) {
        filterButton.setAttribute('aria-pressed', filterButton === button ? 'true' : 'false');
      });
      filterFoodSpots();
    });
  });
}

// Layout demonstration only: do not send, store or claim to deliver a message.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    document.querySelector('#form-status').textContent = 'Demo only — your message was not sent or saved.';
  });
}
