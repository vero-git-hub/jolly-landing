document.addEventListener('DOMContentLoaded', function () {
    var starContainer = document.createElement('div');
    starContainer.classList.add('stars');
    document.querySelector('.home-section').appendChild(starContainer);

    var numberOfStars = window.innerWidth <= 768 ? 30 : 100;
    for (var i = 0; i < numberOfStars; i++) {
        var star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 1.5 + 's';
        starContainer.appendChild(star);
    }

    const snowContainer = document.querySelector('.snow');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.top = `${Math.random() * -50}%`;
        snowflake.style.left = `${Math.random() * 100}%`;
        snowContainer.appendChild(snowflake);
    }
});
