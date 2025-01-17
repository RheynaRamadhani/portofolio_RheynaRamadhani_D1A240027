// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
    } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
    }
    };

    // Hamburger
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    });

// Darkmode toggle
const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

 checkbox.addEventListener('click', function () {
    if(toggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }
