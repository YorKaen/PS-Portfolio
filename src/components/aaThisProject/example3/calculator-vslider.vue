<template lang="pug">
.calculator
  .calculator__header
    .calculator__title
      .txt.label-calc Калькулятор
  .calculator__body
    .calculator__item.calculator__item-amount
      .calculator__values.flex-between
        .txt Сумма
        .txt {{ valueAmount }} {{ valueAmountAfter }} 
      .calculator__slider
        vue-slider(v-model="valueAmount", v-bind="valueAmountOptions", @change="changeAmount", class="myslider")
      .calculator__marks.flex-between
        .txt.calculator__marks-min {{ valueAmountOptions.min }} {{ valueAmountAfter }} 
        .txt.calculator__marks-max {{ valueAmountOptions.max }} {{ valueAmountAfter }} 

    .calculator__item.calculator__item-period
      .calculator__values.flex-between
        .txt Срок кредита
        .txt {{ valuePeriod }} {{ valuePeriodAfter }} 
      .calculator__slider
        vue-slider(v-model="valuePeriod", v-bind="valuePeriodOptions", @change="changeAmount", class="myslider")
      .calculator__marks.flex-between
        .txt.calculator__marks-min {{ valuePeriodOptions.min }} {{ valuePeriodAfter }} 
        .txt.calculator__marks-max {{ valuePeriodOptions.max }} {{ valuePeriodAfter }} 
  .calculator__footer
</template>

<script>
//import veeno from "veeno"
//import 'nouislider/distribute/nouislider.min.css';
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  name: "Calculator",
  components: {
    VueSlider,
  },
  methods: {
    changeAmount() {
      let sendAmount = this.valueAmount;
      let sendPeriod = this.valuePeriod;
      this.$store.dispatch("calcNewAmount", { sendAmount, sendPeriod });
      //this.$store.dispatch("calcNewAmount", sendAmount);
    },
  },
  data() {
    return {
      valueAmount: 30000,
      valuePeriod: 85,
      valuePeriodAfter: "дн.",
      valueAmountAfter: "₽",
      valueAmountOptions: {
        dotSize: 22,
        min: 1000,
        max: 100000,
        interval: 1000,
        //contained: true,
        tooltip: "none",
        railStyle: { background: "#FFFFFF", cursor: "pointer", height: "6px" },
        processStyle: { background: "black" },
        dotStyle: {
          background: "#FFFFFF",
          border: "4px solid #27A369",
          "border-radius": "100%",
          "box-shadow": "none",
        },
      },
      valuePeriodOptions: {
        dotSize: 22,
        min: 60,
        max: 365,
        interval: 1,
        //contained: true,
        tooltip: "none",
        railStyle: { background: "#FFFFFF", cursor: "pointer", height: "6px" },
        processStyle: { background: "black" },
        dotStyle: {
          background: "#FFFFFF",
          border: "4px solid #27A369",
          "border-radius": "100%",
          "box-shadow": "none",
        },
      },
    };
  },
  computed: {},
};
//-:tooltip="'none'"
</script>

<style lang="scss" scoped>
.slider {
  height: 8px;
  .vue-slider-process {
    background-color: black;
  }
  .vue-slider-rail {
    background-color: black;
  }
}

.calculator {
  padding: 30px;

  &__header {
  }
  &__title {
    padding-bottom: 30px;
  }
  &__body {
  }
  &__item {
    padding-bottom: 30px;
    &-amount {
    }
  }
  &__values {
  }
  &__slider {
  }
  &__marks {
    &-min {
    }
    &-max {
    }
  }
}
</style>
