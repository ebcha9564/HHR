var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            const texts = document.querySelectorAll('.slide-text');
            
            texts.forEach(text => {
                text.style.display = "none";
                text.classList.remove('active');
            });

            const activeText = texts[this.activeIndex];
            activeText.style.display = "block";

            void activeText.offsetWidth; 

            activeText.classList.add('active');
        },

        init: function () {
            const firstText = document.querySelector('.slide-text');
            firstText.style.display = "block";
            firstText.classList.add('active');
        }
    }
});

var swiper = new Swiper(".mySwiper-1", {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
