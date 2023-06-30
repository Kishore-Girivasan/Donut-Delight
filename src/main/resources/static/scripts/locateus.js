const menubtn = document.querySelector('#menu');
menubtn.addEventListener('click', function() {
  window.location.href ="menu.html";
  console.log("menu button clicked")
});
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
  
  const hamburger = document.querySelector(".hamburger");
  const initialHTML = hamburger.innerHTML;
  
  hamburger.addEventListener('click', function(){
    let status = hamburger.getAttribute('data-status');  
    if(status === 'not-active') {
      hamburger.setAttribute('data-status','active');
      hamburger.classList.add('hamburger-active');
      console.log(hamburger.getAttribute('data-status'));
      hamburger.innerHTML = `
        <div id="1" class="line"></div>
        <div id="2" class="line"></div>
      `;
    } else {
      hamburger.setAttribute('data-status','not-active');
      hamburger.classList.remove('hamburger-active');
      console.log(hamburger.getAttribute('data-status'));
      hamburger.innerHTML = initialHTML;
    }
  });
  
