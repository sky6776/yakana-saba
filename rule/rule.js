document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});

const passwordInput = document.getElementById('passwordInput');
const confirmButton = document.getElementById('confirmButton');
const secretTextContainer = document.getElementById('secretTextContainer');

const correctPassword = '桜咲く参加希望';

confirmButton.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        secretTextContainer.style.display = 'block';
    } else {
        secretTextContainer.style.display = 'none';
    }
});
