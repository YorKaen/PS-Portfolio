<template lang="pug">
.logo.flex-row
    .txt.letter(v-for="item in firstWord" :key="item.letter" :class='setFirstColor' :style="getRandomDelay()") {{item.letter}}
    .txt.letter.txt-white(:class="{'anim-ping': dotIsPinging}") .
    .txt.letter(v-for="item in secondWord" :key="item.letter" :class='setSecondColor' :style="getRandomDelay()") {{item.letter}}
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "MyLogo",
  data: () => ({
    firstWord: [
      { letter: "p" },
      { letter: "u" },
      { letter: "r" },
      { letter: "p" },
      { letter: "l" },
      { letter: "e" },
    ],
    secondWord: [
      { letter: "s" },
      { letter: "p" },
      { letter: "h" },
      { letter: "y" },
      { letter: "n" },
      { letter: "x" },
    ],
  }),
  props: {
    firstColor: String,
    secondColor: String,
    dotIsPinging: Boolean,
  },
  mounted() {
    //console.log(this.firstColor, this.secondColor, this.dotIsPinging);
  },
  components: {},
  computed: {
    setFirstColor() {
      //console.log(this.firstColor);
      return "txt-" + this.firstColor;
    },
    setSecondColor() {
      //console.log(this.firstColor);
      return "txt-" + this.secondColor;
    },
  },
  methods: {
    getRandomDelay() {
      return { animationDelay: Math.floor(Math.random() * 5) + 1 + "s" };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
.logo {
  &.main-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 12px 20px;
    @include breakpoint(md) {
      padding: 18px 20px;
    }
    .letter {
      font-size: em(36);
      @include breakpoint(lg) {
        font-size: em(26);
      }
      @include breakpoint(xl) {
        font-size: em(36);
      }
    }
  }
  &.splash-screen__logo {
    .letter {
      font-size: em(72);
      opacity: 0;
      animation: appear 2s linear both;
    }
  }
}
.anim-ping {
  animation: appear 1s ease-in-out alternate infinite;
}
.letter {
  font-weight: bold;
}
</style>
