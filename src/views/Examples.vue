<template lang="pug">
section.examples.examples__block.block
    MyTitle(:txtTitle="'Примеры компонентов'")
    transition(name="hide")
        .block__text(v-if="isLinksActive")
            .txt.txt-white.examples__subtitle К сожалению, мои лучшие сайты защищены NDA, но, надеюсь этот сайт вас впечатил. Здесь, я составил несколько экспериментальных ссылок для ознакомления.
    transition(name="hide")
        .block__links.links.d-grid.grid-md-3.gap-30(v-if="$store.state.showExamples")
             router-link(to="/examples/example01" class="item" @click="$store.commit('EXAMPLES_HIDE_LINKS')")
                .item__top
                    .item__showtxt
                        .txt.txt-white.center-x-absolute Открыть
                    .item__img
                        img(loading="lazy", src="@/assets/img/svgs/LogoExample01.svg", alt="").center-x-margin
                .item__bot
                    .txt.txt-white.item__title Бутстрап
                    .txt.txt-white.item__subtitle Типичная Бутстрап раскладка, но без бутстрапа, через мою библиотеку
             router-link(to="/examples/example02" class="item" @click="$store.commit('EXAMPLES_HIDE_LINKS')")
                 .item__top
                     .item__showtxt
                         .txt.txt-white.center-x-absolute Открыть
                     .item__img
                         img(loading="lazy", src="@/assets/img/LogoExample02.png", alt="").center-x-margin
                 .item__bot
                     .txt.txt-white.item__title БиткоинТрекер
                     .txt.txt-white.item__subtitle Эксперимент по отслеживанию криптовалют и построению графика
        .block__return(v-else)
            router-link(to="/examples"  @click="$store.commit('EXAMPLES_SHOW_LINKS')").flex.flex-row
                .svg
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.84 6.92V8.92H3.84L9.34 14.42L7.92 15.84L0 7.92L7.92 0L9.34 1.42L3.84 6.92H15.84Z" />
                        </svg>
                .txt.txt-white  Вернутся
    .block__content(v-if="$store.state.showExampleContent")
        router-view
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "Examples",
  components: {},
  data: () => ({
    isLinksActive: true,
  }),
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
.examples {
  &.block {
    padding: 0;
  }
  .title {
    text-align: center;
    padding-left: 25px;
    padding-right: 25px;
    @include breakpoint(md) {
      text-align: left;
    }
  }
  &__subtitle {
    padding: 5px 25px;
  }
}
.block {
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: calc(100vh - 220px);
  padding: 25px;
  &__links {
    padding: 25px;
  }
  &__return {
    margin-bottom: 2em;
    padding-left: 25px;
    padding-right: 85%;
    .router-link-active {
      padding: 8px 0px;
      font-size: 22px;
      .svg {
        margin-right: 8px;
        transition: transform 0.3s ease-in-out;
        transform: rotate(180deg);
      }
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: translateY(-4px);
        .svg {
          transform: rotate(-00deg);
        }
      }
    }
  }
  .item {
    border: 2px solid white;
    width: 100%;
    position: relative;
    overflow: hidden;

    &:hover {
      .item__showtxt {
        height: 100%;
      }
    }
    &__showtxt {
      transition: height 0.3s ease-in-out;
      height: 00%;
      background-color: $dark-3;
      width: 100%;
      position: absolute;
      bottom: 0;
      .txt {
        top: 40%;
        font-size: em(32);
        font-weight: bold;
      }
    }

    &__img {
      width: 100%;
      padding: 15px;
      img {
        max-width: 150px;
      }
    }
    &__top {
      width: 100%;
      position: relative;
      overflow: hidden;
    }
    &__bot {
      width: 100%;
      padding: 1em;
    }
    &__title {
      font-size: em(24);
      text-align: center;
    }
    &__subtitle {
      font-size: em(18);
    }
  }
  &__content {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .block__text {
    font-size: em(16);
    margin-bottom: 2em;
    text-align: center;
  }
}
</style>
