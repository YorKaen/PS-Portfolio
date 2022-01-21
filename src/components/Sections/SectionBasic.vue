<template lang="pug">
//-section-basic(:src-name="'contacts'" isFull isSplit)
//- template(v-slot:title)
//- template(v-slot:content)
//- template(v-slot:content-left)  template(v-slot:content-right)
section(:class="srcName").clearfix
    .section-container(:class="{'bg-primary': isFill}, isFull ? 'container-full' : 'container'")
        .title(:class="srcName + '__title'" v-if="hasTitleSlot")
            slot(name="title")
        .content(:class="srcName  + '__content'" v-if="hasContentSlot")
            slot(name="content")
        .content-split(:class="srcName  + '__content', howAdaptive" v-if="isSplit")
            .content-left(:class="srcName  + '__content-left'")
                slot(name="content-left")
            .content-right(:class="srcName  + '__content-right'")
                slot(name="content-right")


</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "SectionBasic",
  components: {},
  props: {
    srcName: String,
    isFull: Boolean,
    isFill: Boolean,
    isSplit: Boolean,
    adaptiveMD: { type: Boolean, default: false },
    adaptiveLG: { type: Boolean, default: false },
  },
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
  computed: {
    hasTitleSlot() {
      return !!this.$slots.title;
    },
    hasContentSlot() {
      return !!this.$slots.content;
    },
    howAdaptive() {
      if (this.adaptiveMD) return "adaptive-md";
      if (this.adaptiveLG) return "adaptive-lg";
    },
  },
};
</script>

<style lang="scss" scoped>
.content-split {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  &.adaptive-md {
    display: flex;
    flex-direction: column;
    @include breakpoint(md) {
      display: grid;
    }
  }
  &.adaptive-lg {
    display: flex;
    flex-direction: column;
    @include breakpoint(lg) {
      display: grid;
    }
  }
  .content-left,
  .content-right {
    display: flex;
    width: 100%;
  }
}

//Project Specific
</style>
