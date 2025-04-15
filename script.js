const dotsButton = document.getElementById('dots');
const dotsBar = document.querySelector('.Dots-Bar');
const links = document.querySelectorAll('.Menu-Bar a');
const currentPage = window.location.pathname.split("/").pop();




dotsButton.addEventListener('click', () => {
    if (dotsBar.style.display === 'none' || dotsBar.style.display === '') {
        dotsBar.style.display = 'block';
    } else {
        dotsBar.style.display = 'none';
    }
});

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});