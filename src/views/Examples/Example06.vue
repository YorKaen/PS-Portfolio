<template lang="pug">
#example-page-6
    .example06
        nav#nav.nav.pt-0.mt-0.clearfix.bg-black
            //section(:src-name="'hero'" isFull)#hero.clearfix
            .nav__container.container.py-5.d-flex.flex-between
                .nav-split__left.d-flex
                    .nav-logo.mr-5
                        image-lazy(:srcImg="'nft/logo.png'")
                    .nav-links.d-flex.flex-between.flex-alight
                        a(href="#").fw-m.txt.txt-white.p-1.hover-color Features
                        a(href="#").fw-m.txt.txt-white.p-1.hover-color Community
                        a(href="#").fw-m.txt.txt-white.p-1.hover-color About Us
                        a(href="#").fw-m.txt.txt-white.p-1.hover-color Faqs
                .nav-split__right.d-flex.flex-between
                    .nav-icons.d-flex.flex-between.flex-alight
                        a(href="#").social-icon.bg-white.r-full.d-flex.flex-center
                            image-lazy(:srcImg="'nft/social-1.svg'")
                        a(href="#").social-icon.bg-white.r-full.d-flex.flex-center
                            image-lazy(:srcImg="'nft/social-2.svg'")
                        a(href="#").social-icon.bg-white.r-full.d-flex.flex-center
                            image-lazy(:srcImg="'nft/social-3.svg'")
                        a(href="#").social-icon.bg-white.r-full.d-flex.flex-center
                            image-lazy(:srcImg="'nft/social-4.svg'")
                    .nav-discord.d-flex.flex-alight
                        a(href="#").btn.nav-discord__button.nft-button.nft-button__white.txt-black
                            .nft-button__body.bg-white.d-flex.flex-row.r-5
                                .txt.txt-allcaps.fw-b.mr-1 JOIN OUR DISCORD
                                image-lazy(:srcImg="'nft/arrow-next.svg'")
        section-basic(:src-name="'hero'" isFull).clearfix.bg-hero.o-hidden
            template(v-slot:content)
                .hero__container.pos-relative.d-flex.wrap.container
                    .hero-bg
                        image-lazy(:srcImg="'nft/bg-lines-full.svg'")
                    .hero-info.w-100
                        h1.hero-info__title.mb-3 Shop our latest collection of 10000 billionaire apes NFTs
                        .hero-info__text.mb-5.txt-1.txt-gray.op-60 Earlier this year, a mysterious force coming from another galaxy summoned the most influential people on planet Earth to a secret party. Acquiring one of them will give you access to an ever-growing community of investors and entrepreneurs.
                        a(href="#").btn.nav-discord__button.nft-button.nft-button__colored.txt-white.d-flex.flex-alight
                            .nft-button__body.bg-grad-btn.d-flex.flex-row.r-5.p-2
                                .txt.txt-allcaps.fw-b.mr-2 VIEW COLLECTION
                                image-lazy(:srcImg="'nft/arrow-next-w.svg'")
                    .hero-image.w-100
                        image-lazy(:srcImg="'nft/hero.png'")
                    .hero-footer.w-100.d-flex.flex-between.flex-alight
                        .hero-footer__item.d-flex.txt-grad-lp
                            .txt.txt-1
                                span.fw-b 180+ 
                                span hand drawn traits
                        .hero-footer__item
                            .dot
                        .hero-footer__item.d-flex.txt-grad-lp
                            .txt.fw-b.txt-1 5.5k
                            .txt.txt-1 owners
                        .hero-footer__item
                            .dot
                        .hero-footer__item.d-flex.txt-grad-lp
                            .txt.fw-b.txt-1 10.3k
                            .txt.txt-1 items
        section-basic(:src-name="'main-window'").clearfix
            template(v-slot:content)
                .main-window__container.d-grid
                    .main-window__sort
                    .main-window__menu
                        .nft-item
                    .main-window__display
        section-basic(:src-name="'offer'").clearfix
            template(v-slot:content)
                .offer__container
                    h3.offer-title
                        span Let’s keep you up
                        span to date
                    .offer-text
                        .txt.txt-1 With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
                    .offer-text
                        .txt.fw-b.txt-white Be the first to know when we add new NFTs are added to the store!
                    .offer-action
                        input.form-input
                        button.btn.nft-button__colored
        footer#footer.clearfix
            .container-full

