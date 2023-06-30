const menubtn = document.querySelector('#menu');
menubtn.addEventListener('click', function() {
    window.location.href = "dashboard.html";
    console.log("menu button clicked");
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
