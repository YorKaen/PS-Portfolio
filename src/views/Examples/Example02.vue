<template lang="pug">
#example-page-2
    .container-full.bg-white
        nav.nav(:class="{'nav-fixed' : setNavFixed}").conci-nav-fixed.bg-black.w-100
            .container
                .nav-wrapper.d-flex.w-100
                    a(href="#").title-shape.bg-pink-01.p-2
                        .fw-b.logo-font
                            span.txt-underline.txt-black Концы с
                            br
                            span.txt-underline.txt-black Концами
                    .contacts.nav-contacts.d-flex.flex-col
                        .row
                            .col-12.txt-white.nav-contacts__title.center-text Записаться на прием
                        .row
                            .col-12.d-flex.nav-contacts__content.flex-wrap.flex-center
                                .phone.nav-phone.mr-3.d-hide-sm
                                    a(:href="'tel:+71111111111'").txt-white.hover-color
                                        icon-call(:width="'30'" :height="'30'" fill="#fd869c").hover-fill
                                .phone.nav-phone.mr-3.d-hide.d-flex-sm
                                    .d-flex.flex-col
                                        link-phone(:srcLink="'+7 (111) 11-11-111'").txt-white.hover-color
                                        link-phone(:srcLink="'+7 (111) 11-11-111'").txt-white.hover-color
                                    icon-call(:width="'30'" :height="'30'" fill="#fd869c").mr-2.mt-a.mb-a
                                .whatsup.nav-whatsup.mr-3.mt-a.mb-a
                                    a(:href="'#'")
                                        icon-whatsup(:width="'30'" :height="'30'" fill="#fd869c").hover-fill
                                .instagram.nav-instagram.mr-3.mt-a.mb-a
                                    a(:href="'#'")
                                        icon-instagram(:width="'30'" :height="'30'" fill="#fd869c").hover-fill
        section-basic(:src-name="'block-01'" isFull)
            template(v-slot:content)
                .wrapper.h-100.cover-img.d-flex
                    .container.mb-a.mt-a
                        .block-01__title
                            h1.txt
                                span.txt-line-before.txt-small.txt-white студия красоты
                                br
                                span.anim-ping.txt-white "
                                span.txt-line-before.txt.txt-pink Концы с Концами
                                span.anim-ping.txt-white "
        section-basic(:src-name="'block-numbers'" isFull)
            template(v-slot:content)
                .wrapper.d-grid.grid-2
                    .item(v-for='item in dataRunningNumbers' :key="item.id").center-text.p-4
                        text-number-change(:srcNumber="item.setNumber" :toggleRun="setNumbersRunning" :srcExtraText="item.setExtra").number-range.txt-xxl-2
                        .subtitle.txt-xxl-1 {{ item.setSubtitle }}
        section-basic(:src-name="'block-02'" isFull)
            template(v-slot:title)
                .w-100.center-text.px-4
                    h3.txt-black Цены
            template(v-slot:content)
                .wrapper
                    .tabs.d-flex.d-grid-md.grid-4
                        .item-wrap(@click="setActive('hair')")
                            .item.bg-sample-01.hover-bg-image
                                .txt.txt-white  Парикмахер
                        .item-wrap(@click="setActive('cosmet')")
                            .item.bg-sample-01.hover-bg-image
                                .txt.txt-white  Косметология
                        .item-wrap(@click="setActive('manic')")
                            .item.bg-sample-01.hover-bg-image
                                .txt.txt-white  Маникюр
                        .item-wrap(@click="setActive('panic')")
                            .item.bg-sample-01.hover-bg-image
                                .txt.txt-white  Педикюр
                    .tabs-content
                        transition-group(name="list")
                            .container(v-if="activeDataPriceTab.length")
                                .tabs-content__wrapper.wrapper.d-flex.d-grid-md.grid-2
                                    .item(v-for="item in activeDataPriceTab" :key="item.id")
                                        .item__name.txt.txt-black {{item.name}}
                                        .item__fill.dotted
                                        .item__price.txt.txt-black {{item.price}}
        section-basic(:src-name="'block-03'" isFull)
            template(v-slot:content)
                .wrapper.d-flex.d-grid-lg.grid-2
                    .row.row__image.d-flex
                        .w-100.item.bg-sample-02
                    .row.row__info.d-grid.grid-2
                        fluid-block-img(v-for="item in fluidBlocksImgBlock" :key="item.id" :fluidblock="item")
        section-basic(:src-name="'block-04'" isFull).bg-pink-02
            template(v-slot:content)
                .container
                    .wrapper
                        h3.txt.txt-black Оставить заявку на запись
                        form-defam(:btnText="'Записаться'" )
        section-basic(:src-name="'contacts'" )
