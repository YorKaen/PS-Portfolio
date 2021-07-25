<template lang="pug">
.splash-screen
    .splash-screen__skip
        button.btn(@click="$store.commit('SKIP_INTRO')")
            .txt >>
    .splash-screen__figure
        <svg width="763" height="751" viewBox="0 0 763 751" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="path" d="M140 3H21.5L4 32.5L40.5 298.5L192.5 646L252 747.5H530.5L581.5 646L719.5 298.5L759 32.5L748 3H631L515 218L508 249L261.5 251.5L256.5 218L140 3Z" stroke="#B6008E" stroke-width="6"/>
            </svg>
    .splash-screen__title
        .letter.letter__purple(:style="getRandomDelay()") p
        .letter.letter__purple(:style="getRandomDelay()") u
        .letter.letter__purple(:style="getRandomDelay()") r
        .letter.letter__purple(:style="getRandomDelay()") p
        .letter.letter__purple(:style="getRandomDelay()") l
        .letter.letter__purple(:style="getRandomDelay()") e
        .letter.letter__white.letter__anim-ping .
        .letter.letter__white(:style="getRandomDelay()") s
        .letter.letter__white(:style="getRandomDelay()") p
        .letter.letter__white(:style="getRandomDelay()") h
        .letter.letter__white(:style="getRandomDelay()") y
        .letter.letter__white(:style="getRandomDelay()") n
        .letter.letter__white(:style="getRandomDelay()") x
    .splash-screen__vue
        .txt VUE
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "SplashScreen",
  components: {},
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
    getRandomDelay() {
      return { animationDelay: Math.floor(Math.random() * 5) + 1 + "s" };
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
  width: 100%;
  height: 100%;
  font-size: 12px;
  background: $soft-black;
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
  &__figure {
    width: 100%;
    height: 100%;
    display: flex;

    @include breakpoint(md) {
      padding-top: 20%;
    }
    svg {
      .path {
        stroke-dashoffset: 2902.7;
        stroke-dasharray: 2902.7;
        animation: fill 5s linear both;
        animation-delay: 1s;
      }
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
  &__title {
    position: absolute;
    display: flex;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .letter {
      font-size: 3.5em;
      font-weight: bold;
      opacity: 0;
      animation: appear 2s linear both;
      &__anim-ping {
        animation: appear 1s ease-in-out alternate infinite;
      }
      &__white {
        color: white;
      }
      &__purple {
        color: #b5179e;
      }
    }
  }
}
</style>
