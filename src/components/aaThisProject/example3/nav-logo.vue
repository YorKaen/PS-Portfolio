<template lang="pug">
nav.nav
  .container-full.bg-primary
    .container
      .nav-wrapper
        .nav-logo
            a(href="#")
                image-lazy(:srcImg="'creditio/logo.png'")
      //-.nav-link
        <router-link to="/docs" active-class="active-page" >
          button.btn
            span Документы
        </router-link>
</template>

<script>
//import XXX from "@/components/XXX.vue";
import ImageLazy from "../../UI/Images/ImageLazy";
export default {
  name: "NavLogo",
  components: {ImageLazy},
  mounted() {},
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";
.nav-wrapper {
  padding-top: 30px;
  padding-bottom: 30px;
  .nav-logo {
    max-width: 170px;
    max-width: fit-content;
    .logo {
      max-height: 35px;
    }
  }
}
</style>
