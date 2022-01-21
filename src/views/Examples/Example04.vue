<template lang="pug">
#example-page-4
    .index-page.bg-black
        section-basic(:src-name="'nav'" isFull)
            template(v-slot:content)
                .wrapper.d-flex.flex-col.bg-shade
                    .logo.py-1.bg-gray
                        a(href="#")
                            image-lazy(:srcImg="'crypto/logo.svg'").p-4.logo-crypto
                    .container.nav-container
                        .user-nav(v-if="$store.state.crypto.isAuth").nav-item.fill.d-flex.flex-between
                            .wallet.mb-a.mt-a
                                .icon.wallet-icon.d-flex
                                    <svg class="mt-a mb-a" width="35" height="32" viewBox="0 0 25 22" fill="#febf32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5195 4.6875H3.90625C3.47461 4.6875 3.125 4.33789 3.125 3.90625C3.125 3.47461 3.47461 3.125 3.90625 3.125H22.6562C23.0879 3.125 23.4375 2.77539 23.4375 2.34375C23.4375 1.04932 22.3882 0 21.0938 0H3.125C1.39893 0 0 1.39893 0 3.125V18.75C0 20.4761 1.39893 21.875 3.125 21.875H22.5195C23.8877 21.875 25 20.8237 25 19.5312V7.03125C25 5.73877 23.8877 4.6875 22.5195 4.6875ZM20.3125 14.8438C19.4497 14.8438 18.75 14.144 18.75 13.2812C18.75 12.4185 19.4497 11.7188 20.3125 11.7188C21.1753 11.7188 21.875 12.4185 21.875 13.2812C21.875 14.144 21.1753 14.8438 20.3125 14.8438Z"/>
                                    </svg>
                                .number.wallet-number
                                    .txt.txt-primary {{ idWallet }}
                            button.btn.btn-primary(@click="$store.commit('UNAUTHORIZE_USER') ").d-flex.mt-a.mb-a
                                .txt.txt-uppercase.fw-m.mr-1 выйти
                                exit-enter(isExit="true" :width="'20'" :height="'20'" fill="#febf32")
                        .guest-nav(v-else="$store.state.crypto.isAuth").nav-item.fill.d-flex.flex-end
                            button.btn.btn-primary(@click="$store.commit('AUTHORIZE_USER') ").d-flex.mt-a.mb-a
                                .txt.txt-uppercase.fw-m.mr-1 войти
                                exit-enter(isEnter="true" :width="'20'" :height="'20'" fill="#febf32")
        transition(name="hide")
            .index-page__content(v-is="$store.state.crypto.currentComponent")

</template>

<script>
// import XXX from "@/components/XXX.vue";
import SectionBasic from "../../components/Sections/SectionBasic";
import ImageLazy from "../../components/UI/Images/ImageLazy";
import ExitEnter from "../../components/UI/Icons/Exit-Enter";

export default {
  name: "Example04",
  components: {
    ExitEnter,
    ImageLazy,
    SectionBasic,
  },
  props: {},
  data: () => ({
    idWallet: "",
  }),
  created() {},
  mounted() {
    this.idWallet = this.generateId();
  },
  methods: {
    generateId() {
      let max = 10000;
      let min = 100;
      let d = new Date();
      return (
        "RANDOM-" +
        (Math.floor(Math.random() * (max - min + 1)) + min) +
        "" +
        d.getDate() +
        "" +
        "00000" +
        (Math.floor(Math.random() * (max - min * 5)) + min) +
        "-" +
        (Math.floor(Math.random() * (min * 15)) + min)
      );
    },
  },
};
</script>

<style lang="scss">
#example-page-4 {
  section {
    position: relative;
  }
  $primary: #febf32;
  $secondary: #60d313;
  .index-page {
    section {
      padding-top: 0;
    }
    .txt-primary {
      color: #febf32;
    }
    .bg-primary {
      background-color: #febf32;
    }
    .bg-gray {
      background-color: #5e5e5e;
    }
    .bg-shade {
      background-color: #303030;
    }
    .btn-primary {
      color: $primary;
      padding: 12px 24px;
      border: 2px solid $primary;
      &:hover {
        color: black;
        background-color: $primary;
        svg {
          fill: black;
        }
      }
    }
  }
  .title {
  }
  .title-container {
    position: absolute;
    z-index: 3;

    &:hover {
      .to-hover {
        color: $primary;
      }
    }
  }

  //Project Specific

  ///////////
  .nav {
    .wallet {
      display: flex;
      flex-direction: row;
      align-content: center;
      &-number {
        font-weight: 500;
        margin-left: 1em;
        font-size: em(22);
      }
    }
    &-container {
      padding: 1em;
      .nav-item {
        flex-direction: column-reverse;
        @include breakpoint(md) {
          flex-direction: row;
        }
        .wallet {
          padding-top: 2em;
          @include breakpoint(md) {
            padding-top: 0;
          }
        }
      }
    }
    .wrapper {
      @include breakpoint(lg) {
        flex-direction: row;
      }
    }
    .logo-crypto {
      width: 14em;
      margin: 0 auto;
      @include breakpoint(lg) {
        margin: 0;
      }
    }
  }

  ///////////
}
</style>
