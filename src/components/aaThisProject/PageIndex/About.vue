<template lang="pug">
.block.block-about.p-2.pb-4
    .container
        .row
            .block-about__title.col-6
                .row.block-about__title-row.mb-4
                    h2.txt.txt-secondary Обо мне
        .row
            .block-skills__text.mt-a.mb-a
                text1(:srcText="'Я начал заниматься версткой сайтов будучи еще подростком, для знакомых, друзей и просто ради интереса. Мне нравилось заниматься оптимизацией, рефакторингом, видеть результаты своей работы, выполнять \"невыполнимые\" задачи.'").txt-white.mb-1.mt-2.hover-back

                .line.w-100.mb-1.mt-1
                text1(:srcText="'Я углублялся в верстку сайтов, чувствовал что хочу двигаться в этом направлении. Верстал через Bootstrap, но в дальнейшем затем отказался от него, создав свою, более легкую и понятную версию. Я совершенствовался, перешел на PUG, SCSS, Gulp.'").txt-white.mb-1.hover-back
                .line.w-100.mb-1.mt-1
                text1(:srcText="'Затем я поработал в составе более опытных команд, попробовал Webpack, затем я открыл VUE - то, чего не хватало и заметно упрощало работу с JS и \"сложными сайтами\". И мне пригодился опыт работы в создании приложений.'").txt-white.mb-1.hover-back
</template>

<script>
// import XXX from "@/components/XXX.vue";
import Text1 from "../../UI/Text/Text1";
export default {
  name: "About",
  components: {Text1},
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
//Project Specific
.block{
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    &.hide{
        opacity: 0;
    }
}
</style>
