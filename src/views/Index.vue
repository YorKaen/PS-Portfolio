<template lang="pug">
.index
    .index__bg#bg
    .index__controls
        .controls.d-flex
            router-link(to="/Examples").link.p-2.txt-primary Примеры работ
            button.item.link(@click="openWindow('https://t.me/purplesphynx')").d-flex.flex-alight
                .txt-white @purplesphynx
    .index__content
        .container.fill
            .page.index-page
                .mySwiper.swiper
                    .swiper-pagination
                    .swiper-wrapper
                        .swiper-slide.fill.bg-dark
                            .slide.graph-blocks.slide__graph-blocks.pl-2
                                .gb-row.d-flex.row
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                .gb-row.d-flex.row
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                .gb-row.d-flex.row
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                .graph-blocks__title.pl-4.mt-2.mb-4.anim-to-pos
                                    h1
                                        text-mouseover-change(:textOld="'Ёлкин Александр'" :textNew="'Purple Sphynx'")
                                    h3
                                        text-mouseover-change(:textOld="'Фронтенд Разработчик'" :textNew="'FrontEnd Developer'")
                                .gb-row.d-flex.row
                                   .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                   .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                   .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                .gb-row.d-flex.row
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                    .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                .gb-row.d-flex.row
                                   .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                   .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                   .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                                   .gb.mr-2.mb-2(:style="GBlockStyle()").anim-to-pos
                        .swiper-slide.fill.bg-dark.pl-2
                            .slide.slide__skills.skills.h-100.d-flex.flex-col
                                .skills__title.mb-a.mt-a
                                    h2.txt-white Мои Навыки
                                .skills__content.mb-a
                                    .item.txt-white.d-flex.mb-1
                                        .pre-block(:style="PBlockStyle()")
                                        .name.fw-b HTML5
                                        .symbol
                                        .tool.fw-b.op-60 Адаптивная и "резиновая" верстка, PUG
                                            span.txt-gray  + mixins
                                    .item.txt-white.d-flex.mb-1
                                        .pre-block(:style="PBlockStyle()")
                                        .name.fw-b CSS5
                                        .symbol
                                        .tool.fw-b.op-60 SCSS(
                                            span.txt-gray dart
                                            span ), PostCSS
                                    .item.txt-white.d-flex.mb-1
                                        .pre-block(:style="PBlockStyle()")
                                        .name.fw-b.txt-yellow JS
                                        .symbol
                                        .tool.fw-b.op-60 Vanilla JS, jQuery, Axios
                                    .item.txt-white.d-flex.mb-1
                                        .pre-block(:style="PBlockStyle()")
                                        .name.fw-b.txt-secondary Vue
                                        .symbol
                                        .tool.fw-b.op-60 Vue 2, Vue 3, PWA, SPA, Vuex, Vue Router,
                                            span.txt-gray  + модули и аналоги
                                    .item.txt-white.d-flex.mb-1
                                        .pre-block(:style="PBlockStyle()")
                                        .name.fw-b.txt-secondary NUXT
                                        .symbol
                                        .tool.fw-b.op-60 Nuxt 3, Nuxt 2, Nuxt Bridge
                                            span.txt-gray  + модули
                                    .item.txt-white.d-flex.mb-1
                                        .pre-block(:style="PBlockStyle()")
                                        .name.fw-b.txt-primary Сборщики
                                        .symbol
                                        .tool.fw-b.op-60 Gulp, Webpack, Vue-CLI, Vite
                                    .item.txt-white.d-flex.mb-1
                                        .pre-block(:style="PBlockStyle()")
                                        .name.fw-b.txt-primary Прочее
                                        .symbol
                                        .tool.fw-b.op-60 Webstorm, Visual Studio Code, Figma, Git (Git Actions), Adobe Photoshop, Affinity Designer
                        .swiper-slide.fill.bg-dark.pl-2
                            .slide.slide__about.about.h-100.d-flex.flex-col
                                .about__title.mb-a.mt-a
                                    h2.txt-white Обо Мне
                                .about__content.mb-a
                                    .txt.txt-1.txt-white.mb-1.mt-2.hover-ltr-fill
                                        span Я начал заниматься версткой сайтов будучи еще подростком, для знакомых, друзей и просто ради интереса.
                                        span  Мне нравилось заниматься
                                        span.onhover-primary(:style="getRandomDelay()")  оптимизацией
                                        span ,
                                        span.onhover-secondary(:style="getRandomDelay()")  рефакторингом
                                        span , видеть результаты своей работы, выполнять "невыполнимые" задачи.
                                    .line.w-100.mb-1.mt-1
                                    .txt.txt-1.txt-white.mb-1.mt-2.hover-ltr-fill
                                        span Я углублялся в верстку сайтов, чувствовал что хочу двигаться в этом направлении. Верстал через
                                        span.onhover-blue(:style="getRandomDelay()")  Bootstrap
                                        span , но в дальнейшем затем отказался от него, создав свой набор стилей и миксинов. Я совершенствовался, перешел на
                                        span.onhover-primary(:style="getRandomDelay()")  PUG
                                        span ,
                                        span.onhover-secondary(:style="getRandomDelay()")  SCSS
                                        span ,
                                        span.onhover-primary(:style="getRandomDelay()")  Gulp.
                                    .line.w-100.mb-1.mt-1
                                    .txt.txt-1.txt-white.mb-1.mt-2.hover-ltr-fill
                                        span Затем я поработал в составе более опытных команд, начал отходить от Jquery к чистому JS коду, попробовал Webpack, и так и не увидел в нем тех удобств, что требовались для наших задач. Однако, затем я открыл
                                        span.onhover-secondary(:style="getRandomDelay()")  VUE
                                        span  - это как раз то, чего мне не хватало в миксинах PUG и заметно упрощало работу с JS и модулями. Благодаря компонентной системе, проекты стали чище, красивее, понятнее а сложные проще. Затем пришли PWA и Vuex, и мне пригодились мои навыки в логике создания приложений.


