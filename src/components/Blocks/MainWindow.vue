<template lang="pug">
.container.main
    .grid.main-grid
        .panel.main-title
            router-link(to="/" )
                MyLogo(:dotIsPinging="true" :firstColor="'primary'" :secondColor="'secondary'" class="main-logo" )
        .panel.links.main-links
            router-link(to="/about" class="main-links__item hover-underline-center" @click="$store.commit('INCREMENT_ABOUT')")
                .txt.txt-white.txt-links.fw-b О себе
            .line.line-vert
            router-link(to="/skills" class="main-links__item hover-underline-center" @click="$store.commit('INCREMENT_SKILLS')")
                .txt.txt-white.txt-links.fw-b Навыки
            .line.line-vert
            router-link(to="/exp" class="main-links__item hover-underline-center" @click="$store.commit('INCREMENT_EXP')")
                .txt.txt-white.txt-links.fw-b Опыт
            .line.line-vert
            router-link(to="/examples" class="main-links__item hover-underline-center")
                .txt.txt-white.txt-links.fw-b Примеры
        .panel.content.main-content
            router-view


</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "MainFrame",
  components: {},
  data: () => ({
    //switchDarkMode: false,
  }),
  watch: {},
  created() {},
  mounted() {},
  unmounted() {},
  computed: {
    switchBubbles: {
      get() {
        return this.$store.state.modeBubbles;
      },
      set() {
        this.$store.commit("CHANGE_BUBBLES");
      },
    },
  },
  methods: {
    toggleDarkMode() {
      //console.log("переключен дарк мод" + this.switchDarkMode);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";

.main {
  padding-top: 20px;
  padding-bottom: 40px;
  &-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include breakpoint(lg) {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto 1fr;
      gap: 30px;
      grid-template-areas:
        "title links"
        "content content";
    }
  }
  &-links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    grid-area: links;
    flex-wrap: wrap;
    @include breakpoint(sm) {
      flex-wrap: nowrap;
    }
    .txt-links {
      font-size: em(22);
      @include breakpoint(xl) {
        font-size: em(26);
      }
    }
    &__item {
      padding: 8px 12px;
      width: 100%;
      max-width: 50%;
      white-space: nowrap;
      text-align: center;
      &:nth-child(1),
      &:nth-child(3) {
        border-bottom: 1px solid black;
        @include breakpoint(sm) {
          border-bottom: unset;
        }
      }
      &:nth-child(1),
      &:nth-child(5) {
        border-right: 1px solid black;
        @include breakpoint(sm) {
          border-right: unset;
        }
      }
      @include breakpoint(sm) {
        padding: 12px 16px;
        max-width: 100%;
        width: auto;
      }
    }
  }
  &-title {
    grid-area: title;
  }
  &-content {
    grid-area: content;
  }
}

.line-vert {
  width: 2px;
  height: 30px;
  background-color: $white;
  opacity: 0.6;
  display: none;
  @include breakpoint(sm) {
    display: unset;
  }
  @include breakpoint(lg) {
    height: 80%;
  }
}

.router-link-active {
  .txt {
    color: $secondary;
  }
  &:before {
    left: 10%;
    right: 10%;
    background-color: $primary;
  }
}
</style>
