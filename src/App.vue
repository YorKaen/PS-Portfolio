<template lang="pug">
.app( :class="{'isDark': $store.state.modeDark } "  )
    OfflineDetection
    SplashScreen(v-if="!$store.state.skipIntro")
    .app__bg
        SphynxBlock
        .app__blob-wrapper
            Blob(class="blob__top blob__right" :imgName="blobsData.blob2")
            Blob(class="blob__bot blob__left" :imgName="blobsData.blob1")
    transition(name="hide")
        MainWindow(v-if="$store.state.skipIntro")

</template>

<script>
import SplashScreen from "@/components/SplashScreen.vue";
import SphynxBlock from "@/components/Blocks/SphynxFigure.vue";
import MainWindow from "@/components/Blocks/MainWindow.vue";
import Blob from "@/components/Blocks/Blob.vue";
import OfflineDetection from "@/components/Utilities/OfflineDetection.vue";
//import MainFrame from "@/components/Blocks/MainWindow.vue";
export default {
  components: {
    OfflineDetection,
    SplashScreen,
    SphynxBlock,
    MainWindow,
    Blob,
  },
  data: () => ({
    blobsData: {
      blob1: "blob_bot_left.svg",
      blob2: "blob_top_right.svg",
    },
  }),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/project/mixins.scss";

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  transition: background-color 0.3s ease-in-out;
  background-color: $body-bg;
  font-size: 12px;
  @media (max-height: 780px) {
    height: 100%;
    padding-top: 40px;
  }
  @include breakpoint(sm) {
    font-size: 14px;
  }
  @include breakpoint(md) {
    font-size: 16px;
  }
}
.app {
  width: 100%;
  height: 100%;
  //flex для центра
  display: flex;
  place-content: center;
  flex-direction: column;
  &__blob-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &__bg {
    position: fixed;
    z-index: 0;
    display: flex;
    place-content: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    @include breakpoint(xl) {
      overflow: visible;
      max-width: 1440px;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 5%;
    }
  }
}
</style>
