<template lang="pug">
.title.block-title
  h3 {{title}}

</template>

<script>
//import XXX from "@/components/XXX.vue";

export default {
  name: "TitleInBlock",
  props: {
    title: String,
  },
  components: {},
};
</script>

<style lang="scss" scoped>
//@import '@/assets/scss/project/mixins.scss';
</style>
