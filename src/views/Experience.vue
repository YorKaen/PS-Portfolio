<template lang="pug">
section.exp.exp__block.block.hide-scrollbar
    MyTitle(:txtTitle="'Мой опыт'" :visitsCount="$store.state.visitsPageExp")
    .br
    .block__content
        .block__text.block-text
            .block-text__block1

//https://www.toptal.com/resume/giulia-cardieri#Employment
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "Experience",
  components: {},
  data: () => ({}),
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
