var menuLinks = document.querySelectorAll(".menu-link");
for (link of menuLinks) {
    link.addEventListener("click", function(el) {
        el.preventDefault();
        var targetViewID = el.target.innerHTML;
        var targetViewElement = document.getElementById(targetViewID);
        // targetViewElement.scrollIntoView({behavior: "smooth", block: "nearest"});
        window.scrollTo({
            top: targetViewElement.offsetTop - 72
        })
    })
}

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })