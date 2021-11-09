<template lang="pug">
.gb.mr-2.mb-2(:class="GBlockClass()" :style="GBlockStyle()")
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "GBlock",
  components: {},
  data: () => ({
    white: true,
    isActive: true,
    colorsArray: ["#22b7a0", "#f72585", "#2ead69", "#b5179e", ],
  }),
  props: {},
  created() {},
  mounted() {},
  unmounted() {},
  computed: {},
  methods: {
    bgGrad() {
      let gradient = "linear-gradient(115deg, ";
      let color1 =
        this.colorsArray[(Math.random() * this.colorsArray.length) | 0];
      let color2 =
        this.colorsArray[(Math.random() * this.colorsArray.length) | 0];
      return gradient + color1 + ` 20%, ` + color2 + ` 95% )`;
    },
    shapeForm() {
      return Math.floor(Math.random() * 10 + 1) + "em";
    },
    GBlockStyle() {
      return {
        background: this.bgGrad(),
        width: this.shapeForm(),
      };
    },
    GBlockClass() {
      return {
        "txt-white": this.white,
        active: this.isActive,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.gb {
  $color1: #22b7a0;
  $color2: #f72585;
  $color3: #2ead69;
  $color4: #b5179e;
  $color5: #febf32;
  height: 1em;
  opacity: 0;
    transition: all 0.3s ease-in-out;
    box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
    cursor: default;
    &:hover{

        box-shadow: none;
    }
  //transform: translate(50vw);
}

</style>
