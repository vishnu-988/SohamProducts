document.addEventListener('DOMContentLoaded', function() {
  const categoryLinks = document.querySelectorAll('.custom-category-list a');
  const productCards = document.querySelectorAll('.col[data-category]');

  // Initially, show all products
  productCards.forEach(card => {
      card.style.display = 'block';
  });

  categoryLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent page reload

          const selectedCategory = e.target.getAttribute('data-category');

          // Filter the products based on the selected category
          productCards.forEach(card => {
              const cardCategory = card.getAttribute('data-category');

              if (cardCategory === selectedCategory || selectedCategory === '') {
                  card.style.display = 'block'; // Show matching category
              } else {
                  card.style.display = 'none'; // Hide non-matching category
              }
          });
      });
  });
});