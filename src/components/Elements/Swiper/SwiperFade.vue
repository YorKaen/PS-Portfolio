<template lang="pug">
swiper(effect="fade" :slides-per-view="1" :space-between="50" :pagination="pagination" @swiper="onSwiper" @slideChange="onSlideChange" )
    swiper-slide(v-for="(item, index) in dataSwiper" :key="index")
        .slide.bg-primary
            .slide-wrapper
                .slide-content__text
                    h1.block-1__title.slide__title.title.txt-white {{ item.slideTitle }}
                    .block-1__subtitle.slide__subtitle.txt.txt-white {{ item.slideTxt }}
                    .block-1__btn.slide__btn
                        a(href="#block4")
                            button.btn.btn-secondary.bg-secondary.px-2.py-1.r-10
                                span.txt-white.fw-m Получить кредит
                .slide-content__img
                    .slide__img
                        image-lazy(:srcImg="item.slideImgName")
                        .slide__img-text
                            .txt-white {{ item.slideValue }}
</template>

<script>
//array через пропсы пока не передается, или с кучей ошибок, так что пока так(
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import ImageLazy from "../../UI/Images/ImageLazy";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);

export default {
  name: "SwiperFade",
  components: {
      ImageLazy,
      Swiper,
      SwiperSlide,
  },
  data: () => ({
      dataSwiper: [
          {
              slideTitle: "Кредит наличными для вашего бизнеса",
              slideValue: "До 15 млн. руб",
              slideTxt:
                  "Увеличьте прибыль, запустив новый бизнес или развивая существующее предприятие",
              slideImgName: 'creditio/block-1-1.png',
              id: 1,
          },
          {
              slideTitle: "Кредит наличными на автомобиль",
              slideValue: "До 3 млн. руб",
              slideTxt:
                  "Выбирайте сами какой покупать автомобиль — новый или с пробегом",
              slideImgName: 'creditio/block-1-2.png',
              id: 2,
          },
          {
              slideTitle: "Кредит наличными на ремонт и строительство",
              slideValue: "До 5 млн. руб",
              slideTxt: "Не откладывайте планы — улучшайте условия жизни уже сейчас",
              slideImgName: 'creditio/block-1-3.png',
              id: 3,
          },
          {
              slideTitle: "Кредит наличными под залог недвижимости",
              slideValue: "До 25 млн. руб",
              slideTxt:
                  "Крупная сумма на длительный срок для решения серьезных задач",
              slideImgName: 'creditio/block-1-4.png',
              id: 4,
          },
          {
              slideTitle: "Кредит наличными на инвестиции",
              slideValue: "До 10 млн. руб",
              slideTxt:
                  "Увеличьте собственный капитал благодаря вложениям в акции, облигации, золото и серебро",
              slideImgName: 'creditio/block-1-5.png',
              id: 5,
          },
          {
              slideTitle: "Кредит наличными на путешествие и отдых",
              slideValue: "До 2 млн. руб",
              slideTxt:
                  "Посещайте новые страны и получайте новые впечатления сейчас, а платите потом",
              slideImgName: 'creditio/block-1-6.png',
              id: 6,
          },
      ],
      pagination: {
          clickable: true,
      },
  }),
  created() {
  },
  mounted() {

  },
  methods: {
      onSwiper(swiper) {
          //console.log(swiper);
      },
      onSlideChange() {
          //console.log('slide change');
      },
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
.slide {
    padding-bottom: 100px;
    padding-top: 40px;
    &-wrapper {
        @include breakpoint(lg) {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
        }
    }
    &-content {
        width: 100%;
        //&-content
        &__text {
            min-height: 280px;

            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @include breakpoint(lg) {
                align-items: flex-start;
            }
        }
        //&-content
        &__img {
            max-width: 460px;
            width: 100%;
            position: relative;
            @include breakpoint(lg) {
                max-width: 558px;
            }
        }
    }
    &__title {
        text-align: center;
        max-width: 20ch;
        @include breakpoint(lg) {
            text-align: left;
        }
    }
    &__subtitle {
        text-align: center;
        max-width: 40ch;
        @include breakpoint(lg) {
            text-align: left;
        }
    }
    &__btn {
        margin-top: auto;
        @include breakpoint(lg) {
            margin-top: 50px;
            width: 100%;
        }

        .btn {
            padding-left: 20px;
            padding-right: 20px;
            @include breakpoint(lg) {
            }
        }
    }
    &__img {
        display: none;
        @include breakpoint(lg) {
            display: flex;
        }
        &-text {
            position: absolute;
            background: rgba(19, 48, 211, 0.5);
            border-radius: 20px;
            padding: 10px 22px;
            bottom: 40px;
            left: 50px;
        }
    }
}
</style>
