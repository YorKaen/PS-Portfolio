<template lang="pug">
section.exp.exp__block.block.hide-scrollbar
    MyTitle(:txtTitle="'Мой опыт'" :visitsCount="$store.state.visitsPageExp")
    .br
    .block__content
        .block__text.block-text
            .block-text__block1
                TimelineSimple(v-for="item in arrayTime" :itemsArray="item")
</template>

<script>
//import XXX from "@/components/XXX.vue";
import TimelineSimple from "@/components/Utilities/TimelineSimple";
export default {
  name: "Experience",
  components: { TimelineSimple },
  data: () => ({
    arrayTime: [
      {
        companyName: "LeadsBroker",
        companyPosition: "FrontEnd Developer",
        rangeYears: "2021.02 - 2021.08",
        myActivity:
          " Верстка макетов из фигмы + Исправление макетов на фигме + Создание сложных анимаций на чистом JS + Добавление и исправление функционала JS, модулей + Создание форм для отправки + Корректировка изображений + Ежедневное общение с бэкенд и фуллстек девелоперами, для четкого разделения и исполнения задач + Внедрение кода с бэка на сайты + Многочисленные правки, создание системы модулей, миксинов для легкого и быстрого внесения изменеий + Создание макетов для отправки писем + Обучение(переобучение) стажеров верстальщиков + Создание аналога бутстрапа для быстрой верстки проектов + Создание и внедрение функционала PWA",
        usedTools: "PUG, SCSS, JS, VUE, Gulp, Webpack, VUE-CLI, Git",
      },
      {
        companyName: "Freelance",
        companyPosition: "FrontEnd Developer",
        rangeYears: "2020.11 - 2021.02",
        myActivity:
          " Верстка сложных и разнообразных макетов из фигмы + Создание сложных анимаций на чистом JS + Добавление функционала JS, модулей + Создание форм для отправки",
        usedTools: "PUG, SCSS, JS, Gulp",
      },
      {
        companyName: "TOPMAN",
        companyPosition: "SEO/Web Developer",
        rangeYears: "2020.08 - 2020.11",
        myActivity:
          " Верстка проектов + Добавление SEO элементов + Работа с модулями",
        usedTools: "HTML, CSS, JS",
      },
      {
        companyName: "Freelance",
        companyPosition: "Web Developer",
        rangeYears: "2020.02 - 2020.08",
        myActivity:
          " Верстка разнообразных макетов из фигмы + Добавление функционала JS, модулей",
        usedTools: "PUG, SCSS, JS, Gulp",
      },
      {
        companyName: "Разные",
        companyPosition: "Разные",
        rangeYears: "2018.01 - 2020.01",
        myActivity:
          " Создание приложений на Unity и прочих сборщиках + Наполнение контентом сайтов, и их изменение и поддержка + Создание сайтов компаний в готовых редакторах (тыжпрограмист) за бонусы + Создание (плохих) лендингов в качестве хобби",
        usedTools: "Visual Studio Code",
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
.timeline {
  margin-bottom: 4em;
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
        font-size: em(24);
        margin-bottom: 1em;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
