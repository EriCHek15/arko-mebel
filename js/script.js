function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function submitForm() {

    
}

function like(id) {
    let src = document.getElementById(id).src;
    console.log(src);
    if (src === "http://127.0.0.1:5500/source/img/red_heart.svg") {
        document.getElementById(id).src = "../source/img/full_heart.svg"
    } else {
        document.getElementById(id).src = "../source/img/red_heart.svg"
    }
}

function sidebar_list(id) {
    // let img = 'image' + id;
    // let text = 'text' + id;
    //
    // console.log(img);
    // console.log(text);

    let elements = document.querySelectorAll('.sidebar-item');

    elements.forEach(element => {
        element.classList.add('d-none');
    });

    elements = document.querySelectorAll('.sidebar_menu');
    elements.forEach(element => {
        element.classList.remove('d-none');
    });
}

function sidebar_list_back() {
    let elements = document.querySelectorAll('.sidebar_menu');
    elements.forEach(element => {
        element.classList.add('d-none');
    });

    elements = document.querySelectorAll('.sidebar-item');
    elements.forEach(element => {
        element.classList.remove('d-none');
    });
}

function showAdvertisement() {
    const ads = [
        "Реклама 1: Купите наши лучшие товары по скидке!",
        "Реклама 2: Посетите наш сайт-партнер для специальных предложений!",
        "Реклама 3: Подпишитесь на нашу рассылку и получите скидку 10%!"
    ];
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    alert(randomAd);
}

setTimeout(() => showAdvertisement(), 10000);

setInterval(() => showAdvertisement(), 100000);

$(document).ready(function () {
    // Показать кнопку при прокрутке вниз на 20px от верхней части документа
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#scrollToTopBtn').fadeIn();
        } else {
            $('#scrollToTopBtn').fadeOut();
        }
    });

    // При клике на кнопку прокрутить страницу вверх
    $('#scrollToTopBtn').click(function () {
        $('html, body').animate({scrollTop: 0}, 800); // Плавная прокрутка (800 миллисекунд)
        return false;
    });
});

$(function () {
    $("#callToolTip").tooltip();
    $("#submitToolTip").tooltip();
});