</template>

<script>
// import XXX from "@/components/XXX.vue";
import Swiper, { Navigation, Pagination, EffectFade, Mousewheel } from "swiper";
Swiper.use([Navigation, Pagination, EffectFade, Mousewheel]);
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

import TextMouseoverChange from "../components/UI/Text/TextMouseoverChange";

export default {
  name: "Index",
  components: { TextMouseoverChange, Swiper },
  props: {},
  data: () => ({
    colorsArray: ["#22b7a0", "#f72585", "#2ead69", "#b5179e"],
  }),
  created() {},
  mounted() {
    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 0,
      slidesPerView: 1,
      direction: "vertical",
      mousewheel: true,
      threshold: 30,
      resistanceRatio: 0,
      effect: "fade",
      watchSlidesProgress: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  },
  computed: {},
  methods: {
    openWindow(url) {
      window.open(url, "_blank");
    },
    getRandomDelay() {
      return { transitionDuration: Math.random() * 2 + "s" };
    },
    bgGrad() {
      let gradient = "linear-gradient(115deg, ";
      let color1 =
        this.colorsArray[(Math.random() * this.colorsArray.length) | 0];
      let color2 =
        this.colorsArray[(Math.random() * this.colorsArray.length) | 0];
      return gradient + color1 + ` 20%, ` + color2 + ` 95% )`;
    },
    shapeForm() {
      return Math.floor(Math.random() * 10 + 1) + "em";
    },
    GBlockStyle() {
      return {
        background: this.bgGrad(),
        width: this.shapeForm(),
      };
    },
    PBlockStyle() {
      return {
        background: this.bgGrad(),
      };
    },
  },
};
</script>

<style lang="scss">
.txt-yellow {
  color: #febf32;
}
//Project Specific

.index {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  &__content {
    height: 100vh;
  }
  &__controls {
    position: fixed;
    background-color: $dark-1;
    top: 0;
    width: 100vw;
    height: 60px;
    padding-top: 6px;
    z-index: 100;
    border-bottom: 2px solid $secondary;

    @include breakpoint(md) {
      border-left: 2px solid $secondary;
      border-bottom: none;
      right: 0;
      height: 100vh;
      width: 100%;
      max-width: 80px;
    }
    .controls {
      justify-content: space-evenly;
      @include breakpoint(md) {
        padding-left: 40px;
        transform: rotate(90deg);
        justify-content: flex-start;
      }
      .link {
        white-space: nowrap;
        font-weight: bold;
        border: 2px solid transparent;
        transition: all 0.3s ease-in-out;
        &:hover {
          border-left-color: $primary;
          border-right-color: $primary;
          text-shadow: 2px 4px 2px black;
        }
      }
    }
  }
  &-page {
    height: 100vh;
    .gb {
      height: 1em;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
      cursor: default;
      &:hover {
        box-shadow: none;
      }
    }
    .hover-ltr-fill {
      & > [class*="onhover-"] {
        transition: color 0.4s ease-in-out;
        cursor: text;
      }
      &:hover {
        .onhover-primary {
          color: $primary;
        }
        .onhover-secondary {
          color: $secondary;
        }
        .onhover-blue {
          color: #5f8cd6;
        }
        .onhover-red {
          color: #d01a55;
        }
        .onhover-yellow {
          color: #e5a813;
        }
      }
    }
    .swiper {
      width: 100%;
      height: 100%;
      background-color: white;
      .swiper-pagination-progressbar {
        background: transparent;
      }
      .swiper-pagination-progressbar-fill {
        background: $primary;
      }
      .swiper-wrapper {
      }
      .swiper-slide {
        display: flex;
        cursor: grab;
        .slide {
          margin: auto 0;
          cursor: default;
          &.graph-blocks {
            .mouseover {
              text-align: left;
            }
          }
          .gb-row {
            .gb {
              &:nth-child(1) {
                animation-delay: 0.2s;
              }
              &:nth-child(2) {
                animation-delay: 0.3s;
              }
              &:nth-child(3) {
                animation-delay: 0.4s;
              }
              &:nth-child(4) {
                animation-delay: 0.5s;
              }
            }
          }
          .skills {
            &__content {
              .item {
                font-size: em(20);
                cursor: text;
                .pre-block {
                  margin-top: 4px !important;
                }
                @include breakpoint(md) {
                  &:hover {
                    .pre-block {
                      width: 3em;
                    }
                  }
                }
                .pre-block {
                  height: 1em;
                  margin: auto 1em auto 0;
                  width: 0;
                  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
                  transition: width 0.3s ease-in-out;
                }
                .symbol {
                  width: 1em;
                  height: 1em;
                  flex: 0 0 auto;
                  border-radius: 100%;
                  background: $secondary;
                  margin: 6px 1em auto;
                }
              }
            }
          }
          &.about {
            padding-top: 5em;
            @include breakpoint(md) {
              padding-top: 0;
            }
          }
          .about {
            &__content {
              padding-right: 3em;
            }
          }
        }
      }
    }
  }
}

.anim-to-pos {
  animation: toposition 2s ease-in-out forwards;
  animation-direction: normal;
}

@keyframes toposition {
  0% {
    transform: translate(50vw, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
