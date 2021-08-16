<template lang="pug">
.burger
    transition(name="burger")
        .burger-menu(v-if="burgerIsActive")
            .burger-nav
                slot
    .burger-button-wrapper.burger-hover-mid(@click.prevent="burgerToggle()" :class="{active : burgerIsActive}")
        .burger-button

//.burger(:class="{active : burgerIsActive}")
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "BasicBurger",
  components: {},
  data: () => ({
    burgerIsActive: false,
  }),
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    burgerToggle() {
      this.burgerIsActive = !this.burgerIsActive;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
//-добавить разные анимации для разного появления, добавить переменные, переделать с бефоре.афтер на линии для больших возможностей анимации
//-Стили появления окна
.burger-enter-active,
.burger-leave-active {
  transition: transform 0.2s ease;
}
.burger-enter-from,
.burger-leave-to {
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;
}
//-Стили наведения на кнопку
.burger-hover-mid {
  &:hover {
    .burger-button {
      width: 30px;
    }
  }
  &.active {
    .burger-button {
      width: 30px;
      background-color: transparent;
      &:before {
        top: 0px;
        transform: rotate(45deg);
      }
      &:after {
        top: 0px;
        transform: rotate(-45deg);
      }
    }
  }
  .burger-button {
    width: 20px;
    transition: width 0.3s ease-in-out;
  }
}
//-Основные стили
.burger {
  //position: relative;
  &-menu {
    position: absolute;
    z-index: 99;
    height: auto;
    right: 0px;
    top: 70px;
    background-color: #4cc9f0;
    color: black;
    width: 250px;
    //transition: all 0.4s ease-in-out;
    border-bottom-left-radius: 22px;
  }
  &-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
  }
  &-button-wrapper {
    cursor: pointer;
    height: 100%;
    display: flex;
  }
  &-button {
    width: 30px;
    height: 3px;
    background-color: white;
    position: relative;
    place-self: center;
    z-index: 999;
    transition: all 0.3s ease-in-out;
    &:before,
    &:after {
      position: absolute;
      background-color: white;
      height: 3px;
      width: 30px;
      content: "";
      right: 0;
    }
    &:before {
      top: -8px;
    }
    &:after {
      top: 8px;
    }
  }
}
</style>