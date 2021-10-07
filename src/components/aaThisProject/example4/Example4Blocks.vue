<template lang="pug">
section-basic(:src-name="'block02'" isFull)
    template(v-slot:title)
    template(v-slot:content)
        .crypto-wrapper.d-grid.grid-md-2.grid-lg-4.gap-30.p-4
            crypto-tracker(v-for="(item, index) in dataCrypto" :key="index" :name="item.name" :currency="item.currency" :index="index" v-on:delete-item="deleteItem")
            .crypto-add.d-flex.flex-col
                .crypto-add__title
                    h4.txt.txt-white Добавить новый элемент
                .crypto-add__name-input.mt-a.mb-a
                    .txt.txt-white.mb-2 Добавьте название существующей криптовалюты для отслеживания
                    input(v-model="newCryptoName" placeholder="BTC, DOGE, SOL").form-input
                .crypto-add__create.mt-a
                    button.btn.btn-crypto(@click="addNewCrypto()")
                        .txt.txt-white.px-2.py-4 Добавить
</template>

<script>
// import XXX from "@/components/XXX.vue";
import BgParticle from "../bgParticle";
import SectionBasic from "../../Sections/SectionBasic";
import CryptoTracker from "../CryptoTracker";
export default {
  name: "Example4Blocks",
  components: { CryptoTracker, SectionBasic },
  props: {},
  data: () => ({
    dataCrypto: [
      { name: "BTC", currency: "RUB" },
      { name: "ETH", currency: "RUB" },
    ],
    newCryptoName: "",
  }),
  created() {},
  mounted() {},
  methods: {
    addNewCrypto() {
      if (this.newCryptoName) {
        this.dataCrypto.push({ name: this.newCryptoName, currency: "RUB" });
        this.newCryptoName = "";
      }
    },
      deleteItem(index){
          this.dataCrypto.splice(index, 1);
      }
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
.crypto-wrapper {
  margin: 60px auto;
}
.crypto-add {
  padding: 25px;
  border: 2px solid #febf32;
  position: relative;
  z-index: 1;
  border-radius: 22px;
  background-color: #5e5e5e;
  min-height: 400px;
  &__title {
  }
  &__name-input {
    width: 100%;
    input {
      width: 100%;
      padding: 0 15px;
      //font-size: 20px;
      //font-weight: bold;
      outline: 0;
      background: white;
      box-shadow: none;
      border-radius: 10px;
      border: 2px solid #febf32;
    }
  }
  &__create {
    display: flex;
    .btn-crypto {
      margin: 0 auto;
      border: 2px solid #febf32;
    }
  }
}
</style>
