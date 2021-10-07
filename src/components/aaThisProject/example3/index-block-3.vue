<template lang="pug">
.block-3
  .container
    .block-3__wrapper.flex-column
      TitleInBlock(title="Как оформить кредит").mb-2
      .block-3__content
        .d-grid.gap-20.grid-lg-3
          fluid-block-img(v-for="item in dataItemsImg02" :fluidblock="item").creditio-block-3__item
</template>

<script>
import TitleInBlock from "./title-in-block";
import FluidBlockImg from "../../Elements/FluidBlock/FluidBlockImg";
import dataTextImgBot from "../../json/crblockimgtwo.json";

//import Form from "@/components/Utilities/form-default.vue";

export default {
  name: "Block_3",
  components: {
    FluidBlockImg,
    TitleInBlock,
  },
  data: () => ({
    dataItemsImg02: dataTextImgBot,
  }),
  mounted() {},
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";
.grid-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  @include breakpoint(lg) {
    flex-direction: row;
  }
}
</style>
