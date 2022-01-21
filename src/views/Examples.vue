<template lang="pug">
.examples
    //.examples-bg
        .examples-bg__figure
            sphynx-figure
    .container-full
        .examples-nav.page
            .container.d-flex.flex-col.flex-center
                .page-logo.panel(:class="{loading: !introSkipped}").hover-back.mb-2.mt-2.mr-a.ml-a
                    router-link(to="/" exact)
                        my-logo(:firstColor="'primary'" :second-color="'secondary'" dotIsPinging).main-logo
                .page-content
                    .panel.mr-a.ml-a.p-4.mb-1
                        .txt.txt-white.mb-2.center-text Большая часть моих работ под NDA, но здесь есть несколько примеров, созданные в свободное время.
                        .page-content__wrapper.d-grid-lg.grid-2
                            link-block(v-for="item in sitesArray" :key="item.order" :blockLink="item")
                    .panel.mr-a.ml-a.p-2.mb-2.d-flex.flex-col
                        .txt.txt-white.center-text Небольшой проект, с различными встреченными тестовыми заданиями (что лучше отражает мой навык)
                        a(:href="'https://yorkaen.github.io/PS-Test/'" target="blank").mr-a.ml-a.test-link.txt.txt-white.center-text ===> https://yorkaen.github.io/PS-Test/ &lt===
        .examples-content
            router-view




</template>

<script>
// import XXX from "@/components/XXX.vue";
import SphynxFigure from "../components/aaThisProject/SphynxFigure";
import MyLogo from "../components/aaThisProject/MyLogo";
import ImageLazy from "../components/UI/Images/ImageLazy";
import IconOpenLink from "../components/UI/Icons/OpenLink";
import LinkBlock from "../components/Elements/Block/LinkBlock";

export default {
  name: "Examples",
  components: { LinkBlock, IconOpenLink, ImageLazy, MyLogo, SphynxFigure },
  props: {},
  data: () => ({
    sitesArray: [
      {
        order: 1,
        isRouter: true,
        routerLink: "/Examples/Example03",
        urlLink: "",
        site: {
          siteName: "Creditio",
          isSiteOpening: false,
          siteImg: "creditio/logo.png",
          siteDescription:
            "Адаптивная верстка, Swiper, пошаговая форма с валидацией и слайдерами, смена структуры страницы на мобильном разрешении, плавный аккордеон.",
        },
      },
      {
        order: 2,
        isRouter: true,
        routerLink: "/Examples/Example01",
        urlLink: "",
        site: {
          siteName: "Динская Мишура",
          isSiteOpening: false,
          siteImg: "difam/LogoMin.png",
          siteDescription:
            "Адаптивная верстка, Swiper, бургер, форма с валидацией, карта Яндекса, таблицы не ломающие верстку",
        },
      },
      {
        order: 3,
        isRouter: false,
        routerLink: "",
        urlLink: "https://leadsbroker.ru/",
        site: {
          siteName: "Leadsbroker",
          isSiteOpening: true,
          siteImg: "logos/logo11.svg",
          siteDescription:
            "Адаптивная верстка, формы, сложная адаптивная анимация, слайдеры.",
        },
      },
      {
        order: 4,
        isRouter: false,
        routerLink: "",
        urlLink: "https://yorkaen.github.io/InternetProviderNuxt/",
        site: {
          siteName: "Internet Provider (in work...)",
          isSiteOpening: true,
          siteImg: "logos/logo11.svg",
          siteDescription:
            "Тестовая страница вымышленного интернет провайдера на NUXT.",
          isNuxt: true,
        },
      },
      {
        order: 5,
        isRouter: true,
        routerLink: "/Examples/Example06",
        urlLink: "",
        site: {
          siteName: "NFT Page",
          isSiteOpening: false,
          siteImg: "logos/dornothLogo.svg",
          siteDescription: "",
        },
      },
      {
        order: 6,
        isRouter: false,
        routerLink: "",
        urlLink: "https://yorkaen.github.io/nuxt-school-beauty/",
        site: {
          siteName: "Bucklya",
          isSiteOpening: true,
          siteImg: "logos/logo11.svg",
          siteDescription:
            "Адаптивная верстка, NUXT Bridge, загрузка всех данных через JSON файлы с сервера.",
          isNuxt: true,
        },
      },
    ],
  }),
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
    }
  }
}
.test-link {
  padding: 1em;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: $primary;
    color: $secondary;
  }
}
</style>
