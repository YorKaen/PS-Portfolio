<template lang="pug">
.block-2
  .container-full.bg-shape
    .container
      .block-2__wrapper.flex-column
        TitleInBlock(title="Преимущества").mb-2
        .block-2__content
          .d-grid.grid-lg-2.gap-20
              fluid-block-img(v-for="item in dataItemsImg01" :fluidblock="item").creditio-block-2__item

</template>

<script>
import TitleInBlock from "./title-in-block";
import dataTextImgTop from "../../json/crblockimg.json";
import FluidBlockImg from "../../Elements/FluidBlock/FluidBlockImg";
//import Form from "@/components/Utilities/form-default.vue";

export default {
  name: "Block_2",
  components: {
    FluidBlockImg,
    TitleInBlock,
  },
  data: () => ({
    dataItemsImg01: dataTextImgTop,
  }),
  mounted() {},
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";
.grid-container {
  display: flex;
  flex-direction: column;
  @include breakpoint(lg) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 20px;
  }
}
.block-2__wrapper {
  @include breakpoint(md) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
.block-2__item {
}
</style>
