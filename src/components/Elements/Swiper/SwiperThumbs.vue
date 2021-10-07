<template lang="pug">
.swipers
    .swiper.mySwiper2.swiper-top
        .swiper-wrapper
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-1.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-2.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-3.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-4.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-5.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-6.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-7.jpg'")
    .swiper-button-prev.swiper-top-prev.swiper-my-prev
        <svg width="20" height="13" viewBox="0 0 20 13" fill="#FAFAFA" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.37524 6.49989C0.37524 6.68223 0.447672 6.85709 0.576603 6.98603C0.705534 7.11496 0.880403 7.18739 1.06274 7.18739L17.2781 7.18739L12.951 11.5131C12.8219 11.6422 12.7494 11.8173 12.7494 11.9999C12.7494 12.1825 12.8219 12.3575 12.951 12.4866C13.0801 12.6157 13.2552 12.6883 13.4377 12.6883C13.6203 12.6883 13.7954 12.6157 13.9245 12.4866L19.4245 6.98664C19.4885 6.92278 19.5393 6.84691 19.574 6.76339C19.6086 6.67986 19.6265 6.59032 19.6265 6.49989C19.6265 6.40946 19.6086 6.31992 19.574 6.23639C19.5393 6.15287 19.4885 6.077 19.4245 6.01314L13.9245 0.513141C13.8606 0.449221 13.7847 0.398516 13.7012 0.363922C13.6176 0.329328 13.5281 0.311523 13.4377 0.311523C13.2552 0.311523 13.0801 0.384047 12.951 0.513141C12.8219 0.642235 12.7494 0.817325 12.7494 0.999891C12.7494 1.18246 12.8219 1.35755 12.951 1.48664L17.2781 5.81239L1.06274 5.81239C0.880403 5.81239 0.705534 5.88482 0.576603 6.01375C0.447672 6.14269 0.37524 6.31755 0.37524 6.49989Z" />
        </svg>
    .swiper-button-next.swiper-top-next.swiper-my-next
        <svg width="20" height="13" viewBox="0 0 20 13" fill="#FAFAFA" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.37524 6.49989C0.37524 6.68223 0.447672 6.85709 0.576603 6.98603C0.705534 7.11496 0.880403 7.18739 1.06274 7.18739L17.2781 7.18739L12.951 11.5131C12.8219 11.6422 12.7494 11.8173 12.7494 11.9999C12.7494 12.1825 12.8219 12.3575 12.951 12.4866C13.0801 12.6157 13.2552 12.6883 13.4377 12.6883C13.6203 12.6883 13.7954 12.6157 13.9245 12.4866L19.4245 6.98664C19.4885 6.92278 19.5393 6.84691 19.574 6.76339C19.6086 6.67986 19.6265 6.59032 19.6265 6.49989C19.6265 6.40946 19.6086 6.31992 19.574 6.23639C19.5393 6.15287 19.4885 6.077 19.4245 6.01314L13.9245 0.513141C13.8606 0.449221 13.7847 0.398516 13.7012 0.363922C13.6176 0.329328 13.5281 0.311523 13.4377 0.311523C13.2552 0.311523 13.0801 0.384047 12.951 0.513141C12.8219 0.642235 12.7494 0.817325 12.7494 0.999891C12.7494 1.18246 12.8219 1.35755 12.951 1.48664L17.2781 5.81239L1.06274 5.81239C0.880403 5.81239 0.705534 5.88482 0.576603 6.01375C0.447672 6.14269 0.37524 6.31755 0.37524 6.49989Z" />
        </svg>
    .swiper.mySwiper(thumbsSlider="").swiper-bot
        .swiper-wrapper
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-1.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-2.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-3.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-4.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-5.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-6.jpg'")
            .swiper-slide
                .swiper-img
                    image-lazy(:srcImg="'difam/block3-7.jpg'")

</template>

<script>
// версия swiper 684 npm install swiper@6.8.4
// старый способ подгрузки свайпера
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs]);
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import ImageLazy from "../../UI/Images/ImageLazy";

