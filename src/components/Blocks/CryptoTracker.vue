<template lang="pug">
.cryptotracker
    transition(name="hide")
        .cryptotracker__loading(v-if="isLoading")
            progress-bar-timer(:timeout="refreshRate")
    .cryptotracker__top.d-flex.flex-row.flex-between
        .cryptotracker__name {{ name }}
        img(loading="lazy", :src="'https://www.cryptocompare.com' + cryptoArray.IMAGEURL + '?width=100'" ).cryptotracker__img.d-none-xl.d-flex-xl
    .cryptotracker__highday
        .line
        .txt.txt-static Дневной максимум
        .txt.txt-dynamic {{ cryptoArray.HIGHDAY }}

    .cryptotracker__price
        .line
        .txt.txt-static Текущая стоимость
        .txt.txt-dynamic(:class="{'txt-red': toFall, 'txt-green': toRise}")  {{ cryptoArray.PRICE }}
        .line
    .cryptotracker__currency-control.d-flex.flex-row.cryptotracker__btns
        button.cryptotracker__btn.btn-currency.fw-b(@click="currency='RUB'") RUB
        button.cryptotracker__btn.btn-currency.fw-b(@click="currency='USD'") USD
        button.cryptotracker__btn.btn-currency.fw-b(@click="currency='EUR'") EUR
    button.btn.cryptotracker__btn(@click="stopUpdate()")
        .txt Остановить обновление

</template>

<script>
//import XXX from "@/components/XXX.vue";
import axios from "axios";
import ProgressBarTimer from "@/components/Utilities/ProgressBarTimer";

export default {
  name: "CryptoTracker",
  components: { ProgressBarTimer },
  data: () => ({
    cryptoArray: {
      PRICE: "..получаем данные",
      HIGHDAY: "..получаем данные",
      IMAGEURL: "/media/37746251/btc.png",
    },
    toFall: false,
    toRise: false,
    doUpdates: true,
    isLoading: true,
  }),
  props: {
    name: String,
    currency: String,
    refreshRate: {
      type: Number,
      default: 10000,
    },
  },
  created() {},
  mounted() {
    this.updateCrypto();
    this.unhide();
  },
  unmounted() {
    this.doUpdates = false;
  },
  methods: {
    updateCrypto() {
      //console.log("Updating...");
      if (this.doUpdates) {
        setTimeout(() => {
          this.getCryptoData();
        }, this.refreshRate);
      }
    },
    unhide() {
      //console.log("UNHIDE");
      setTimeout(() => {
        this.isLoading = false;
      }, this.refreshRate + 2000);
    },
    async getCryptoData() {
      const currentData = {
        name: this.name,
        currency: this.currency,
      };
      const response = await axios.get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currentData.name}&tsyms=${currentData.currency}`
      );
      this.compareValues(
        this.cryptoArray.PRICE,
        response.data.DISPLAY[currentData.name][currentData.currency].PRICE
      );
      this.cryptoArray =
        response.data.DISPLAY[currentData.name][currentData.currency];
      this.updateCrypto();
    },
    compareValues(oldPrice, newPrice) {
      if (newPrice > oldPrice) {
        this.toFall = false;
        this.toRise = true;
      } else if (newPrice < oldPrice) {
        this.toFall = true;
        this.toRise = false;
      } else {
        this.toFall = false;
        this.toRise = false;
      }
    },
    stopUpdate() {
      this.doUpdates = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
.txt-red {
  color: #951313;
}
.txt-green {
  color: #139517;
}
.cryptotracker {
  padding: 25px;
  border: 2px solid $primary;
  position: relative;
  z-index: 1;
  border-radius: 22px;

  &__loading {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 22px;
    top: 0;
    left: 0;
  }
  .line {
    border: 1px solid #c8c8c8;
    margin: 8px 2px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  &__top {
    margin-bottom: 2em;
  }
  .txt-dynamic {
    transition: color 0.4s ease-in-out;
    font-weight: bold;
  }
  &__img {
    position: absolute;
    top: -5px;
    right: -5px;
    z-index: -1;
  }
  &__highday {
    margin-bottom: 0.5em;
  }
  &__name {
    font-size: em(22);
    margin-bottom: 0.4em;
    font-weight: bold;
  }
  .cryptotracker__btn {
    padding: 8px;
    border: 2px solid $primary-90;
    width: 100%;
    transition: box-shadow 0.1s ease-in-out;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    &:hover {
      box-shadow: inset 0px 0px 2px 3px $primary-90;
    }
  }
  &__btns {
    margin: 1em auto;

    .cryptotracker__btn:nth-child(1) {
      border-right-width: 0;
      border-top-left-radius: 22px;
    }
    .cryptotracker__btn:last-child {
      border-left-width: 0;
      border-top-right-radius: 22px;
    }
  }
}
</style>
