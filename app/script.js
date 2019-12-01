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
    loop: false,
    slidesPerView: 3,
    spaceBetween: 100,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 4,
      type: "bullets",
      clickable: true,
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

  var heroButton = document.getElementById("hero-button");
  var nameInput = document.getElementById("hero-name");
  var surnameInput = document.getElementById("hero-surname");
  var phoneInput = document.getElementById("hero-phone");
  var radioButtonOne = document.getElementById("radio_1");
  var radioButtonTwo = document.getElementById("radio_2");
  var radioButtons = document.getElementById("radio-buttons");

  heroButton.addEventListener("click", function() {
        if (nameInput.value.length === 0) {
            nameInput.nextElementSibling.style.visibility = "visible";
        } else {
            nameInput.nextElementSibling.style.visibility = "hidden";
        }

        if (surnameInput.value.length === 0) {
            surnameInput.nextElementSibling.style.visibility = "visible";
        } else {
            surnameInput.nextElementSibling.style.visibility = "hidden";
        }

        if (phoneInput.value.length === 0) {
            phoneInput.nextElementSibling.style.visibility = "visible";
        } else {
            phoneInput.nextElementSibling.style.visibility = "hidden";
        }

        if (radioButtonOne.checked || radioButtonTwo.checked) {
            radioButtons.nextElementSibling.style.visibility = "hidden";
        } else {
            radioButtons.nextElementSibling.style.visibility = "visible";
        }
  })

  document.querySelectorAll(".square").forEach(function(el) {
      el.addEventListener("click", function(e) {
          var sectionID = e.target.firstElementChild.innerText.toLowerCase();
          document.querySelectorAll(".features").forEach(function(section) {
              section.style.display = "none";
          });
          document.getElementById(sectionID).style.display = "flex";
      })
  })

  document.querySelectorAll(".square-text").forEach(function(el) {
    el.addEventListener("click", function(e) {
        var sectionID = e.target.innerText.toLowerCase();
        document.querySelectorAll(".features").forEach(function(section) {
            section.style.display = "none";
        });
        document.getElementById(sectionID).style.display = "flex";
    })
})

