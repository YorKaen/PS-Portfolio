<template lang="pug">
.txt.txt-white.txt-swap.mouseover(:class="{hover: isHovering}" @mouseover="isHovering = true" @mouseleave="isHovering = false") {{ isHovering ? textNew : textOld }}
</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "TextMouseoverChange",
  components: {},
  props: {
    textNew: String,
    textOld: String,
  },
  data: () => ({
    textToDisplay: String,
    isHovering: false,
  }),
  created() {
    this.textToDisplay = this.textOld;
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.mouseover {
  transition: color 0.3s ease-in-out;
  //font-size: em(30);
  white-space: nowrap;
  text-align: center;
  font-weight: 500;
  margin-right: 0.6ch;
  @include breakpoint(lg) {
    text-align: left;
  }
  &.hover {
    color: $primary;
    animation: appear 0.4s ease-in-out forwards;
  }
}
</style>
