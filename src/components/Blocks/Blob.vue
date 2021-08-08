<template lang="pug">
.blob
    img(loading="lazy", :src="require(`@/assets/img/svgs/${imgName}`)", alt="")
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "blob",
  components: {},
  data: () => ({}),
  props: {
    imgName: String,
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
.blob {
  position: absolute;
  z-index: -1;
  img {
    width: 50%;
    height: 50%;
    @include breakpoint(sm) {
      width: 70%;
      height: 70%;
    }
    @include breakpoint(md) {
      width: 100%;
      height: 100%;
    }
  }

  &.blob__top {
    top: -80px;
    @include breakpoint(md) {
      top: -140px;
    }
  }
  &.blob__bot {
    bottom: 10px;
    @include breakpoint(md) {
      bottom: -200px;
    }
  }
  &.blob__right {
    right: -260px;
    @include breakpoint(md) {
      right: -90px;
    }
  }
  &.blob__left {
    left: -90px;
  }
}
</style>