</template>

<script>
// import XXX from "@/components/XXX.vue";
import SectionBasic from "../../components/Sections/SectionBasic";
import LinkPhone from "../../components/UI/Links/LinkPhone";
import IconInstagram from "../../components/UI/Icons/Instagram";
import IconCall from "../../components/UI/Icons/Call";
import IconWhatsup from "../../components/UI/Icons/Whatsup";
import ImageLazy from "../../components/UI/Images/ImageLazy";
import NavFixedOnScroll from "../../components/Elements/Nav/NavFixedOnScroll";
import { mixinScroll } from "../../components/mixins/mixinScroll";
import TextNumberChange from "../../components/UI/Text/TextNumberChange";
import FluidBlockImg from "../../components/Elements/FluidBlock/FluidBlockImg";
import FormDefam from "../../components/Elements/Form/FromDefam";

export default {
  name: "Example02",
  components: {
    FormDefam,
    FluidBlockImg,
    TextNumberChange,
    NavFixedOnScroll,
    ImageLazy,
    IconWhatsup,
    IconCall,
    IconInstagram,
    LinkPhone,
    SectionBasic,
  },
  mixins: [mixinScroll],
  props: {},
  data: () => ({
    setNavFixed: false,
    setNumbersRunning: false,
    fluidBlocksImgBlock: [
      {
        id: 1,
        imgName: "Conci/block4-1.svg",
        txtLabel: "Lorem Ipsum",
        txtText:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.",
      },
      {
        id: 2,
        imgName: "Conci/block4-1.svg",
        txtLabel: "Lorem Ipsum",
        txtText:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.",
      },
      {
        id: 3,
        imgName: "Conci/block4-1.svg",
        txtLabel: "Lorem Ipsum",
        txtText:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.",
      },
      {
        id: 4,
        imgName: "Conci/block4-1.svg",
        txtLabel: "Lorem Ipsum",
        txtText:
          "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.",
      },
    ],
    dataRunningNumbers: [
      { setNumber: 300, setSubtitle: "Довольных клиентов", setExtra: "+" },
      { setNumber: 400, setSubtitle: "Процедур", setExtra: "+" },
      { setNumber: 100, setSubtitle: "Заплетенных кос", setExtra: "+" },
      { setNumber: 280, setSubtitle: "Окрашенных ногтей", setExtra: "+" },
    ],
    activeTab: {},
    activeDataPriceTab: [],
    dataPriceContentHair: [
      { name: "Стрижка женская", price: "от 400 руб." },
      { name: "Стрижка мужская", price: "от 400 руб." },
      { name: "Окрашивание", price: "от 400 руб." },
      { name: "Стрижка детская", price: "от 400 руб." },
      { name: "Стрижка горячими ножницами", price: "от 2000 руб." },
      { name: "Лифтинг для волос", price: " от 2000 руб." },
      { name: "Оформление бороды", price: " от 250 руб." },
      { name: "Оформление усов", price: " от 50 руб." },
      { name: "Ламинирование волос", price: "от 500 руб." },
      {
        name: "Наращивание волос (горячее, холодное) ленточное",
        price: " от 5000 руб.",
      },
    ],
    dataPriceContentCosmet: [
      { name: "Стрижка женская2", price: "от 400 руб." },
      { name: "Стрижка мужская", price: "от 400 руб." },
      { name: "Окрашивание", price: "от 400 руб." },
      { name: "Стрижка детская", price: "от 400 руб." },
      { name: "Стрижка горячими ножницами", price: "от 2000 руб." },
      { name: "Лифтинг для волос", price: " от 2000 руб." },
      { name: "Оформление бороды", price: " от 250 руб." },
      { name: "Оформление усов", price: " от 50 руб." },
      { name: "Ламинирование волос", price: "от 500 руб." },
      {
        name: "Наращивание волос (горячее, холодное) ленточное",
        price: " от 5000 руб.",
      },
    ],
    dataPriceContentManic: [
      { name: "Стрижка женская3", price: "от 400 руб." },
      { name: "Стрижка мужская", price: "от 400 руб." },
      { name: "Окрашивание", price: "от 400 руб." },
      { name: "Стрижка детская", price: "от 400 руб." },
      { name: "Стрижка горячими ножницами", price: "от 2000 руб." },
      { name: "Лифтинг для волос", price: " от 2000 руб." },
      { name: "Оформление бороды", price: " от 250 руб." },
      { name: "Оформление усов", price: " от 50 руб." },
      { name: "Ламинирование волос", price: "от 500 руб." },
      {
        name: "Наращивание волос (горячее, холодное) ленточное",
        price: " от 5000 руб.",
      },
    ],
    dataPriceContentPanic: [
      { name: "Стрижка женская4", price: "от 400 руб." },
      { name: "Стрижка мужская", price: "от 400 руб." },
      { name: "Окрашивание", price: "от 400 руб." },
      { name: "Стрижка детская", price: "от 400 руб." },
      { name: "Стрижка горячими ножницами", price: "от 2000 руб." },
      { name: "Лифтинг для волос", price: " от 2000 руб." },
      { name: "Оформление бороды", price: " от 250 руб." },
      { name: "Оформление усов", price: " от 50 руб." },
      { name: "Ламинирование волос", price: "от 500 руб." },
      {
        name: "Наращивание волос (горячее, холодное) ленточное",
        price: " от 5000 руб.",
      },
    ],
  }),
  created() {},
  mounted() {},
  methods: {
    setActive: function (name) {
      switch (name) {
        case "hair":
          this.activeDataPriceTab = this.dataPriceContentHair;
          this.activeTab = "hair";
          break;
        case "cosmet":
          this.activeDataPriceTab = this.dataPriceContentCosmet;
          this.activeTab = "cosmet";
          break;
        case "manic":
          this.activeDataPriceTab = this.dataPriceContentManic;
          this.activeTab = "manic";
          break;
        case "panic":
          this.activeDataPriceTab = this.dataPriceContentPanic;
          break;
        default:
          this.activeDataPriceTab = null;
      }
      console.log(name);
    },
    handleScroll() {
      //-345 для проекта, но должно быть удалено на реальном проекте
      if (window.pageYOffset > this.$store.state.global.pageExampleOffset) {
        this.currentOffset =
          window.pageYOffset - this.$store.state.global.pageExampleOffset;
        this.scrollEvents(this.currentOffset);
      } else {
        this.currentOffset = 0;
      }
      //if(this.currentOffset > ){}
    },
    scrollEvents(offset) {
      console.log("scrollEvents Offset = " + offset);
      this.setNavFixed = offset > 220;

      if (offset > 250 && !this.setNumbersRunning) {
        this.setNumbersRunning = true;
      }
    },
  },
};
</script>

