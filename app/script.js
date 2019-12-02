var menuLinks = document.querySelectorAll(".menu-link");
for (link of menuLinks) {
    link.addEventListener("click", function(el) {
        el.preventDefault();
        var targetViewID = el.target.innerHTML;
        var targetViewElement = document.getElementById(targetViewID);
        
        window.scrollTo({
            top: targetViewElement.offsetTop - 72
        });

        document.getElementById("checkbox").checked = false;

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

  var contactsButton = document.getElementById("contacts-button");
  var contactsName = document.getElementById("contacts-name");
  var contactsSurname = document.getElementById("contacts-surname");
  var contactsPhone = document.getElementById("contacts-phone");
  var radioButtonFour = document.getElementById("radio_4");
  var radioButtonThree = document.getElementById("radio_3");
  var contactsButtons = document.getElementById("contacts-buttons");

  contactsButton.addEventListener("click", function() {
        if (contactsName.value.length === 0) {
            contactsName.nextElementSibling.style.visibility = "visible";
        } else {
            contactsName.nextElementSibling.style.visibility = "hidden";
        }

        if (contactsSurname.value.length === 0) {
            contactsSurname.nextElementSibling.style.visibility = "visible";
        } else {
            contactsSurname.nextElementSibling.style.visibility = "hidden";
        }

        if (contactsPhone.value.length === 0) {
            contactsPhone.nextElementSibling.style.visibility = "visible";
        } else {
            contactsPhone.nextElementSibling.style.visibility = "hidden";
        }

        if (radioButtonFour.checked || radioButtonThree.checked) {
            contactsButtons.nextElementSibling.style.visibility = "hidden";
        } else {
            contactsButtons.nextElementSibling.style.visibility = "visible";
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

var media = window.matchMedia("(max-width: 1120px)");

function applyMediaQuery(event) {
    if (event.matches) {
        document.getElementById("checkbox").checked = false;

        mySwiper.params.slidesPerView = 1;        
    } else {
        mySwiper.params.slidesPerView = 3; 
    }

}

media.addListener(applyMediaQuery);