</template>

<script>
// import XXX from "@/components/XXX.vue";
import SectionBasic from "../../components/Sections/SectionBasic";
import ImageLazy from "../../components/UI/Images/ImageLazy";
import ImageSVG from "../../components/UI/Images/ImageSVG";

export default {
  name: "Example03",
  components: {
    ImageSVG,
    ImageLazy,
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
//this example variables and styles with variables
#example-page-6 {
  $black-1: #010101;

  $primary: #f1a4fa;

  $secondary: #80eff5;

  $gradient-ps: linear-gradient(180deg, rgba($primary, 1), rgba($secondary, 1));
  $gradient-lp: linear-gradient(0deg, #a55bf6 33.85%, #fdfdfd 99.99%);

  $gradient-hero: linear-gradient(
    95.38deg,
    #2c1970 37.19%,
    #2c1970 64.54%,
    #010101 84.63%
  );

  $gradient-btn: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);

  $gray: #dde2ff;

  .txt-gray {
    color: $gray;
  }
  .bg-black {
    background-color: $black-1;
  }

  .hover-color {
    &:hover {
      color: $primary;
    }
  }

  .bg-hero {
    background: $gradient-hero;
  }

  .bg-grad-btn {
    background: $gradient-btn;
  }
  .bg-text {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .txt-grad-lp {
    background: $gradient-lp;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    background: $gradient-ps;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: em(48);
  }
}

///page specific
.bg-primary {
  background-color: #7183e5;
}
.txt-3 {
  font-size: em(22);
}

.dot {
  width: 4px;
  height: 4px;
  margin: auto 0;
  border-radius: 100%;
  background-color: $white;
}
//Project Specific
.example06 {
  .nft-button {
    &__body {
      font-size: em(9);
      font-weight: bold;
      line-height: 20px;
      padding: em(14) em(25);
    }
  }

  .nav {
    &__container {
      flex-wrap: wrap;
      @include breakpoint(lg) {
        flex-wrap: nowrap;
      }
      .nav-split__left {
        width: 100%;
      }
      .nav-split__right {
        width: 100%;
        margin-top: 2em;
        @include breakpoint(lg) {
          margin-top: 0;
          justify-content: flex-end;
        }
      }
    }
    &-links {
      width: em(500);
      @include breakpoint(xl) {
        width: em(528);
      }
    }
    &-icons {
      width: em(240);
      @include breakpoint(xl) {
        margin-right: em(50);
      }
    }
    .social-icon {
      width: 40px;
      height: 40px;
      padding: em(11);
      align-self: center;
      margin-right: 12px;
    }
  }

  .hero {
    .nft-button__body {
      font-size: em(14);
      padding: em(23) em(40);
    }
    &-bg {
      position: absolute;
      top: -56px;
      @include breakpoint(md) {
        top: -60px;
      }
      @include breakpoint(lg) {
        top: -120px;
      }
      @include breakpoint(xl) {
        top: -180px;
      }
    }
    &-info {
      @include breakpoint(lg) {
        max-width: 46%;
      }
    }
    &-image {
      display: none;
      @include breakpoint(lg) {
        display: block;
        z-index: 1;
        max-width: 54%;
      }
    }

    &-footer {
      @include breakpoint(sm) {
        max-width: 550px;
      }
      @include breakpoint(xl) {
        max-width: 40%;
      }
      margin-top: em(90);
      margin-bottom: em(50);
    }
  }
}
</style>
