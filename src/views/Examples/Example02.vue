<template lang="pug">
.example.example-02.container-fluid.bg-white
    nav.bg-primary
        .container-fluid
            .nav.flex.flex-row.flex-between
                my-logo(:firstColor="'white'" :secondColor="'white'" dotIsPinging)
    section.crypto.block.block-01#block-01
        .container
            .block-01__wrapper
                .block-01__title
                    h1.title.txt.txt-black Отслеживание криптовалют
                .block-01__content
                    .txt.txt-black Получение актуальных данных котировок с криптовалютных бирж.
                    .txt.txt-black При запуске происходит получение данных с сервера, предусмотрено получение ошибки, цвет меняется в зависимости от падения или роста крипты.
                    .txt.txt-black Можно добавлять в пару кликов новую криптовалюту(в процессе), менять скорость обновления, останавливать обновление, менять валюту.
    section.crypto.block.block-02#block-02
        .container.crypto-container
            .crypto-wrapper.d-grid.grid-md-2.grid-lg-4.gap-30
                CryptoTracker(:name="'BTC'" :currency="'RUB'" :refreshRate="5000")
                CryptoTracker(:name="'ETH'" :currency="'RUB'" :refreshRate="5010")
                CryptoTracker(:name="'DOGE'" :currency="'RUB'" :refreshRate="5020")
                CryptoTracker(:name="'SOL'" :currency="'RUB'" :refreshRate="5030")


//https://gitlab.com/vuejs-club/youtube-course/cryptonomicon/-/blob/lesson3/src/App.vue
//https://github.com/rachidsakara/vue-crypto-app/blob/master/src/components/Home.vue
</template>

<script>
//import XXX from "@/components/XXX.vue";
import CryptoTracker from "@/components/Blocks/CryptoTracker";

export default {
  name: "Example02",
  components: { CryptoTracker },
  data: () => ({
    cryptoArrayBasic: [],
    cryptoNames: ["BTC", "ETH", "DOGE", "SOL"],
  }),
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";

.example {
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: calc(100vh - 220px);
  .block-01 {
    &__wrapper {
      padding: 25px;
    }
  }
  nav {
    padding: 15px 25px;
  }
}
.crypto {
  &-wrapper {
    padding: 25px;
  }
}
</style>
