<template lang="pug">
section.error.error__block.block.hide-scrollbar
    .title
        h3.txt.txt-white Как ты сюда попал?
        .line
        //отключено
    .block__content
        .block__text
            .txt.txt-white.mt Вы перешли по несуществующей ссылке - {{ $route.path }}
            .txt.txt-white.mt Все некорректные ссылки перехватываются! Нажмите на логотип или на одну из ссылок, чтобы выбраться отсюда.
            .txt.txt-white.mt Если все совсем плохо, нажмите
                router-link(to="/" class="error-link" )  сюда
                span.txt.txt-white .

</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "Error",
  components: {},
  data: () => ({}),
  created() {},
  mounted() {
    //console.log(this.$route.path);
  },
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
.mt {
  margin-top: 2em;
}

.block {
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: calc(100vh - 220px);
  padding: 25px;

  &__content {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .block__text {
    font-size: em(18);
    .error-link {
      transition: color 0.2s ease-in-out;
      color: $primary;
      position: relative;
      font-size: em(24);
      &:before,
      &:after {
        content: "\2192";
        position: absolute;
      }
      &:before {
        top: -30px;
        transform: rotateZ(60deg);
      }
      &:after {
        top: -27px;
        right: -8px;
        transform: rotateZ(110deg);
      }
      &:hover {
        color: $secondary;
      }
    }
  }
}
</style>
