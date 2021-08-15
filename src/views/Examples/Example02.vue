<template lang="pug">
.example.example-01.container-fluid.bg-white
    nav
        .container-fluid
            .nav.flex.flex-row.flex-between
                my-logo
    section.block.block-01#block-01
        .container
            header.header
                h1.txt.title.flex.flex-column
                    span Типичный сайт
                    span на Bootstrap
                    .subtitle.d-none.d-flex-lg С обязательным шейпом справа
    section.block.block-02.bg-contrast#block-02
        .container
            .block-02__title
                h3.txt.title Секция из 4х элементов
                .subtitle.mb-2 Все элементы адаптивны на разных разрешениях
            .block-02__content


    section.block.block-03
        .container
            .block-03__title

            .block-03__content

    section.block.block-04
        .container
            .block-04__title

            .block-04__content



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
