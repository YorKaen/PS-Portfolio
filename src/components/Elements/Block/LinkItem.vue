<template lang="pug">
.item.panel.p-2
    .item-title.d-flex.flex-row.flex-alight.flex-between.p-1
        .shade-txt.txt-secondary(v-if="site.isNuxt") NUXT
        .txt-title.d-flex.flex-alight
            .txt-primary.txt-1.fw-b.mt-a.mb-a.mr-1 {{ site.siteName }}
            icon-open-link(v-if="site.isSiteOpening" :width="'18'" :height="'18'" fill="#ffffff")
        image-lazy(:srcImg="site.siteImg").img-logo
    .line
    .item-content
        .txt.txt-white.txt-2.hover-back {{ site.siteDescription }}

</template>

<script>
// import XXX from "@/components/XXX.vue";
import ImageLazy from "../../UI/Images/ImageLazy";
import IconOpenLink from "../../UI/Icons/OpenLink";

export default {
  name: "LinkItem",
  components: { IconOpenLink, ImageLazy },
  props: {
    site: {
      type: Object,
    },
  },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
//Project Specific
</style>
