// Smooth scrolling untuk semua anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Toggle active class untuk navigasi
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
      // Hapus semua kelas active
      document.querySelectorAll('nav ul li a').forEach(item => {
        item.classList.remove('active');
      });
      // Tambahkan kelas active pada link yang diklik
      this.classList.add('active');
    });
  });
  