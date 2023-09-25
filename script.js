document.addEventListener("DOMContentLoaded", function () {
    const animationContainer = document.querySelector(".animation-container");

    setTimeout(() => {
        animationContainer.style.opacity = "1";
        animationContainer.style.animation = "none";

        setTimeout(() => {
            animationContainer.style.display = "none";

            setTimeout(() => {
                animationContainer.style.opacity = "0";
            }, 3000);
        }, 5000);
    }, 0);
});

document.querySelector('.menu-btn').addEventListener('click', function(){
    document.querySelector('.menu').classList.toggle('is-active');
});
