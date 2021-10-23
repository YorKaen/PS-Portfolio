<template lang="pug">
.btn.btn-down.border-dark.r-10
    <svg width="31" height="43" viewBox="0 0 31 43" fill="#F4FDFB" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.525 23L15 35.372L26.475 23L30 26.8275L15 43L0 26.8275L3.525 23Z"/>
        <path d="M4.525 0L16 12.372L27.475 0L31 3.82749L16 20L1 3.82749L4.525 0Z" />
        </svg>


</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "ButtonRollDown",
  components: {},
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
//Project Specific
.btn-down{
    width: 4em;
    height: 5em;
    background-color: #182B3E;
    border-radius: 22px;
    display: flex;
    overflow: hidden;

    svg{
        max-width: 2em;
        margin: auto;
        animation: marqueeY 2s ease-in-out infinite;

    }
}
</style>
