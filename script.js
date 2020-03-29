const MENU = document.querySelector(".nav__list");

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove("nav_active"));
    event.target.classList.add("nav_active");
});



const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}



function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.chevs_back').addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.chevs_forward').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
    }
});

const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

function Emptyvalidation(inputtxt) {
    if (inputtxt.value.length == 0) {
        return true;
    }
}

BUTTON.addEventListener('click', function (e) {
    
    const subject = document.getElementById("subject").value.toString();
    const description = document.getElementById('description').value.toString();
    if (!Emptyvalidation(document.getElementById('form-name')) && !Emptyvalidation(document.getElementById('form-email'))) {
        e.preventDefault();
        if (!Emptyvalidation(document.getElementById('subject')) && !Emptyvalidation(document.getElementById('description'))) {
            document.getElementById("result").innerText = '\n' + 'Subject: ' + subject + '\n' + 'Description: ' + description;
            document.getElementById('message-block').classList.remove('hidden');
        } else if (Emptyvalidation(document.getElementById('subject')) && !Emptyvalidation(document.getElementById('description'))) {
            document.getElementById("result").innerText = '\n' + 'No Subject' + '\n' + 'Description: ' + description;
            document.getElementById('message-block').classList.remove('hidden');
        } else if (!Emptyvalidation(document.getElementById('subject')) && Emptyvalidation(document.getElementById('description'))) {
            document.getElementById("result").innerText = '\n' + 'Subject: ' + subject + '\n' + 'No Description';
            document.getElementById('message-block').classList.remove('hidden');
        } else {
            document.getElementById("result").innerText = '\n' + 'No Subject' + '\n' + 'No Description';
            document.getElementById('message-block').classList.remove('hidden');
        }
    }

});

CLOSE_BUTTON.addEventListener('click', function () {
    document.getElementById("result").innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.querySelector('form').reset();
});


const portfolio_images = document.querySelector('.layout-4-column');

portfolio_images.addEventListener('click', function (event) {
    portfolio_images.querySelectorAll('img').forEach(el => el.classList.remove('image_bordered'));
    event.target.classList.add('image_bordered');
});



const addTagsClickHandler = () => {
    document.querySelector('.porttfolio__buttons').addEventListener('click', (e) => {
        if (e.target.classList.contains('button')) {
            let clickedTag = event.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            filterBySelectedTag(clickedTag);
        }
    })
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.porttfolio__buttons .button');
    tags.forEach(tag => {
        tag.classList.remove('button_selected');
        tag.classList.add('button_bordered');
    });
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('button_selected');
    clickedTag.classList.remove('button_bordered');
}

addTagsClickHandler();


const filterBySelectedTag = (clickedTag) => {
    const container = document.querySelector('.layout-4-column');
    const elementsArr = Array.from(container.children);
    shuffleArray(elementsArr);
    while (container.firstChild) {
        container.firstChild.remove();
    }
    for (let el of elementsArr) {
        container.appendChild(el);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let phones = document.querySelectorAll('.slide-phone');
let screenOfLeftPhone = document.querySelector('#slide-phone-screen-1');
let screenOfRightPhone = document.querySelector('#slide-phone-screen-2');
phones.forEach((phone) => {
    phone.addEventListener('click', () => {
        if (phone.classList.contains('slide-phone-1')) {
            turnScreenOnOrOff(screenOfLeftPhone);
        }
        else if (phone.classList.contains('slide-phone-2')) {
            turnScreenOnOrOff(screenOfRightPhone);
        }
    })
})
function turnScreenOnOrOff(screen) {
    if (screen.classList.contains('screen-off')) {
        screen.classList.remove('screen-off');
    }
    else {
        screen.classList.add('screen-off');
    }
}
