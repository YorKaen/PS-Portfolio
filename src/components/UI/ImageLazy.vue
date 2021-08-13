<template lang="pug">
img(loading="lazy", :src="require(`@/assets/img/${imgPath}`)", @error="imgError()" alt=imgAlt)
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "ImageLazy",
  data: () => ({
    defaultImg: "require( '@/assets/img/missing.png' )",
    //isWhite: true,
  }),
  props: {
    imgPath: String,
    imgAlt: String,
  },
  components: {},
  methods: {
    imgError() {
      this.src = this.defaultImg;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";

.btn {
  cursor: pointer;
  padding: 8px 12px;
  position: relative;
  overflow: hidden;
  @include breakpoint(md) {
    padding: 12px 16px;
  }
  &:active {
    transform: translateY(4px);
  }
  &.dark {
    transition: background-color 0.3s ease-in-out;
    background-color: $dark-3;
    border: 2px solid $dark-1;
    &:hover {
      background-color: $dark-2-6;
    }
  }
  &.r-20 {
    border-radius: 20px;
  }
}
.hover-circle {
  &:after {
    content: "";
    position: absolute;
    width: 60%;
    height: 100%;
    background-color: $secondary;
    left: -54%;
    top: 0;
    opacity: 0.3;
    transition: left 0.5s ease-in-out;
    border-radius: 20px;
    //transform: rotate(125deg);
  }
  &:hover {
    &:after {
      left: 94%;
    }
  }
}
</style>
