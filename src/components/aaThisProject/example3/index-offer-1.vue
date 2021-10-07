<template lang="pug">
.offer
  .container-full.bg-primary
    .container
      .offer__wrapper
        .offer__img.show-at-lg
            image-lazy(:srcImg="'creditio/offer-1.png'")
        .offer__text
          .offer__title.title.txt-white Оформите выгодный кредит прямо сейчас
          ul.offer__list
            li.offer__list-item Специальные условия от более чем 150 банков
            li.offer__list-item Конфиденциальность и безопасность
            li.offer__list-item Услуги сервиса бесплатны
            a(href="#block4").link
              button.btn.btn-secondary.p-2.bg-secondary.r-10.w-100
                span.txt-white.fw-m Получить кредит

</template>

<script>
//import Form from "@/components/Utilities/form-default.vue";

import TitleInBlock from "./title-in-block";
import ImageLazy from "../../UI/Images/ImageLazy";
export default {
  name: "Offer",
  components: {
    ImageLazy,
    TitleInBlock,
  },
  data: () => ({}),
  mounted() {},
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";
.offer {
  &__wrapper {
    padding: 35px 15px 30px 15px;
    @include breakpoint(md) {
      padding: 110px 15px 120px 15px;
    }
    @include breakpoint(lg) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  &__img {
    @include breakpoint(lg) {
    }
  }
  &__title {
    margin-bottom: 20px;
    text-align: center;
    font-weight: 600;
    font-size: em(18);
    //padding-top: 35px;
    @include breakpoint(lg) {
      font-size: em(20);
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    @include breakpoint(lg) {
      padding-left: 30px;
      margin-top: auto;
      margin-bottom: auto;
    }
    @include breakpoint(xl) {
      padding-left: 50px;
    }
  }
  &__list-item {
    color: white;
    position: relative;
    margin-left: 20px;
    margin-bottom: 15px;
    @include breakpoint(md) {
      text-align: center;
      margin-left: 0px;
    }
    @include breakpoint(lg) {
      text-align: left;
      margin-left: 20px;
    }
    &::before {
      content: "";
      position: absolute;
      border-radius: 100%;
      top: 0.5em;
      left: -18px;
      width: 10px;
      height: 10px;
      background-color: $secondary;
      @include breakpoint(md) {
        background-color: transparent;
      }
      @include breakpoint(lg) {
        background-color: $secondary;
      }
    }
  }
  .link {
    margin-top: 20px;
    width: 100%;
    @include breakpoint(md) {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      max-width: 280px;
      margin-left: auto;
      margin-right: auto;
    }
    @include breakpoint(lg) {
      margin-left: 0;
    }
  }
}
</style>
