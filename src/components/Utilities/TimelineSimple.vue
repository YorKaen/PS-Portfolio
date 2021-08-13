<template lang="pug">
.content.split-section
    .grid.split-section__grid
        .split-section__block-left.block-left
            h2.txt.txt-white.block-left__title {{ itemsArray.companyName }}
        .split-section__block-right.block-right
            .block-right__inner
                .row.block-right__row
                    .txt.txt-white.block-right__title Позиция: {{ itemsArray.companyPosition }}
                    .txt.txt-white.block-right__subtitle Период: {{ itemsArray.rangeYears }}
                    .line
                .row.block-right__row
                    .txt.txt-white.block-right__activity(v-for="item in splitArray(itemsArray.myActivity)") {{ item }}
                .row.block-right__row
                    .txt.txt-white.block-right__used-tools Дополнительные инструменты: {{ itemsArray.usedTools }}

</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "TimelineSimple",
  components: {},
  data: () => ({}),
  props: ["itemsArray"],
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    splitArray(toSplit) {
      return toSplit.split("+");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
.split-section {
  &__grid {
    grid-template-columns: 0.7fr 1.3fr;
    grid-template-rows: 1fr;
  }
  .block-left {
    &__title {
      font-size: em(22);
      position: sticky;
      top: 1em;
    }
  }
  .block-right {
    &__inner {
    }
    &__title {
      font-size: em(18);
    }
    &__subtitle {
      font-size: em(14);
      margin-top: -0.4em;
    }
    &__activity {
      font-size: em(14);
      margin-top: 0.2em;
      padding-left: 1.3em;
      position: relative;
      transition: color 0.3s ease-in-out;
      &:before {
        content: ">";
        position: absolute;
        left: -0em;
        transition: all 2s ease-in;
      }
      &:hover {
        color: $secondary;
        &:before {
          transform: rotate3d(0, 5, 0, 4turn);
        }
      }
    }
    &__used-tools {
      font-size: em(14);
      margin-top: 1em;
    }
  }
}
</style>
