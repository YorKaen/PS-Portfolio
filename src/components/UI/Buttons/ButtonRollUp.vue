<template lang="pug">
.btn.btn-up.border-dark.r-10
    <svg width="31" height="43" viewBox="0 0 31 43" fill="#F4FDFB" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.475 20L16 7.62803L4.525 20L1 16.1725L16 -8.82753e-07L31 16.1725L27.475 20Z" />
        <path d="M26.475 43L15 30.628L3.525 43L0 39.1725L15 23L30 39.1725L26.475 43Z" />
    </svg>


</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "ButtonRollUp",
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
.btn-up{
    width: 4em;
    height: 5em;
    background-color: #182B3E;
    border-radius: 22px;
    display: flex;
    overflow: hidden;

    svg{
        max-width: 2em;
        margin: auto;
        animation: marqueeY 2s ease-in-out reverse infinite;

    }
}
</style>
