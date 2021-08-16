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
            .block-text__contacts
                my-contacts
            .block-text__block2
                br
                .txt.txt-white.hover-back Этот сайт целиком создан при помощи VUE, VUE-CLI, VUEX, PUG, и также является PWA.
                br
                .txt.txt-white.hover-back
                    .txt PWA
                    .txt Поддерживается установка на ПК, Android, iOS, поддержка оффлайн-просмотра, проверка на плохое\отсутствие интернет соединения, есть предложение установки. Куки не используются, но используется LocalStorage для пропуска интро и отслеживания просмотров. Есть перехват "неправильных" ссылок через Router.
                br
                .txt.txt-white.hover-back
                    .txt Верстка
                    .txt Верстка полностью адаптивная, код минимизированный, изображения оптимизированны. Даже корректно работающее EM скалирование. Тяжелые библиотеки, вроде JQuery, Bootstrap или Materialize, не использовались. Никакие дополнительные модули для отображения, также не использовались (все сделано своими руками, хотя в реальной работе почему бы и нет, смотря какие цели ставятся). Никакие элементы не выпирают, полоса прокрутки убрана на некоторых страницах.
                br
                .txt.txt-white.hover-back
                    .txt Дизайн
                    .txt Целью сайта не является демонстрация чего-то невообразимо крутого в плане красоты внешнего вида. Простенький дизайн, уютные цвета, набросок в Фигме за 15 минут.
                br

                //.txt.txt-white.hover-back
                //-.txt.txt-white.hover-back Вы можете переключать дополнительные опции просмотра в меню в нижнем углу.
</template>

<script>
//import XXX from "@/components/XXX.vue";
import WordSwitcher from "@/components/Utilities/WordSwitcher";
import MyContacts from "../components/Utilities/MyContacts";
export default {
  name: "Welcome",
  components: {MyContacts, WordSwitcher },
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
