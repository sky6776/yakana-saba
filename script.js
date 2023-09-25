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

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});
