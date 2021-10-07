<template lang="pug">
button.dismiss
</template>

<script>
// import XXX from "@/components/XXX.vue";

export default {
  name: "btnClose",
  components: {},
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.dismiss {
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 1000;
  position: absolute;
  display: flex;
  top: -1px;
  right: -1px;
  background-color: $dark-2;
  border-radius: 10px;
  //border: 2px solid transparent;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: inset 0px 0px 0px 3px $white;
  }
  &:before,
  &:after {
    width: 20px;
    background-color: white;
    height: 4px;
    content: "";
    position: absolute;
    right: 5px;
    top: 13px;
  }
  &:after {
    transform: rotate(45deg);
  }
  &:before {
    transform: rotate(-45deg);
  }
}
</style>
