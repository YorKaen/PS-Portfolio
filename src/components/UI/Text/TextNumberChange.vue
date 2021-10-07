<template lang="pug">
.txt.number {{ displayNumber + "" + srcExtraText }}

</template>

<script>
// import XXX from "@/components/XXX.vue";

export default {
  name: "TextNumberChange",
  components: {},
  props: {
    srcNumber: { type: Number, default: 0 },
    toggleRun: false,
      srcExtraText: String
  },
  data: () => ({
    displayNumber: 0,
    interval: false,
    isRunning: false,
  }),
  ready() {},
  watch: {
    toggleRun() {
      if (this.toggleRun && !this.isRunning) {
        this.isRunning = true;
        this.checknumber();
      }
    },
  },
  created() {},
  mounted() {
    //this.checknumber()
  },
  methods: {
    checknumber() {
      clearInterval(this.interval);
      if (this.srcNumber === this.displayNumber) {
        return;
      }

      this.interval = window.setInterval(() => {
        if (this.displayNumber !== this.srcNumber) {
          let change = (this.srcNumber - this.displayNumber) / 20;
          change = change >= 0 ? Math.ceil(change) : Math.floor(change);
          this.displayNumber = this.displayNumber + change;
        }
      }, 40);
    },
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
</style>
