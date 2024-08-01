document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

fetch('content.json')
.then(response => response.json())
.then(data => {
document.getElementById('homeTitle').innerText = data.homeTitle;
document.getElementById('homeDescription').innerText = data.homeDescription;
document.getElementById('homeButton').innerText = data.homeButton;
document.getElementById('homeBubble').innerText = data.homeBubble;
document.getElementById('productsTitle').innerText = data.productsTitle;
document.getElementById('productsDescription').innerText = data.productsDescription;
document.getElementById('productTitle').innerText = data.productTitle;
document.getElementById('productDescription').innerText = data.productDescription;
})
.catch(error => console.error('Error loading content:', error));
