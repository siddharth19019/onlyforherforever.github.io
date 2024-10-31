window.addEventListener('resize', () => {
  });
  
  const banner = document.querySelector('.banner');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      banner.classList.add('transparent');
    } else {
      banner.classList.remove('transparent');
    }
  });
  