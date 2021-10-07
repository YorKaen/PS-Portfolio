<template lang="pug">
.block.block-skills.p-2.pb-4
    .container
        .row
            .block-skills__title.col-6
                .row.block-skills__title-row.mb-4
                    h2.txt.txt-secondary Мои навыки
        .row
            .block-skills__text.mt-a.mb-a
                .txt.txt-1.txt-white.mb-1.mt-2.hover-back
                    span Для улучшения работы использую
                    span.onhover-primary(:style="getRandomDelay()")  PUG
                    span ,
                    span.onhover-secondary(:style="getRandomDelay()")  SCSS
                    span (Dart),
                    span.onhover-red(:style="getRandomDelay()")  PostCss
                    span  (Для поддержки браузеров и оптимизации кода) и
                    span.onhover-yellow(:style="getRandomDelay()")  Vanilla JS
                    span  .
                .line.w-100.mb-1.mt-1
                .txt.txt-1.txt-white.mb-1.mt-2.hover-back
                    span Для стилей предпочитаю использовать свои заготовки, но удобства участников могу использовать любую другую, от
                    span.onhover-blue(:style="getRandomDelay()")  Bootstrap
                    span  до
                    span.onhover-red(:style="getRandomDelay()")  Tailwind
                .line.w-100.mb-1.mt-1
                .txt.txt-1.txt-white.mb-1.mt-2.hover-back
                    span Предпочитаю
                    span.onhover-secondary(:style="getRandomDelay()")  Vue 3
                    span  , имею опыт работы с
                    span.onhover-secondary(:style="getRandomDelay()")  Vuex, Nuxt 2, Vue-CLI, Vue Router, Vue 2
                    span  . Опыт создания
                    span.onhover-primary(:style="getRandomDelay()")  PWA
                .line.w-100.mb-1.mt-1
                text1(:srcText="'Из программ работаю с Figma, Git (опыт работы с Git Actions), Webstorm, Visual Studio Code, Adobe Photoshop, Affinity Designer и прочими.'").hover-back.txt-white.mb-1


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
            color: #5f8cd6;
        }
        .onhover-red{
            color: #d01a55;
        }
        .onhover-yellow{
            color: #e5a813;
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
