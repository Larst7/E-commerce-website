document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const links = document.querySelectorAll('nav ul li a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      });
    });
  
    // Active navigation links
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight - 50) {
          currentSection = section.getAttribute('id');
        }
      });
  
      const navLinks = document.querySelectorAll('nav ul li a');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(currentSection)) {
          link.classList.add('active');
        }
      });
    });
  
    // Scrollspy
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          section.classList.add('active-section');
        } else {
          section.classList.remove('active-section');
        }
      });
    });
  });