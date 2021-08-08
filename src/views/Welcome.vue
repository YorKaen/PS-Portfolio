<template lang="pug">
section.welcome.welcome__block.block.hide-scrollbar
    MyTitle(:txtTitle="'Добро пожаловать!'" :visitsCount="$store.state.visitsPageWelcome")
    .br
    .block__content
        .block__text.block-text
            .block-text__block1.flex-row
                .txt.txt-white.mg-r Я
                .flex-no-wrap
                    WordSwitcher( v-for="item in nameWords" :key="item.id" :fromCh="item.fromCh" :toCh="item.toCh" class="txt txt-white")
                .txt.txt-white.mg-r.show-at-md //
                .flex-no-wrap
                    WordSwitcher( v-for="item in jobWords" :key="item.id" :fromCh="item.fromCh" :toCh="item.toCh" class="txt txt-white")
            .block-text__block2
                br
                .txt.txt-white.hover-back Этот сайт целиком создан при помощи VUE, VUE-CLI, VUEX, PUG, и также является PWA.
                br
                .txt.txt-white.hover-back Поддерживается установка на ПК, Android, iOS, поддержка оффлайн-просмотра, проверка на плохое\отсутствие интернет соединения. Верстка полностью адаптивная, код минимизированный, изображения оптимизированны, есть перехват "неверных" ссылок. Тяжелые библиотеки, вроде JQuery, Bootstrap или Materialize, не использовались.
                br
                .txt.txt-white.hover-back Вы можете переключать дополнительные опции просмотра в меню в нижнем углу.
            //.block-avatar
              //img(loading="lazy", src="@/assets/img/face3.png", alt="" title="Это мой портрет, обработан мною же в Adobe Photoshop")
</template>

<script>
//import XXX from "@/components/XXX.vue";
import WordSwitcher from "@/components/Utilities/WordSwitcher";
export default {
  name: "Welcome",
  components: { WordSwitcher },
  data: () => ({
    nameWords: [
      {
        fromCh: "Ёл",
        toCh: "Pur",
      },
      {
        fromCh: "кин",
        toCh: "ple",
      },
      {
        fromCh: " ",
        toCh: ".",
      },
      {
        fromCh: " Ал",
        toCh: "Sp",
      },
      {
        fromCh: "екс",
        toCh: "hy",
      },
      {
        fromCh: "ан",
        toCh: "n",
      },
      {
        fromCh: "др ",
        toCh: "x ",
      },
      {
        fromCh: "\xa0",
        toCh: "\xa0",
      },
    ],
    jobWords: [
      {
        fromCh: "Фронт",
        toCh: "Front",
      },

      {
        fromCh: "енд",
        toCh: "end",
      },
      {
        fromCh: " ",
        toCh: " ",
      },
      {
        fromCh: " Разра",
        toCh: " Deve",
      },
      {
        fromCh: "ботчик",
        toCh: "loper",
      },
    ],
  }),
  created() {},
  mounted() {
    this.$store.commit("INCREMENT_WELCOME");
  },
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";

.mg-r {
  margin-right: 0.5em;
}
.mg-l {
  margin-left: 0.5em;
}
.block {
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: calc(100vh - 220px);
  padding: 25px;

  &__content {
    display: flex;
    flex-direction: row;
    position: relative;

    .block-text {
      flex: 1 1 75%;
      //max-width: 75%;
      margin-right: 1em;
      &__block1 {
        font-size: em(20);
        margin-bottom: 1em;
        flex-wrap: wrap;
        @include breakpoint(md) {
          font-size: em(24);
        }
      }
      &__block2 {
        font-size: em(20);
      }
    }

  }
}
</style>
