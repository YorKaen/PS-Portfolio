<template lang="pug">
section.about.about__block.block.hide-scrollbar
    MyTitle(:txtTitle="'О себе'" :visitsCount="$store.state.visitsPageAbout")
    .br
    .block__content
        .block__text.block-text
            .block-text__block1
                .txt.txt-white.hover-back Я начал заниматься версткой сайтов будучи еще подростком, для знакомых, друзей и просто ради интереса. Моей основной специальностью было SEO, создание приложений и игр на Android с помощью C#. Мне нравилось заниматься оптимизацией, рефакторингом, видеть результаты своей работы, выполнять "невыполнимые" задачи.
                //TextTrail(:arraySymbols="symbols")
                .txt.txt-white.hover-back Однажды, мне пришлось углубиться в верстку сайтов, и я почувствовал что хочу двигаться в этом направлении. Я решил полностью окунуться в Web-Development, попробовать себя в фрилансе. Хоть такой вид заработка мне не сильно понравился, по некоторым личным причинам, сам процесс и разные задачи дали понять, что я на верном пути. Занимался версткой с помощью Bootstrap, хоть и в дальнейшем затем отказался от него, создав свою, более легкую версию для лендингов и легких сайтов. Я совершенствовался, перешел на PUG, SCSS, Gulp.
                //TextTrail(:arraySymbols="symbols")
                .txt.txt-white.hover-back Затем я поработал в составе более опытных команд, начал отходить от Jquery к чистому JS коду, попробовал Webpack, и так и не увидел в нем тех удобств, что требовались для наших задач. Однако, затем я открыл VUE - это как раз то, чего мне не хватало в миксинах PUG и заметно упрощало работу с JS и модулями. Благодаря компонентной системе, проекты стали чище, красивее, понятнее а сложные проще. Затем пришли PWA и Vuex, и мне пригодились мои навыки в логике создания приложений.
        .block-avatar
            img(loading="lazy", src="@/assets/img/face3.png", alt="" title="Это мой портрет, обработан мною же в Adobe Photoshop")


</template>

<script>
//import XXX from "@/components/XXX.vue";
//import WordSwitcher from "@/components/Utilities/WordSwitcher";
import TextTrail from "@/components/Utilities/TextTrail";
export default {
  name: "About",
  components: { TextTrail },
  data: () => ({
    symbols: [
      "👨🏻‍💻",
      "💻",
      "👨🏻",
      "👋🏻",
      "🤘🏻",
      "🤟🏻",
      "🐱",
      "⌨️",
      "🎬",
      "🎮",
      "🖱",
      "📱",
      "♉",
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
.block {
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: calc(100vh - 220px);
  padding: 25px;

  &__content {
    display: flex;
    flex-direction: row;
    position: relative;
    .block-avatar {
      flex: 1 1 25%;
      margin-top: 3em;
      position: relative;
      display: none;
      @include breakpoint(lg) {
        display: block;
      }
      img {
        //position: absolute;
          border: 2px solid $primary;
        top: 4em;
        right: -50px;
        width: 200px;
        border-radius: 22px;
        @include breakpoint(lg) {
          position: sticky;
          top: 4em;
          width: 90%;
          margin-left: auto;
        }
      }
    }
    .block-text {
      flex: 1 1 75%;
      //max-width: 75%;
      margin-right: 1em;
      &__block1 {
        font-size: em(16);
        margin-bottom: 1em;
        flex-wrap: wrap;
        @include breakpoint(md) {
          font-size: em(18);
        }
        @include breakpoint(lg) {
          font-size: em(20);
        }
      }
    }
  }
}
</style>
