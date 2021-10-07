<template lang="pug">
section-basic(:src-name="'block01'" isFull)
    template(v-slot:title)
        .title-container.center-absolute
            h1.txt.txt-white Crypto Wallet
            h3.txt.txt-white.mt-1
                span Лучший
                span.to-hover  wallet
                span  среди не лучших
            button.btn.mt-4(@click="$store.commit('MOVE_TO_BLOCK2')")
                .txt.txt-primary.btn-primary Продолжить
    template(v-slot:content)
        bg-particle
</template>

<script>
// import XXX from "@/components/XXX.vue";
import BgParticle from "../bgParticle";
import SectionBasic from "../../Sections/SectionBasic";
export default {
  name: "Example4Index",
  components: {SectionBasic, BgParticle},
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
//Project Specific
</style>
