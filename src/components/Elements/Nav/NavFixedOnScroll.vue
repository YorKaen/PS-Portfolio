<template lang="pug">
nav.nav(:class="{'nav-fixed' : isFixed}")
    .nav-container(:class="{'bg-primary': isFill}, isFull ? 'container-full' : 'container'")
        slot
</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "NavFixedOnScroll",
  components: {},
  props: {
    isFull: Boolean,
    isFill: Boolean,
    isFixed: false,
  },
  data: () => ({
    //fixedBar: false,
    //currentOffset: String,
    //setNavOffset: String,
    //scrollTop: window.scrollY || document.documentElement.scrollTop
  }),
  created() {
    //window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {},
  unmounted() {
    //window.removeEventListener("resize", this.handleResize);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.nav {
  transition: padding-top 0.4s ease-in-out;
  &.nav-fixed {
    position: fixed;
    width: 100%;
    height: auto;
    z-index: 3001;
    top: 0;
  }
}
////////////////////////////////Project specific
.difam-nav-fixed {
  padding-top: 16px;
  padding-bottom: 16px;
}

</style>
