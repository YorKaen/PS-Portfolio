<template lang="pug">
.error-page
    .error-page__wrapper.center-absolute
        router-link(to="/" exact)
            my-logo(:firstColor="'primary'" :second-color="'secondary'").main-logo.panel.mb-4
        h1.txt-white.center-text.panel.p-4 Такой страницы не существует, вернитесь обратно


</template>

<script>
// import XXX from "@/components/XXX.vue";
import MyLogo from "../components/aaThisProject/MyLogo";
export default {
  name: "Error",
  components: {MyLogo},
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
//Project Specific
.error-page{
    width: 100vw;
    height: 100vh;
    .error-page__wrapper{
        position: absolute;
    }
}
</style>
