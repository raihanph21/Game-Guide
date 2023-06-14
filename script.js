// Ambil elemen-elemen 
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navUl');

navbarToggle.addEventListener('onclick', function() {
    navbarMenu.classList.toggle('active');
    navbarMenu.style.display = navbarMenu.classList.contains('active') ? 'block' : 'none';
  });