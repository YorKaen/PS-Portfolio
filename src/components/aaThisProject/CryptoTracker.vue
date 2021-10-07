<template lang="pug">
.cryptotracker
    transition(name="hide")
        .cryptotracker__loading(v-if="isLoading")
            progress-bar-timer(:timeout="2000")
    .cryptotracker__top.d-flex.flex-row.flex-between
        .cryptotracker__name.txt-white {{ name }}
        img(loading="lazy", :src="'https://www.cryptocompare.com' + cryptoArray.IMAGEURL + '?width=100'" ).cryptotracker__img.d-none-xl.d-flex-xl
    .cryptotracker__highday
        .line
        .txt.txt-static.txt-white Дневной максимум
        .txt.txt-dynamic {{ cryptoArray.HIGHDAY }}
    .cryptotracker__price
        .line
        .txt.txt-static.txt-white Текущая стоимость
        .txt.txt-dynamic(:class="{'txt-red': toFall, 'txt-green': toRise}")  {{ cryptoArray.PRICE }}
        .line
    .cryptotracker__currency-control.d-flex.flex-row.cryptotracker__btns
        button.cryptotracker__btn.btn-currency.fw-b(@click="forceUpdate('RUB')").txt-white RUB
        button.cryptotracker__btn.btn-currency.fw-b(@click="forceUpdate('USD')").txt-white USD
        button.cryptotracker__btn.btn-currency.fw-b(@click="forceUpdate('EUR')").txt-white EUR
    button.btn.cryptotracker__btn(@click="stopUpdate()")
        .txt.txt-white Остановить обновление
    button.btn.cryptotracker__btn.mt-2(@click="$emit('delete-item', index)")
        .txt.txt-white Удалить этот элемент

</template>

<script>
//import XXX from "@/components/XXX.vue";
import axios from "axios";
import ProgressBarTimer from "@/components/Elements/ProgressBar/ProgressBarTimer";

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
    thisCurrency: "RUB",
  }),
  props: {
    index: String,
    name: {
      type: String,
      default: "BTC",
    },
    currency: {
      type: String,
      default: "RUB",
    },
    refreshRate: {
      type: Number,
      default: 5000,
    },
  },
  created() {},
  mounted() {
    this.firstSetup();
    this.unhide();
  },
  unmounted() {
    this.doUpdates = false;
  },
  methods: {
    forceUpdate(cur) {
      this.thisCurrency = cur;
      this.getCryptoData();
    },
    firstSetup() {
      this.getCryptoData();
      this.updateCrypto();
    },
    updateCrypto() {
      if (this.doUpdates) {
        setTimeout(() => {
          this.getCryptoData();
        }, this.refreshRate);
      }
    },
    unhide() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    async getCryptoData() {
      const currentData = {
        name: this.name,
        currency: this.thisCurrency,
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
//@import "@/assets/scss/project/mixins.scss";
.txt-red {
  color: #951313;
}
.txt-green {
  color: #139517;
}
.cryptotracker {
  padding: 25px;
  border: 2px solid #febf32;
  position: relative;
  z-index: 1;
  border-radius: 22px;
  background-color: #5e5e5e;
  &__loading {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #121212;
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
    border: 2px solid #febf32;
    width: 100%;
    transition: box-shadow 0.1s ease-in-out;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    &:hover {
      box-shadow: inset 0px 0px 2px 3px #febf32;
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
