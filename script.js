const themetoggle = document.querySelector('.dark-mode');
const isDarkMode = localStorage.getItem('darkMode');
const star = document.querySelector('.star');

document.addEventListener("DOMContentLoaded", function() {
    var fadeElement = document.getElementById("fade");
    fadeElement.style.transition = "opacity 1s";
    fadeElement.style.opacity = "1";
});

document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('.section');
    var delay = 1000; 

    sections.forEach(function(section, index) {
        section.style.opacity = '0'; 
        section.style.transform = 'translateY(100px)'; 
        section.style.transition = 'opacity 1s, transform 1s';
        
        setTimeout(function() {
            section.style.opacity = '1'; 
            section.style.transform = 'translateY(0)';
        }, delay * (index + 1)); 
    });
});

if (isDarkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    document.body.style.backgroundImage = 'url(sun.jpg)';
}

if (isDarkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    document.body.style.backgroundImage = 'url(sun.jpg)';
}




if (isDarkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    document.body.style.backgroundImage = 'url(sun.jpg)';
    star.style.display = 'none';
}

themetoggle.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundImage = 'url(sun.jpg)';
        localStorage.setItem('darkMode', 'enabled');
        star.style.display = 'none';
    } else {
        document.body.style.backgroundImage = '';
        localStorage.setItem('darkMode', null);
        star.style.display = 'block';
    }
});
