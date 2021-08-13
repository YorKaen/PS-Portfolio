<template lang="pug">
.item
  .item__label.txt {{fluidblock.txtLabel}}
  .item__text.txt {{fluidblock.txtText}}

</template>

<script>
//import XXX from "@/components/XXX.vue";

export default {
  name: "FluidBlockText",
  components: {},
  data: () => ({}),
  props: ["fluidblock"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";

.block-02__item {
  border: 2px solid #4cc9f0;
  border-radius: 20px;
  &.item {
    padding: 25px 30px 30px 30px;
    .item__label {
      font-weight: 600;
      font-size: 25px;
      margin-bottom: 30px;
    }
    .item__text {
      font-weight: normal;
      font-size: 18px;
    }
  }
}
.block-03__item {
  border-radius: 20px;
  background-color: #f9fafe;
  &.item {
    padding: 25px 30px 30px 30px;
    .item__label {
      font-weight: 600;
      font-size: 25px;
      margin-bottom: 30px;
    }
    .item__text {
      font-weight: normal;
      font-size: 18px;
    }
  }
}
</style>
