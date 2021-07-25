<template lang="pug">
.app( :class="{'isBrick': $store.state.modeBrick, 'isDark': $store.state.modeDark } "  )
    SplashScreen(v-if="!$store.state.skipIntro")
    MainFrame

</template>

<script>
import SplashScreen from "@/components/SplashScreen.vue";
import MainFrame from "@/components/Blocks/MainFrame.vue";
export default {
  components: {
    SplashScreen,
    MainFrame,
  },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
$soft-black: #000000;
.app {
  background-color: #242424;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  &:before {
    background-color: #b5b5b5;
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &.isBrick {
    &:before {
      opacity: 0;
    }
    background-image: linear-gradient(
        335deg,
        $soft-black 23px,
        transparent 23px
      ),
      linear-gradient(155deg, $soft-black 23px, transparent 23px),
      linear-gradient(335deg, $soft-black 23px, transparent 23px),
      linear-gradient(155deg, $soft-black 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0 2px, 4px 35px, 29px 31px, 34px 6px;
  }
}
</style>
