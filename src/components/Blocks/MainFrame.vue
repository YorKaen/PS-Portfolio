<template lang="pug">
.main
    .container
        .grid
            .main__bubbles.bubbles(:class="{'isActive': switchBubbles}")
                .bubble.bubble__big
                .bubble.bubble__small
                .bubble.bubble__medium

            .main__logo.logo.main__item(:class="currentColorScheme")
                .wrapper.logo__wrapper
                        router-link(to="/")
                                .logo__title
                                    span.txt-primary purple
                                    span.txt-black.anim-ping .
                                    span.txt-black sphynx
            .main__menu.menu.main__item(:class="currentColorScheme")
                .wrapper.menu__wrapper
                    .menu__list
                        router-link(to="/about")
                            .menu__link.txt-black О себе
                        router-link(to="/skills")
                            .menu__link.txt-black Навыки
                        router-link(to="/experience")
                            .menu__link.txt-black Опыт
                        router-link(to="/examples")
                            .menu__link.txt-black Примеры

            .main__controls.controls.main__item(:class="currentColorScheme")
                .wrapper.controls__wrapper
                    .controls__toggle
                        input(type="checkbox" id="switch-dark" v-model="switchDark")
                        label(for="switch-dark")
                            span ☀️
                            span 🌙
                            .switch-toggle.switch-dark
                    .controls__toggle
                        input(type="checkbox" id="switch-bubbles" v-model="switchBubbles")
                        label(for="switch-bubbles")
                            span 🚫
                            span 🟣
                            .switch-toggle.switch-bubbles
                    .controls__toggle
                        input(type="checkbox" id="switch-color" v-model="switchColor" @click="toggleColor")
                        label(for="switch-color")
                            span ⬜️
                            span 🟪
                            .switch-toggle.switch-color
                    .controls__toggle
                        input(type="checkbox" id="switch-brick" v-model="switchBrick" )
                        label(for="switch-brick")
                            span ⚪️
                            span 🧱️
                            .switch-toggle.switch-brick
            .main__window.window.main__item(:class="currentColorScheme")
                .wrapper.window__wrapper
                    router-view
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "MainFrame",
  components: {},
  data: () => ({
    currentColorScheme: "",
    //switchDarkMode: false,
    //switchBubbles: false,
    switchColor: false,
    //switchBrick: false,
  }),
  watch: {},
  created() {
    this.currentColorScheme = this.$store.state.colorScheme;
  },
  mounted() {},
  unmounted() {},
  computed: {
    switchBrick: {
      get() {
        return this.$store.state.modeBrick;
      },
      set() {
        this.$store.commit("CHANGE_BRICK");
      },
    },
    switchBubbles: {
      get() {
        return this.$store.state.modeBubbles;
      },
      set() {
        this.$store.commit("CHANGE_BUBBLES");
      },
    },
    switchDark: {
      get() {
        return this.$store.state.modeDark;
      },
      set() {
        this.$store.commit("CHANGE_DARK");
      },
    },
  },
  methods: {
    toggleDarkMode() {
      //console.log("переключен дарк мод" + this.switchDarkMode);
    },
    toggleBubbles() {
      //console.log("переключен бабл мод");
    },
    toggleColor() {
      //console.log("переключен колор мод");
      if (!this.switchColor) {
        this.$store.commit("SET_COLORFUL");
        this.currentColorScheme = this.$store.state.colorScheme;
      } else {
        //console.log("цвета серые");
        this.$store.commit("SET_COLORLESS");
        this.currentColorScheme = this.$store.state.colorScheme;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
$paddingleft: 45px;
.main {
    overflow: hidden;
  .grid {
    grid-template-columns: 3fr 7fr;
    grid-template-rows: 120px 1fr 150px;
    gap: 10px 10px;
    grid-template-areas:
      "logo window"
      "menu window"
      "controls window";
  }
  &__item {
    border: 2px solid black;
    transition: background-color 0.3s ease-in-out;
      backdrop-filter: blur(24px);
      opacity: 0.85;
      z-index: 2;
    &.colorless-scheme {
      background-color: white;
    }
    &.logo.colorful-scheme {
      background-color: #9cd6e6;
    }
    &.menu.colorful-scheme {
      background-color: #9ca8e6;
    }
    &.controls.colorful-scheme {
      background-color: #ac9ce6;
    }
    &.window.colorful-scheme {
      background-color: #ddbae5;
    }
  }
  &__logo {
    border-radius: 20px 20px 0px 0px;
  }
  &__menu {
  }
  &__controls {
    border-radius: 0px 0px 20px 20px;
  }
  &__window {
    border-radius: 20px;
  }
    .bubbles{
        position: absolute;
        display: none;
        &.isActive{
            display: block;
        }
        .bubble{
            position: absolute;
            z-index: 1;
            background-color: purple;
            &__big{
                border-radius: 30% 70% 64% 36% / 49% 30% 70% 51% ;
                top: 100vh;
                left: 20vw;
                width: 250px;
                height: 250px;
            }
            &__medium{
                border-radius: 46% 54% 63% 37% / 79% 61% 39% 21% ;
                top: 50vh;
                left: 20vw;
                width: 180px;
                height: 150px;
            }
            &__small{
                border-radius: 46% 54% 45% 55% / 46% 61% 39% 54%  ;
                left: 20vw;
                top: 50vh;
                width: 100px;
                height: 100px;
            }
        }
    }
  .logo {
    grid-area: logo;
    &__title {
      font-weight: bold;
      padding: 30px $paddingleft;
      font-size: 2em;
    }
  }
  .menu {
    grid-area: menu;
    &__list {
      display: flex;
      flex-direction: column;
      padding: $paddingleft;
      padding-bottom: calc(45px - 1em);
      transition: all 0.3s ease-in-out;
    }
    a {
      margin-bottom: 1em;
      width: max-content;

      &.router-link-active {
        width: 100%;
      }
    }
    .router-link-active {
      display: block;

      .menu__link {
        opacity: 1;
        color: $primary;
      }
    }
    &__link {
      font-size: 1.5em;
      opacity: 0.7;
      font-weight: 500;

      &:hover {
        opacity: 1;
      }
    }
  }
  .controls {
    grid-area: controls;

    &__wrapper {
      padding: 12px $paddingleft;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &__toggle {
      position: relative;
      width: 40px;
      height: 70px;
      cursor: pointer;
      input {
        display: none;
        &:checked + label {
          .switch-toggle:before {
            transform: translateY(-30px);
          }
        }
      }
      label {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 2;
        cursor: pointer;
        span {
          z-index: 2;
        }
      }
      .switch-toggle {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 20px;
        &:before {
          position: absolute;
          content: "";
          height: 30px;
          border-radius: 20px;
          width: 30px;
          left: 5px;
          bottom: 5px;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          z-index: 3;
        }
      }
    }
  }
  .window {
    grid-area: window;
  }
}
</style>
