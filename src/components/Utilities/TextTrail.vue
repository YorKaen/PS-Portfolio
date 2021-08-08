<template lang="pug">
.wrapper
    .anim-running-train
        .emoji 🚂
        .emoji(v-for="item in randomList(arraySymbols)" :key="item.id" title="item.id") {{ item }}

</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "TextTrail",
  components: {},
  data: () => ({}),
  props: {
    arraySymbols: Array,
  },
  created() {},
  mounted() {
    //console.log(this.arraySymbols);
    //this.randomList(this.arraySymbols);
  },
  unmounted() {},
  methods: {
    randomList(rand) {
      return rand.sort(function () {
        return 0.5 - Math.random();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";
.wrapper {
  width: 100%;
  height: 100%;
  max-height: 1.4em;
  overflow: hidden;
  margin: 1em;
}
.anim-running-train {
  text-align: right;
  animation: marquee 30s linear infinite;
  display: flex;
  flex-wrap: wrap;
  .emoji {
    //margin: 1em;
      padding-left: 1em;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      opacity: 0.2;
    }
  }
}
</style>
