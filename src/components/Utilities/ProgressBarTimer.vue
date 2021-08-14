<template lang="pug">
.progress-bar
    .progress-bar__filled(:style="getFilledBar")
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "ProgressBarTimer",
  components: {},
  props: {
    timeout: Number,
  },
  data: () => ({
    percent: 0,
  }),
  created() {},
  mounted() {
    this.fillBar();
  },
  unmounted() {},
  methods: {
    fillBar() {
      if (this.percent < 100) {
        setTimeout(() => {
          this.percent++;
          this.fillBar();
        }, this.timeout / 100);
      }
    },
  },
  computed: {
    getFilledBar: function () {
      return "width:" + this.percent + "%";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
.progress-bar {
  &.timer-absolute-top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 5px;
    z-index: 2;
  }
  &.timer-fixed-top {
    position: fixed;
    top: 0;
    width: 100%;
    height: 5px;
    z-index: 2;
  }
  &__filled {
    transition: width 0.2s linear;
    width: 0;
    height: 5px;
    background-color: $primary;
  }
}
</style>
