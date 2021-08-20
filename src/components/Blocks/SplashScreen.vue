<template lang="pug">
.splash-screen
    ProgressBarTimer(class="timer-fixed-top" :timeout="7000")
    .splash-screen__skip
        button.btn(@click="$store.commit('SKIP_INTRO')")
            .txt >>
    SphynxBlock(class="isAnimated")
    .splash-screen__tittle
        MyLogo(:dotIsPinging="true" :firstColor="'primary'" :secondColor="'secondary'" class="splash-screen__logo")
    .splash-screen__vue
        .txt VUE
</template>

<script>
//import XXX from "@/components/XXX.vue";
import SphynxBlock from "@/components/Blocks/SphynxFigure.vue";
import ProgressBarTimer from "@/components/Utilities/ProgressBarTimer.vue";
export default {
  name: "SplashScreen",
  components: {
    ProgressBarTimer,
    SphynxBlock,
  },
  data: () => ({}),
  created() {},
  mounted() {
    setTimeout(() => {
      this.$store.commit("SKIP_INTRO");
    }, 10000);
  },
  methods: {
    skipIntro() {
      this.$store.commit("SKIP_INTRO");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";

.splash-screen {
  position: absolute;
  z-index: 999;
  display: grid;
  place-content: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  font-size: 12px;
  background: #242424;
  opacity: 1;
  animation: appear 2s alternate-reverse linear both;
  animation-delay: 8s;
  @include breakpoint(sm) {
    font-size: 16px;
  }
  @include breakpoint(md) {
    font-size: 18px;
  }
  &__skip {
    .btn {
      cursor: pointer;
      font-size: 1em;
      font-weight: bold;
      color: #ffffff;
      border: 2px solid $primary;
      padding: 14px;
      border-radius: 100%;
      animation: appear 1s ease-in-out alternate infinite;
    }

    position: absolute;
    right: 2vw;
    top: 2vh;
  }
  &__vue {
    color: #42b983;
    position: absolute;
    left: 50%;
    top: calc(50% + 1.5em);
    font-size: 3em;
    font-weight: bold;
    transform: translate(-50%, -50%);
    animation: appear 2s linear both;
    animation-delay: 2s;
  }
  &__tittle {
    position: absolute;
    display: flex;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
