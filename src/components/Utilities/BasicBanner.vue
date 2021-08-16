<template lang="pug">
transition(name="right")
    .banner(v-if='isOpen')
        .banner-progress
            ProgressBarTimer(class="timer-absolute-top" :timeout="timeout")
        .banner-dismiss
            button.dismiss(@click="closeBanner()")
        .banner-text
            .txt {{ bannerText }}
        slot
</template>

<script>
//import XXX from "@/components/XXX.vue";
import ProgressBarTimer from "./ProgressBarTimer";
export default {
  name: "BasicBanner",
  components: { ProgressBarTimer },
  data: () => ({
    isOpen: false,
  }),
  props: {
    bannerText: String,
    timeout: Number,
  },
  created() {},
  mounted() {
    this.appear();
  },
  unmounted() {},
  methods: {
    closeBanner() {
      this.isOpen = false;
    },
    showBanner() {
      this.isOpen = true;
    },
    appear() {
      setTimeout(() => (this.isOpen = true), 1000);
      setTimeout(() => (this.isOpen = false), this.timeout + 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";

.banner {
  position: relative;
  width: 100%;
  height: auto;
  max-width: 250px;
  z-index: 999;
  border-radius: 8px;
  //max-height: 50px;
  background-color: $dark-3;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    box-shadow: inset 0 0 0 3px $white;
  }
  &.color-white {
    .banner-text {
      color: $white;
    }
  }
  &.top {
    top: 16px;
  }
  &.left {
    left: 16px;
  }
  &.right {
    right: 16px;
  }
  ///////////////
  &-progress {
    position: relative;
    z-index: 0;
    margin-top: 0px;
  }
  &-text {
    padding: 15px 25px 15px 15px;
    font-size: em(14);
  }
  &-dismiss {
    display: flex;
    position: relative;
    align-self: flex-end;
    .dismiss {
      cursor: pointer;
      width: 30px;
      height: 30px;
      z-index: 1000;
      position: absolute;
      display: flex;
      top: -1px;
      right: -1px;
      background-color: $dark-2;
      border-radius: 10px;
      //border: 2px solid transparent;
      transition: box-shadow 0.3s ease-in-out;
      &:hover {
        box-shadow: inset 0px 0px 0px 3px $white;
      }
      &:before,
      &:after {
        width: 20px;
        background-color: white;
        height: 4px;
        content: "";
        position: absolute;
        right: 5px;
        top: 13px;
      }
      &:after {
        transform: rotate(45deg);
      }
      &:before {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
