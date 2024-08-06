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

    var productData = {};

    function loadProductData() {
        fetch('content.json')
            .then(response => response.json())
            .then(data => {
                productData = data.products.reduce((acc, product) => {
                    acc[product.id] = product;
                    return acc;
                }, {});

                updateProductInfo(1);
            })
            .catch(error => console.error('Error loading product data:', error));
    }

    function updateProductInfo(productId) {
        var productTitle = document.getElementById("productTitle");
        var productDescription = document.getElementById("productDescription");
        var productImage = document.querySelector(".product-image img");

        var product = productData[productId];
        productTitle.textContent = product.title;
        productDescription.textContent = product.description;
        productImage.src = product.image;
        productImage.alt = product.title;

        productItems.forEach(function(item) {
            item.classList.remove("selected");
        });

        document.querySelector('.product-item[data-product="' + productId + '"]').classList.add("selected");
    }

    var productItems = document.querySelectorAll(".product-item");
    productItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var productId = parseInt(this.getAttribute("data-product"));
            updateProductInfo(productId);
        });
    });

    loadProductData();
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
        document.getElementById('contactsTitle').innerText = data.contactsTitle;
        document.getElementById('contactsCheckbox').innerText = data.contactsCheckbox;
    })
    .catch(error => console.error('Error loading content:', error));

document.addEventListener('DOMContentLoaded', function() {
    var burgerMenu = document.querySelector('.burger-menu');
    var sideMenu = document.querySelector('.side-menu');
    var mainNav = document.querySelector('.main-nav ul');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        sideMenu.classList.toggle('active');
        mainNav.classList.toggle('hidden');
    });
});
