<template lang="pug">
.example.example-02.container-fluid.bg-white
    nav
        .container-fluid
            .nav.flex.flex-row.flex-between
                my-logo
    section.block.block-01#block-01
        .container


</template>

<script>
//import XXX from "@/components/XXX.vue";

export default {
  name: "Example02",
  components: {  },
  data: () => ({

  }),
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";

.example {
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: calc(100vh - 220px);
}
</style>