<style lang="scss">
//Project Specific
$white: #ffffff;
$pink-1: #f9afbe;
$pink-2: #fd869c;
$pink-3: #e77785;
$pink-4: #dc5b6b;
@import url("https://fonts.googleapis.com/css2?family=Podkova:wght@500&display=swap");
#example-page-2 {
  font-family: "Podkova", serif;
  section {
    padding-top: 0;
  }
  .hover-color {
    &:hover {
      color: $pink-4;
    }
  }
  .hover-fill {
    &:hover {
      fill: $pink-4;
    }
  }
  .bg-sample-01 {
    background: url("~@/assets/img/Conci/block3-1.jpg") no-repeat center;
    background-size: cover;
  }
  .bg-sample-02 {
    background: url("~@/assets/img/Conci/block4-2.jpg") no-repeat center;
    background-size: cover;
  }
  .txt-line-before {
    position: relative;
    isolation: isolate;

    &:before {
      display: none;
      @include breakpoint(sm) {
        display: inline;
      }
      position: absolute;
      content: "";
      bottom: 0.1em;
      width: 100%;
      height: 0.2em;
      background-color: black;
      opacity: 1;
      z-index: -1;
      filter: drop-shadow(-3px -0.1em 3px rgba(0, 0, 0, 1));
      //box-shadow: 0px -20px 17px -10px rgba(0,0,0,0.38);
    }
  }
  .bg {
    &-pink-01 {
      background-color: $pink-1;
    }
    &-pink-02 {
      background-color: $pink-2;
    }
    &-pink-03 {
      background-color: $pink-3;
    }
    &-pink-04 {
      background-color: $pink-4;
    }
  }
  .bg-pink-linear {
    background: linear-gradient(180deg, #191919 0%, #fcd1da 100%);
  }
  .txt-pink {
    color: $pink-3;
  }
  /////////////////////////////////////////////Blocks
  nav {
    &.nav {
      transition: all 0.4s ease-in-out;
      &.nav-fixed {
        position: fixed;
        width: 100%;
        height: auto;
        z-index: 66;
        top: 0;
      }
    }
    .nav-wrapper {
      position: relative;
      transition: margin 700ms ease-in-out;
      justify-content: center;
      @include breakpoint(lg) {
        .nav-contacts {
          margin-right: 30%;
        }
        .title-shape {
          margin-left: 30%;
        }
      }
      .nav-contacts {
        margin-right: 5%;
        margin-left: 2em;
        transition: margin 0.5s ease-in-out;
      }
      .title-shape {
        margin-left: 5%;
        padding: 14px 2em 14px 14px;
        transition: margin 0.5s ease-in-out;
        clip-path: polygon(0% 0%, 79% 0, 100% 50%, 79% 100%, 0% 100%);
      }
    }
    .nav-contacts__title {
      margin-bottom: 1em;
      @include breakpoint(sm) {
        margin-bottom: 0.3em;
      }
    }
    .nav-phone {
      svg {
        order: -1;
      }
      .d-flex:hover + svg {
        fill: $pink-4;
      }
    }
    .logo-font {
      font-size: 1.4em;
    }
    ///////////////////////////fixed-nav
    &.nav-fixed {
      .nav-wrapper {
        transition: all 0.5s ease-in-out;
        justify-content: space-between;
        .title-shape {
          padding: 4px 2em 8px 8px;
          margin-left: 0;
          @include breakpoint(sm) {
            //margin-right: calc(50% - 6px);
          }
        }
        .nav-contacts {
          margin-right: 0;
          margin-left: 20%;
          @include breakpoint(sm) {
            margin-left: 10%;
          }
          @include breakpoint(lg) {
            margin-left: 50%;
            //margin-left: calc(50% - 350px);
          }
        }
      }

      .nav-contacts__content {
        margin-top: 8px;
      }
      .nav-contacts__title {
        display: none;
      }
    }
  }
  /////////////////////////////////////////блок1
  .cover-img {
    background: url("/img/Conci/block1-3.jpg") no-repeat center;
    background-size: cover;
  }
  .block-01 {
    overflow: hidden;
    position: relative;
    .h-100 {
      height: 100%;
      min-height: 200px;
      background-color: $black-1;
      &:after {
        position: absolute;
        content: "";
        inset: 0;
        opacity: 0.8;
        width: 100%;
        height: 100%;
        background-color: $black-1;
      }
      @include breakpoint(md) {
        &:after {
          content: unset;
        }
      }
      @include breakpoint(sm) {
        min-height: 100vh;
      }
    }

    &__title {
      position: relative;
      z-index: 2;
      margin-top: auto;
      margin-bottom: auto;
      font-size: em(26);
      .txt-small {
        line-height: 10px;
        font-size: em(10);
      }
    }
  }
  /////////////////////////////////////////блок numbers
  .block-numbers {
    .wrapper {
      @include breakpoint(md) {
        grid-template-columns: repeat(4, 1fr);
      }
      .item:nth-child(1) {
        background-color: $pink-1;
      }
      .item:nth-child(2) {
        background-color: $pink-2;
      }
      .item:nth-child(3) {
        background-color: $pink-3;
      }
      .item:nth-child(4) {
        background-color: $pink-4;
      }
      .item {
        padding-bottom: 15%;
        padding-top: 15%;
        .number-range {
          font-size: em(30);
        }
        .subtitle {
          font-size: em(18);
        }
        .txt-xxl-1 {
          @include breakpoint(xxl) {
            font-size: 1vw;
          }
        }
        .txt-xxl-2 {
          @include breakpoint(xxl) {
            font-size: 2vw;
          }
        }
      }
    }
  }
  /////////////////////////////////////////блок2
  .block-02 {
    &__title {
      &:before,
      &:after {
        content: "";
        display: block;
        height: 0.5em;
        width: 100%;
        background-color: $pink-1;
      }
      &:after {
        background-color: $pink-4;
      }
    }
    .item-wrap {
      overflow: hidden;
      border: 4px solid $pink-4;
      //width: fit-content;
    }
    .tabs {
      flex-direction: column;
      @include breakpoint(md) {
        display: grid;
      }
      .item {
        padding: 2em 1em;
        width: 100%;
        height: 100%;
        cursor: pointer;

        @include breakpoint(md) {
          padding: 5em 1em;
        }

        &:hover {
          .txt {
            &:before {
              transform: skewX(-18deg);
            }
          }
        }
        .txt {
          text-align: center;
          width: fit-content;
          margin: 0 auto;
          position: relative;
          isolation: isolate;
          font-size: em(24);

          &:before {
            content: "";
            display: inline-block;
            top: -0.5em;
            left: -10%;
            background-color: black;
            width: 120%;
            height: 100%;
            position: absolute;
            opacity: 0.8;
            z-index: -1;
            padding: 1.3em;
            transition: transform 0.5s ease-in-out;
          }
        }
      }
    }
    .tabs-content {
      &__wrapper {
        padding: 2em 0;
        gap: 10px;

        flex-direction: column;
        @include breakpoint(md) {
          gap: 30px;
        }
      }
      .item {
        width: 100%;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 4px;
        font-size: em(20);
        @include breakpoint(sm) {
          white-space: nowrap;
          flex-wrap: nowrap;
        }
        @include breakpoint(md) {
          margin: 0.3em;
          font-size: em(14);
        }
        @include breakpoint(lg) {
          font-size: em(16);
        }
        @include breakpoint(xl) {
          font-size: em(20);
        }
        &__fill {
          border-bottom: dashed 1px #131313;
          width: auto;
          flex: 1 1 100%;
        }
        &__name,
        &__price {
          width: fit-content;
        }
      }
    }
  }
  //последняя скобка окончания вынужденного стиля для этой страницы-отдельного-сайта
}
/////////////////////////////////////////блок3
.block-03 {
  .wrapper {
    flex-direction: column;
    .row__image {
      min-height: 300px;
    }
  }
  .item {
    border: 1px solid rgba(170, 170, 170, 0.5);
    text-align: center;
    padding: 2em 1em;
    &__label {
      margin-bottom: 0.3em;
      margin-top: 0.6em;
    }
    &__text {
      max-width: 25ch;
      margin: 0 auto;
    }
    &__img {
      max-width: 50px;
      margin: 0.5em auto;

      svg {
        fill: $pink-3;
      }
    }
  }
}

/////////////////////////////////////////блок4
.block-04 {
  .wrapper {
    padding: 2em 0;
  }
  form {
    .btn {
      .txt-color-defam {
        color: black;
      }
    }
  }
}
</style>
