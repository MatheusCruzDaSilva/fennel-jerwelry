const swiperBanner = new Swiper('.carrossel__banner', {
    slidesPerView: 1,
    speed:500,
    keyboard:true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
    });
const swiperVendidosMobile = new Swiper('.carrossel__vendidos__mobile', {
    spaceBetween: 50,
    slidesPerView: 1,
    speed:300,
    keyboard:true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        },
    });
const swiperLançamentos = new Swiper('.carrossel__lancamentos__mobile', {
    spaceBetween: 50,
    slidesPerView: 1,
    speed:300,
    keyboard:true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
         },
    });
const swiperVendidosDesktop = new Swiper('.carrossel__vendidos__desktop', {
    spaceBetween: 400,
    slidesPerView: 1,
    speed:300,
    keyboard:true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        },
    });
const swiperLançamentosDesktop = new Swiper('.carrossel__lancamentos__desktop', {
    spaceBetween: 400,
    slidesPerView: 1,
    speed:300,
    keyboard:true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
         },
    });