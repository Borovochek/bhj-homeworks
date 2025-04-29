window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Если элемент появился в viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('reveal_active');
      } else {
        el.classList.remove('reveal_active');
      }
    });
  });