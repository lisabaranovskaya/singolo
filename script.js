const MENU = document.querySelector(".nav__list");


MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove("nav_active"));
    event.target.classList.add("nav_active");
});

const tags = document.querySelector(".porttfolio__buttons");

tags.addEventListener('click', (event) => {
    tags.querySelectorAll('button').forEach(el => el.classList.remove("button_selected"));
    event.target.classList.add("button_selected");
    if (event.target.innerText === "All") {
        showAllPictures();
    } else {
        filterPicturesBySelectedTag(event.target.innerText);
    }

});

const showAllPictures = () => {

}

const filterPicturesBySelectedTag = (selectedTag) => {
    var pictures = document.querySelectorAll('.layout-4-column .image');
    console.log(pictures);
}


