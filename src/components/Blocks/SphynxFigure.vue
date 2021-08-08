<template lang="pug">
.figure
    <svg width="763" height="751" viewBox="0 0 763 751" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="path" d="M140 3H21.5L4 32.5L40.5 298.5L192.5 646L252 747.5H530.5L581.5 646L719.5 298.5L759 32.5L748 3H631L515 218L508 249L261.5 251.5L256.5 218L140 3Z" stroke="#B6008E" stroke-width="6"/>
    </svg>

</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "SphynxFigure",
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
.figure {
  width: 100%;
  height: 100%;
  display: flex;
  &.isAnimated {
    .path {
      stroke-dashoffset: 2902.7;
      stroke-dasharray: 2902.7;
      animation: fill 5s linear both;
      animation-delay: 1s;
    }
  }
  @include breakpoint(md) {
    padding-top: 5%;
  }
  svg {
    max-width: 120%;
    max-height: 120%;
    margin-left: auto;
    margin-right: auto;
    @include breakpoint(md) {
      max-width: 90%;
      max-height: 90%;
    }
  }
}
</style>
