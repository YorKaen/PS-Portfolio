<template lang="pug">
.item
  .item__img
    img(loading="lazy", :src="require(`@/assets/img/${fluidblock.imgName}`)", alt="")
  .item__label.label-1 {{fluidblock.txtLabel}}
  .item__text.txt {{fluidblock.txtText}}

</template>

<script>
//import XXX from "@/components/XXX.vue";

export default {
  name: "FluidBlockImg",
  components: {},
  data: () => ({}),
  props: ["fluidblock"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";

</style>
