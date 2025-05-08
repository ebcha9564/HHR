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
    speed: 1100,
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },
    on: {
        init: function () {
            // Initialize - show first text
            const textSlides = document.querySelectorAll('.slide-text-1');
            textSlides.forEach((slide, index) => {
                if (index === 0) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        },
        slideChange: function () {
            // Get current slide index
            const activeIndex = this.activeIndex;

            // Get all text slides
            const textSlides = document.querySelectorAll('.slide-text-1');

            // Remove active class from all text slides
            textSlides.forEach(slide => {
                slide.classList.remove('active');
            });

            // Add active class to corresponding text slide with animation
            if (textSlides[activeIndex]) {
                textSlides[activeIndex].classList.add('active');
            }
        }
    }
});
