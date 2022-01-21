<template lang="pug">
#example-page-3
    .example03.bg-white
        section#block1d(v-if="window.width > 768").pt-0.clearfix
            HeaderDesktop
        section#block1m(v-else).pt-0.clearfix
            HeaderMobile
        section#block2(v-if="window.width > 768").clearfix
            block_2
        section#block3(v-if="window.width > 768").clearfix
            block_3
        section#block4.clearfix
            block_4
        section#block5.clearfix
            block_5
        section#offer.clearfix
            offer
        footer#footer.footer.clearfix

</template>

<script>
// import XXX from "@/components/XXX.vue";
import SectionBasic from "../../components/Sections/SectionBasic";
import HeaderDesktop from "../../components/aaThisProject/example3/index-block-1";
import HeaderMobile from "../../components/aaThisProject/example3/index-block-1-mobile";
import { mixinResize } from "../../components/mixins/mixinResize";
import Block_2 from "../../components/aaThisProject/example3/index-block-2";
import Block_3 from "../../components/aaThisProject/example3/index-block-3";
import Block_4 from "../../components/aaThisProject/example3/index-block-4";
import Block_5 from "../../components/aaThisProject/example3/index-block-5";
import Offer from "../../components/aaThisProject/example3/index-offer-1";

export default {
  name: "Example03",
  mixins: [mixinResize],
  components: {
    Offer,
    Block_5,
    Block_4,
    Block_3,
    Block_2,
    HeaderDesktop,
    HeaderMobile,
    SectionBasic,
  },
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
#example-page-3 {
  $primary: #7183e5;
  $primary-90: rgba($primary, 0.9);

  $secondary: #60d313;
  $secondary-80: rgba($secondary, 0.8);
  $secondary-60: rgba($secondary, 0.6);
  $secondary-40: rgba($secondary, 0.4);
  $secondary-20: rgba($secondary, 0.2);

  $blue: #1730b9;
  $shape: #f9fafe;
  $gray: #c7c7c7;
}

.bg-primary {
  background-color: #7183e5;
}
.txt-3 {
  font-size: em(22);
}

//Project Specific
.example03 {
  section {
    padding-top: 60px;
    &.pt-0 {
      padding-top: 0;
    }
  }
  .brd-blue-2 {
    border: 2px solid $blue;
  }
}
</style>
