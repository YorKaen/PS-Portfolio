<template lang="pug">
.examples
    .examples-bg
        .examples-bg__figure
            sphynx-figure
    .container-full
        .examples-nav.page
            .container.d-flex.flex-col.flex-center
                .page-logo.panel(:class="{loading: !introSkipped}").hover-back.mb-2.mt-2.mr-a.ml-a
                    router-link(to="/" exact)
                        my-logo(:firstColor="'primary'" :second-color="'secondary'" dotIsPinging).main-logo
                .page-content
                    .panel.mr-a.ml-a.p-4.mb-4
                        .txt.txt-white.mb-2.center-text Большая часть моих работ под NDA, но здесь есть несколько примеров
                        .page-content__wrapper.d-grid-lg.grid-2
                            router-link(:to="'/Examples/Example03'" exact)
                                .item.panel.p-2
                                    .item-title.d-flex.flex-row.flex-alight.flex-between.p-1
                                        .txt-primary.txt-1.fw-b.mt-a.mb-a Creditio
                                        image-lazy(:srcImg="'creditio/logo.png'").img-logo
                                    .line
                                    .item-content
                                        .txt.txt-white.txt-2.hover-back
                            router-link(:to="'/Examples/Example01'" exact)
                                .item.panel.p-2
                                    .item-title.d-flex.flex-row.flex-alight.flex-between.p-1
                                        .txt-primary.txt-1.fw-b.mt-a.mb-a Динская Мишура
                                        image-lazy(:srcImg="'difam/LogoMin.png'").img-logo
                                    .line
                                    .item-content
                                        .txt.txt-white.txt-2.hover-back
                            router-link(:to="'/Examples/Example02'" exact)
                                .item.panel.p-2
                                    .item-title.d-flex.flex-row.flex-alight.flex-between.p-1
                                        .txt-primary.txt-1.fw-b.mt-a.mb-a Beauty Studia
                                        image-lazy(:srcImg="'Conci/block4-1.svg'").img-logo
                                    .line
                                    .item-content

                            router-link(:to="'/Examples/Example04'" exact)
                                .item.panel.p-2
                                    .item-title.d-flex.flex-row.flex-alight.flex-between.p-1
                                        .txt-primary.txt-1.fw-b.mt-a.mb-a Crypto Wallet
                                        image-lazy(:srcImg="'crypto/logo.svg'").img-logo
                                    .line
                                    .item-content
                            router-link(:to="'/Examples/Example05'" exact)
                                .item.panel.p-2
                                    .item-title.d-flex.flex-row.flex-alight.flex-between.p-1
                                        .txt-primary.txt-1.fw-b.mt-a.mb-a Double or Nothing!
                                        image-lazy(:srcImg="'logos/dornothLogo.svg'").img-logo
                                    .line
                                    .item-content
                            a(:href="'https://yorkaen.github.io/nuxt-school-beauty/'" target="blank" )
                                .item.panel.p-2
                                    .item-title.d-flex.flex-row.flex-alight.flex-between.p-1
                                        .txt-primary.txt-1.fw-b.mt-a.mb-a Bucklya!
                                        image-lazy(:srcImg="'logos/bucklyaLogo.png'").img-logo
                                    .line
                                    .item-content
        .examples-content
            router-view




</template>

<script>
// import XXX from "@/components/XXX.vue";
import SphynxFigure from "../components/aaThisProject/SphynxFigure";
import MyLogo from "../components/aaThisProject/MyLogo";
import ImageLazy from "../components/UI/Images/ImageLazy";
export default {
  name: "Examples",
  components: { ImageLazy, MyLogo, SphynxFigure },
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
  computed: {
    introSkipped() {
      return this.$store.state.global.skipIntro;
    },
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
.examples {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page {
    z-index: 9000;
    position: relative;
  &-logo {
    max-width: 300px;
  }
  &-content {
    &__wrapper {
      gap: 20px;
        .item{
            margin-bottom: 1.4em;
            transition: border-color 0.2s ease-in-out;
            height: 100%;
            @include breakpoint(lg){
                margin-bottom: unset;
            }
            &:hover{
                border-color: $primary;
            }
            &-title{
                min-height: 60px;
            }
            .img-logo{
                max-height: 45px;
                margin-top: auto;
                margin-bottom: auto;
            }
        }
    }
  }
}
</style>
