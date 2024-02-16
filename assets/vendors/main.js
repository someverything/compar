// 'use strict'
// document.addEventListener("DOMContentLoaded", function() {
//     const boxes = document.querySelectorAll('.box');
//     let firstBox = boxes[0];

//     boxes.forEach(box => {
//         box.addEventListener('mouseover', function() {
//             boxes.forEach(b => b.classList.remove('active'));
//             this.classList.add('active');
//         });
//     });

//     boxes[0].parentNode.addEventListener('mouseout', function() {
//         boxes.forEach(b => b.classList.remove('active'));
//         firstBox.classList.add('active');
//     });
// });

'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.portfolio-box');
    const parent = boxes[0].parentNode; // Get the parent element
    let firstBox = boxes[0];

    boxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            boxes.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    parent.addEventListener('mouseout', function(event) {
        // Check if the mouse pointer is outside the parent element
        if (!parent.contains(event.relatedTarget)) {
            boxes.forEach(b => b.classList.remove('active'));
            firstBox.classList.add('active');
        }
    });
});

// var swiper = new Swiper('.swiper-container', {
//     loop: true, 
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     scrollbar: {
//         el: ".swiper-scrollbar",
//         hide: true,
//       },
// });

// var swiper = new Swiper('.swiper-container', {
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         hide: false, // Показать скроллбар всегда
//     },
// });

var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    }
})