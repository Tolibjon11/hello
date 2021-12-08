const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul a');
const header = document.querySelector('.header');

let form = document.getElementById("form");
let nameInput = document.getElementById('name');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

function Form() {
    // console.log("Submit Clicked!")
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("textarea").value = "";
}

document.addEventListener('scroll', () => { 
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});