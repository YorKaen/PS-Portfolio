<template lang="pug">
.block.block-skills.p-2.pb-4
    .container
        .row
            .block-skills__title.col-6
                .row.block-skills__title-row.mb-4
                    h2.txt.txt-secondary Мои навыки
        .row
            .block-skills__text.mt-a.mb-a
                text1(:srcText="'Для улучшения работы использую Pug, Scss(Dart), PostCss(Для поддержки браузеров и оптимизации кода) и Vanilla(без библиотек) JS.'").txt-white.mb-1.mt-2.hover-back
                .line.w-100.mb-1.mt-1
                text1(:srcText="'Для стилей предпочитаю использовать свои заготовки, но удобства участников могу использовать любую другую, от Bootstrap до Tailwind.'").txt-white.mb-1.hover-back
                .line.w-100.mb-1.mt-1
                text1(:srcText="'Предпочитаю Vue 3, имею опыт работы с Vuex, Nuxt 2, Vue-CLI, Vue Router, Vue 2. Опыт создания PWA'").txt-white.mb-1.hover-back
                .line.w-100.mb-1.mt-1
                text1(:srcText="'Из програм работаю с Figma, Git (опыт работы с Git Actions), Webstorm, Visual Studio Code, Adobe Photoshop, Affinity Designer и прочими.'").hover-back.txt-white.mb-1


</template>

<script>
// import XXX from "@/components/XXX.vue";
import Text1 from "../../UI/Text/Text1";
export default {
  name: "Skills",
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
