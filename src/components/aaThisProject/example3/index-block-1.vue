<template lang="pug">
.block-1
  .container-full.bg-primary
    .container
      .block-1__content
        .block-1__swiper
            swiper-fade
  .block-1__footer
    .container
      .d-grid.grid-md-2.grid-lg-4.gap-20.mt-4
        fluid-block-text(v-for="item in dataItems" :fluidblock="item" ).creditio-1__item

</template>

<script>
//import XXX from "@/components/XXX.vue";
import dataJson from '../../json/crblock.json';
import ImageLazy from "../../UI/Images/ImageLazy";
import FluidBlockText from "../../Elements/FluidBlock/FluidBlockText";
import SwiperFade from "../../Elements/Swiper/SwiperFade";

export default {
  name: "Block_1",
  components: {
    SwiperFade,
    FluidBlockText,
    ImageLazy,
  },
  data: () => ({
    dataItems: dataJson,
    sliderInfo: [
      {
        slideTitle: "Кредит наличными для вашего бизнеса",
        slideValue: "До 15 млн. руб",
        slideTxt:
          "Увеличьте прибыль, запустив новый бизнес или развивая существующее предприятие",
        slideImgName: "creditio/block-1-1.png",
        id: 1,
      },
      {
        slideTitle: "Кредит наличными на автомобиль",
        slideValue: "До 3 млн. руб",
        slideTxt:
          "Выбирайте сами какой покупать автомобиль — новый или с пробегом",
        slideImgName: "creditio/block-1-2.png",
        id: 2,
      },
      {
        slideTitle: "Кредит наличными на ремонт и строительство",
        slideValue: "До 5 млн. руб",
        slideTxt: "Не откладывайте планы — улучшайте условия жизни уже сейчас",
        slideImgName: "creditio/block-1-3.png",
        id: 3,
      },
      {
        slideTitle: "Кредит наличными под залог недвижимости",
        slideValue: "До 25 млн. руб",
        slideTxt:
          "Крупная сумма на длительный срок для решения серьезных задач",
        slideImgName: "creditio/block-1-4.png",
        id: 4,
      },
      {
        slideTitle: "Кредит наличными на инвестиции",
        slideValue: "До 10 млн. руб",
        slideTxt:
          "Увеличьте собственный капитал благодаря вложениям в акции, облигации, золото и серебро",
        slideImgName: "creditio/block-1-5.png",
        id: 5,
      },
      {
        slideTitle: "Кредит наличными на путешествие и отдых",
        slideValue: "До 2 млн. руб",
        slideTxt:
          "Посещайте новые страны и получайте новые впечатления сейчас, а платите потом",
        slideImgName: "creditio/block-1-6.png",
        id: 6,
      },
    ],
  }),
  methods: {},
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";

.d-grid {
  @include breakpoint(md) {
  }
  @include breakpoint(lg) {
  }
}
</style>
