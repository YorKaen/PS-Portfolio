<template lang="pug">
.app
    offline-detection
    d-e-b-u-g
    promoting-install
    .app-nav
    .banner-queue(v-if="bannerNotEmpty")
        banner-basic(class="top right color-white" :bannerText="'Приветствую! Смотрите, как этот баннер сейчас закроется, без регистрации и смс!' " :timeout="4000")
        banner-basic(v-if="hasBackdropFilter()" class="top right color-white" :bannerText="'На Вашем бразузере не поддерживается крутой фон, хоть это не обязательно, но можете воспользоваться браузером Chrome.' " :timeout="6000")
        banner-basic(class="top right color-white" :bannerText="'Сайт в процессе наполнения контентом, добавления новых фич, рефакторинга старых, отлова ошибок и тд и тп' " :timeout="20000")
    .app-content
        router-view

</template>

<script>
import OfflineDetection from "./components/Utilities/OfflineDetection";
import DEBUG from "./components/Utilities/DEBUG";
import BannerBasic from "./components/Elements/Banner/BannerBasic";
import PromotingInstall from "./components/Utilities/PromotingInstall";
export default {
  components: {
    PromotingInstall,
    BannerBasic,
    DEBUG,
    OfflineDetection,
  },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {
    hasBackdropFilter() {
      //if (process.browser) {
        let isFirefox = typeof InstallTrigger !== "undefined";
        let isOpera =
          (!!window.opr && !!opr.addons) ||
          !!window.opera ||
          navigator.userAgent.indexOf(" OPR/") >= 0;
        if (isFirefox || isOpera) {
          return true;
        }
      //}
    },
  },
  computed: {
    bannerNotEmpty() {
      return this.$store.state.global.bannerNotEmpty;
    },
  },
};
</script>

<style lang="scss">
.app {
}
</style>
