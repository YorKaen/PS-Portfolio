<template lang="pug">
.block.block-about.p-2.pb-4
    .container
        .row
            .block-about__title.col-6
                .row.block-about__title-row.mb-4
                    h2.txt.txt-secondary Обо мне
        .row
            .block-skills__text.mt-a.mb-a
                .txt.txt-1.txt-white.mb-1.mt-2.hover-back
                    span Я начал заниматься версткой сайтов будучи еще подростком, для знакомых, друзей и просто ради интереса.
                    span  Мне нравилось заниматься
                    span.onhover-primary(:style="getRandomDelay()")  оптимизацией
                    span ,
                    span.onhover-secondary(:style="getRandomDelay()")  рефакторингом
                    span , видеть результаты своей работы, выполнять "невыполнимые" задачи
                .line.w-100.mb-1.mt-1
                .txt.txt-1.txt-white.mb-1.mt-2.hover-back
                    span Я углублялся в верстку сайтов, чувствовал что хочу двигаться в этом направлении. Верстал через
                    span.onhover-blue(:style="getRandomDelay()")  Bootstrap
                    span , но в дальнейшем затем отказался от него, создав свою, более легкую и понятную версию. Я совершенствовался, перешел на
                    span.onhover-primary(:style="getRandomDelay()")  PUG
                    span ,
                    span.onhover-secondary(:style="getRandomDelay()")  SCSS
                    span ,
                    span.onhover-primary(:style="getRandomDelay()")  Gulp.
                .line.w-100.mb-1.mt-1
                .txt.txt-1.txt-white.mb-1.mt-2.hover-back
                    span Затем я поработал в составе более опытных команд, попробовал Webpack, затем я открыл
                    span.onhover-secondary(:style="getRandomDelay()")  VUE
                    span  - то, чего не хватало и заметно упрощало работу с JS и "сложными сайтами". И мне пригодился опыт работы в создании приложений.

</template>

<script>
// import XXX from "@/components/XXX.vue";

export default {
  name: "About",
  components: {},
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {
      getRandomDelay() {
          return { transitionDuration:(Math.random() * 2) + 's' }
      },
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
.hover-back{
    &>[class*="onhover-"] {
        transition: color 0.4s ease-in-out;
    }
    &:hover{
        .onhover-primary{
            color: $primary;
        }
        .onhover-secondary{
            color: $secondary;
        }
        .onhover-blue{
            color: rgba(95, 140, 214, 0.73);
        }
    }
}

.block{
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    &.hide{
        opacity: 0;
    }
}
</style>
