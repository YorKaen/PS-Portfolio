<template lang="pug">
.link-block.h-100
    .link-block__content-router(v-if="blockLink.isRouter").h-100
        router-link(:to="blockLink.routerLink" exact)
            link-item(:site="blockLink.site")
    .link-block__content-link(v-else).h-100
        a(:href="blockLink.urlLink" target="blank" )
            link-item(:site="blockLink.site")

</template>

<script>
// import XXX from "@/components/XXX.vue";
import LinkItem from "../../Elements/Block/LinkItem";

export default {
  name: "LinkBlock",
  components: { LinkItem},
  props: { blockLink: Object },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.item {
  margin-bottom: 1.4em;
  transition: border-color 0.2s ease-in-out;
  height: 100%;
  position: relative;
  isolation: isolate;
  @include breakpoint(lg) {
    margin-bottom: unset;
  }
  .shade-txt {
    position: absolute;
    font-size: 5em;
    font-weight: bold;
    z-index: -1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.3;
  }
  &:hover {
    border-color: $primary;
  }
  &-title {
    min-height: 60px;
  }
  .img-logo {
    max-height: 45px;
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
