document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('bounceIn'); // Add animation class
        entry.target.classList.remove('hidden'); // Remove hidden state
        observer.unobserve(entry.target); // Stop observing this element
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the element is in view
  });

  elements.forEach(element => observer.observe(element));
});
