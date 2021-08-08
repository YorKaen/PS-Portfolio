<template lang="pug">
span(:class="{'hide': isHiding}" :style="getRandomDelay()") {{ currentCharacter }}

</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "WordSwitcher",
  components: {},
  data: () => ({
    currentCharacter: "",
    isHiding: false,
    changeLimit: 3,
  }),
  props: {
    fromCh: String,
    toCh: String,
  },
  created() {},
  mounted() {
    this.switchForward();
    this.currentCharacter = this.fromCh;
  },
  unmounted() {},
  methods: {
    getRandomDelay() {
      return { transitionDuration: Math.random() + "s" };
    },
    switchForward() {
      //console.log("forward launched 1");
      this.isHiding = false;
      if (this.changeLimit > 0) {
        setTimeout(() => {
          //console.log("forward hide 2");
          this.isHiding = true;
          setTimeout(() => {
            //console.log("forward timeout 3");
            //this.isHiding = true;
            this.switchBack();
            this.currentCharacter = this.toCh;
          }, 700);
        }, 8000);
        this.changeLimit--;
      }
    },
    switchBack() {
      //console.log("back  1");
      this.isHiding = false;
      setTimeout(() => {
        //console.log("forward hide 2");
        this.isHiding = true;
        setTimeout(() => {
          //console.log("forward timeout 3");
          //this.isHiding = true;
          this.switchForward();
          this.currentCharacter = this.fromCh;
        }, 700);
      }, 8000);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";

span {

  transition: opacity 0.3s ease-in-out;
  &.hide {
    opacity: 0;
  }

  //animation: appear 1s alternate-reverse ease-in-out infinite;
  //animation-delay: 5s;
}
</style>
