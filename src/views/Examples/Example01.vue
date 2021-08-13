<template lang="pug">
.example.example-01.container-fluid.bg-white
    nav
        .container-fluid
            .nav.flex.flex-row.flex-between
                my-logo
                basic-burger
                    a(href="#block-01").burger-link Почему выбирают нас?
                    a(href="#block-02").burger-link Почему выбирают?
                    a(href="#block-03").burger-link Почему?
                    a(href="#block-04").burger-link Нас?
                    a(href="#block-05").burger-link Почему?
    section.block.block-01#block-01
        .container
            header.header
                h1.txt.title.flex.flex-column
                    span Типичный сайт
                    span на Bootstrap
                    .subtitle.d-none.d-flex-lg С обязательным шейпом справа
                .shape.header__shape.d-none.d-flex-lg
                    <svg viewBox="0 0 200 200" fill="#4cc9f0" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.1,-57.6C45.6,-47.8,54.4,-38.3,59.7,-27.1C65.1,-16,66.9,-3,67.1,11.1C67.3,25.2,65.9,40.5,58.9,54.2C51.9,67.9,39.5,79.9,25.7,80.8C12,81.7,-3,71.5,-19.9,66.9C-36.8,62.4,-55.6,63.4,-65.2,55C-74.8,46.6,-75.3,28.7,-77.4,11.4C-79.5,-6,-83.4,-22.9,-76.9,-34.3C-70.4,-45.7,-53.7,-51.6,-39.2,-59.6C-24.7,-67.6,-12.3,-77.6,0,-77.6C12.3,-77.5,24.5,-67.4,35.1,-57.6Z" transform="translate(100 100)" />
                        </svg>
    section.block.block-02.bg-contrast#block-02
        .container
            .block-02__title
                h3.txt.title Секция из 4х элементов
                .subtitle.mb-2 Все элементы адаптивны на разных разрешениях
            .block-02__content
                .block-02__wrapper.d-flex.flex-row.flex-between.flex-wrap
                    FluidBlockText(v-for="item in dataFluidText02" :key="item.id" :fluidblock="item.fluidblock" class="block-02__item d-flex")
    section.block.block-03
        .container
            .block-03__title
                h3.txt.title Секция из 3х элементов
            .block-03__content
                .block-03__wrapper.d-flex.flex-row.flex-between.flex-wrap
                    FluidBlockText(v-for="item in dataFluidText03" :key="item.id" :fluidblock="item.fluidblock" class="block-03__item d-flex")
    section.block.block-04
        .container
            .block-04__title
                h3.txt.title Интерсекция
            .block-04__content
                .block-04__wrapper.d-flex.flex-row.bg-contrast
                    .block-04__text
                        .txt.fw-b.title А вы знали?
                        .txt.subtitle Практически все сайты на бутстрапе выглядят примерно одинаково. У популярности есть своя цена...
                    .block-04__img.d-none.d-flex-md.flex-center
                        image-lazy(:imgPath="'ex01_block04.png'")


</template>

<script>
//import XXX from "@/components/XXX.vue";
import FluidBlockText from "@/components/Utilities/FluidBlockText";
import BasicBurger from "../../components/BasicBurger";

export default {
  name: "Example01",
  components: { BasicBurger, FluidBlockText },
  data: () => ({
    dataFluidText02: [
      {
        fluidblock: {
          txtLabel: "Lorem ipsum dolor sit amet",
          txtText: "Nunc consequat ut velit eget feugiat. ",
        },
      },
      {
        fluidblock: {
          txtLabel: "Lorem ipsum dolor sit amet 2",
          txtText: "Consectetur adipiscing elit.",
        },
      },
      {
        fluidblock: {
          txtLabel: "Lorem ipsum dolor sit amet 3",
          txtText: "Vivamus posuere, arcu ut tempor condimentum.",
        },
      },
      {
        fluidblock: {
          txtLabel: "Lorem ipsum dolor sit amet 4",
          txtText: "Nam ornare diam turpis.",
        },
      },
    ],
    dataFluidText03: [
      {
        fluidblock: {
          txtLabel: "Lorem ipsum dolor sit amet",
          txtText: "Nunc consequat ut velit eget feugiat. ",
        },
      },
      {
        fluidblock: {
          txtLabel: "Lorem ipsum dolor sit amet 2",
          txtText: "Consectetur adipiscing elit.",
        },
      },
      {
        fluidblock: {
          txtLabel: "Lorem ipsum dolor sit amet 3",
          txtText: "Vivamus posuere, arcu ut tempor condimentum.",
        },
      },
    ],
  }),
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
.burger-link {
  padding: 5px 15px 5px 25px;
  font-size: em(18);
  transition: all 0.3s ease-in-out;
  &:nth-child(1) {
    padding-top: 20px;
  }
  &:last-child {
    padding-bottom: 20px;
  }
  &:hover {
    text-decoration: underline;
  }
}
section {
  padding-top: 35px;
  padding-bottom: 35px;
}
.example {
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: calc(100vh - 220px);
  .nav {
  }

  .header {
    position: relative;
    height: 30vh;
    display: flex;
    flex-direction: row;
    @include breakpoint(lg) {
      height: 60vh;
      margin-left: 150px;
    }
    h1 {
      flex: 1 1 34%;
      margin-top: auto;
      margin-bottom: auto;
      text-align: center;
      white-space: nowrap;
      .subtitle {
        font-size: 16px;
        font-weight: normal;
        margin-top: 1em;
      }

      @include breakpoint(lg) {
        text-align: left;
      }
    }
    &__shape {
      z-index: 0;
      flex: 1 1 70%;
      margin-left: 60px;
    }
  }
  nav {
    background-color: #4cc9f0;
  }
  .nav {
    padding: 25px;
    .logo {
      cursor: pointer;
    }
  }
  .container {
    padding: 25px;
  }
  .bg-contrast {
    background-color: #f9fafe;
  }
  h1 {
    font-weight: bold;
  }
  .block-01 {
  }
  .block-02 {
    .subtitle {
      text-align: center;
      @include breakpoint(lg) {
        text-align: left;
      }
    }
    &__item {
      width: 100%;
      max-width: 100%;
      margin-bottom: 30px;
      @include breakpoint(md) {
        max-width: 48%;
      }
      @include breakpoint(xxl) {
        max-width: 24%;
      }
    }
  }
  .block-03 {
    &__item {
      width: 100%;
      max-width: 100%;
      margin-bottom: 30px;
      @include breakpoint(lg) {
        max-width: 30%;
      }
      @include breakpoint(xl) {
      }
    }
  }
  .block-04 {
    &__text {
      margin-right: 15px;
      .title {
        font-size: em(32);
      }
      .subtitle {
        font-size: em(24);
      }
    }
    &__wrapper {
      padding: 25px;
      border: 2px solid #4cc9f0;
      border-radius: 22px;
    }
  }
}
</style>
