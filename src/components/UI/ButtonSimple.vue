<template lang="pug">
button.btn
  slot

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
@import "@/assets/scss/project/mixins.scss";

.btn {
}
</style>
