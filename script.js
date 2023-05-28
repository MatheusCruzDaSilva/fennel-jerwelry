const swiperVendidos = new Swiper('.swiper', {
    spaceBetween: 50,
    slidesPerView: 1,
    speed:300,
    keyboard:true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        1000: {
            spaceBetween: 550,
            pagination: {
                clickable: true,
            },
        },
    },
});