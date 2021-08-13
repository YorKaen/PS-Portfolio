<template lang="pug">
section.exp.exp__block.block.hide-scrollbar
    MyTitle(:txtTitle="'Мой опыт'" :visitsCount="$store.state.visitsPageExp")
    .br
    .block__content
        .block__text.block-text
            .block-text__block1
                TimelineSimple(:itemsArray="dataForSplit01")
</template>

<script>
//import XXX from "@/components/XXX.vue";
import TimelineSimple from "@/components/Utilities/TimelineSimple";
export default {
  name: "Experience",
  components: { TimelineSimple },
  data: () => ({
    dataForSplit01: {
      companyName: "TopBroker",
      companyPosition: "FrontEnd Developer",
      rangeYears: "2021.02 - 2021.08",
      myActivity:
        " Верстка макетов из фигмы + Исправление макетов на фигме + Создание сложных анимаций на чистом JS + Добавление и исправление функционала JS, модулей + Создание форм для отправки + Корректировка изображений + Ежедневное общение с бэкенд и фуллстек девелоперами, для четкого разделения и исполнения задач + Внедрение кода с бэка на сайты + Многочисленные правки, создание системы модулей, миксинов для легкого и быстрого внесения изменеий + Создание макетов для отправки писем + Обучение(переобучение) стажеров верстальщиков + Создание аналога бутстрапа для быстрой верстки проектов + Создание и внедрение функционала PWA",
      usedTools: "PUG, SCSS, JS, VUE, Gulp, Webpack, VUE-CLI, Git",
    },
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
