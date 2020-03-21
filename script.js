const MENU = document.querySelector(".nav__list");
const BUTTON = document.querySelector('#btn');
const CLOSE_BUTTON = document.querySelector('#close-btn');


MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove("nav_active"));
    event.target.classList.add("nav_active");
});



 BUTTON.addEventListener('click', (event) => {
    const subject = document.querySelector("#subject").value;
    document.querySelector("#result").innerText = subject;
    document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.querySelector("#result").innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});


