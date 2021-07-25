<template lang="pug">
.window__content
  .window__top
    TitleBlock(title="Ошибка")
  .window__body
  .window__footer


</template>

<script>
//import XXX from "@/components/XXX.vue";
import TitleBlock from "../components/UI/TitleBlock";
export default {
  name: "Error",
  components: {TitleBlock},
  data: () => ({}),
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";
</style>