export default {
  name: "SwiperThumbs",
  components: {
      ImageLazy,
    Swiper,
  },
  props: {},
  data: () => ({}),
  created() {},
    mounted() {
        const swiper = new Swiper(".mySwiper", {
            spaceBetween: 20,
            slidesPerView: 7,
            freeMode: true,
            watchSlidesProgress: true,
        });
        const swiper2 = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            lazy: true,
            navigation: {
                nextEl: ".swiper-top-next",
                prevEl: ".swiper-top-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    },
  methods: {},
};
</script>
<style lang="scss" scoped>
//Project Specific
.swiper-my-next,
.swiper-my-prev {
    width: 67px;
    height: 67px;
    background-color: #6fba6d;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: center;
    &:after {
        display: none;
    }
    @include breakpoint(md) {
        bottom: 60px;
        width: 60px;
        height: 60px;
    }
    @include breakpoint(xxl) {
        bottom: 80px;
        width: 67px;
        height: 67px;
    }
    &.swiper-button-disabled {
        background-color: rgba(24, 24, 24, 0.1);
        svg {
            fill: rgba(24, 24, 24, 0.4);
        }
    }
}
.swiper-my-prev {
    svg {
        transform: rotate(180deg);
    }
}
.swiper-my-next {
}

//////////////////////
.swiper-top {
    margin-left: auto;
    margin-right: auto;
    .swiper-slide {
        height: 200px;
        border-radius: 5px;
        overflow: hidden;
        @include breakpoint(md) {
            height: 340px;
        }
        @include breakpoint(lg) {
            height: 500px;
        }
        @include breakpoint(xxl) {
            height: 550px;
        }
        picture,
        img {
            display: block;
            width: 100%;
            height: 100%;
            //object-fit: cover;
            background-size: cover;
            background-position: center;
            border-radius: 5px;
        }
    }
    .swiper-wrapper {
    }
}

.swipers {
    position: relative;
    z-index: 1;
    .swiper-top-next,
    .swiper-top-prev {
        bottom: -30px;
        top: unset;
        left: unset;
        @include breakpoint(md) {
            bottom: 20px;
            width: 60px;
            height: 60px;
        }
        @include breakpoint(xxl) {
            bottom: 10px;
            width: 67px;
            height: 67px;
        }
    }
    .swiper-top-prev {
        left: 70px;
        @include breakpoint(sm) {
            left: 34%;
            right: unset;
        }
        @include breakpoint(md) {
            left: unset;
            right: 120px;
        }
        @include breakpoint(xxl) {
            right: 200px;
        }
    }
    .swiper-top-next {
        right: 70px;
        @include breakpoint(sm) {
            left: unset;
            right: 34%;
        }
        @include breakpoint(md) {
            right: 30px;
        }
        @include breakpoint(xxl) {
            right: 60px;
        }
    }
}

.swiper-bot {
    display: none;

    @include breakpoint(xl) {
        display: flex;
        max-width: calc(100% - 220px);
        margin-left: 0;
        max-height: 120px;
        margin-top: 24px;
    }
    @include breakpoint(xxl) {
        max-height: 120px;
        max-width: calc(100% - 220px);
    }
    .swiper-slide {
        cursor: pointer;
        height: 120px;
        width: 120px;
        max-width: 120px;
        opacity: 0.4;
        background-color: $secondary;
        border: 3px solid transparent;

        overflow: hidden;
        object-fit: cover;
        @include breakpoint(xl) {
            height: 80px;
            width: 80px;
        }
        @include breakpoint(xxl) {

            width: 120px;
        }
        &:hover {
            opacity: 0.8;
        }
        picture,
        img {
            border-radius: 5px;
            display: block;
            margin: auto;
            height: 100%;
            width: 100%;

            background-size: cover;
            background-position: center;
        }
    }
    .swiper-wrapper {
        margin-left: 0;
    }
    .swiper-slide-thumb-active {
        opacity: 1;
        border: 3px solid black;
        border-radius: 5px;
    }
    .swiper-button-prev {
    }
    .swiper-button-next {
    }
}
</style>
