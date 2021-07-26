<template lang="pug">
.title
  h3.txt-black {{title}}

</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "TitleBlock",
  props: {
    title: String,
  },
  components: {},
};
</script>

<style lang="scss" scoped>
//@import '@/assets/scss/project/mixins.scss';
.title {
  h3 {
    font-size: 1em;
  }
}
</style>
