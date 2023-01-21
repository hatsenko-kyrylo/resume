"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.portfolio__slide'),
        prev = document.querySelector('.portfolio__prev-arrow'),
        next = document.querySelector('.portfolio__next-arrow'),
        slidesWrapper = document.querySelector('.portfolio__slider-wrapper'),
        slidesField = document.querySelector('.portfolio__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
        slide.style.width = width;
    });

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = (`translateX(-${offset}px)`);
    });

// ----------------------modal---------------------
    const closeModal = document.querySelector('.modal__close'),
    modal = document.querySelector('.modal'),
    openModal = document.querySelector('.about-me__button-open');

    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    closeModal.addEventListener('click', closeModalFunc);

    openModal.addEventListener('click', () => {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.style.display === 'block') {
            closeModalFunc();
        }
    })
});