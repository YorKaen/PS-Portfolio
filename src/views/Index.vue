<template lang="pug">
.index
    .index-bg
        .index-bg__figure
            sphynx-figure(:class="{isAnimated: !introSkipped}")
        .index-bg__blobs
    .index-content
        .container
            .page.index-page.d-grid
                .page-logo.panel(:class="{loading: !introSkipped}").hover-back
                    router-link(to="/" exact)
                        my-logo(:firstColor="'primary'" :second-color="'secondary'" dotIsPinging wordsAppear).main-logo
                .page-nav.d-flex(:class="{loading: !introSkipped}")
                    router-link(to="/Examples").link.panel.p-2.txt-primary.hover-back-fill Примеры
                .page-content.panel(:class="{loading: !introSkipped}")
                    progress-bar-timer(:timeout="2000" ref="timer")
                    component(:is="componentArray[currentIndex]" :class="{hide: isChangingComponents}")
                .page-button-slide
                    .page-button-slide__wrapper.d-flex.flex-center.center-x-absolute.flex-row
                        transition-group(name="right")
                            button-roll-down(v-if="currentIndex !== maxIndex && introSkipped" @click="allowChangeComponent ? scrollDown() : ''")
                            button-roll-up(v-if="currentIndex !== 0" @click="allowChangeComponent ? scrollUp() : ''")
                .page-side(:class="{loading: !introSkipped}")

</template>

<script>
// import XXX from "@/components/XXX.vue";
import { defineAsyncComponent, defineComponent } from "vue";
import ImageLazy from "../components/UI/Images/ImageLazy";
import SphynxFigure from "../components/aaThisProject/SphynxFigure";
import MyLogo from "../components/aaThisProject/MyLogo";
import ButtonRollDown from "../components/UI/Buttons/ButtonRollDown";
import ButtonRollUp from "../components/UI/Buttons/ButtonRollUp";
import ProgressBarTimer from "../components/Elements/ProgressBar/ProgressBarTimer";
export default {
  name: "Index",
  components: {
    ProgressBarTimer,
    ButtonRollUp,
    ButtonRollDown,
    About: defineAsyncComponent(() =>
      import("../components/aaThisProject/PageIndex/About")
    ),
    Welcome: defineAsyncComponent(() =>
      import("../components/aaThisProject/PageIndex/Welcome")
    ),
    Skills: defineAsyncComponent(() =>
      import("../components/aaThisProject/PageIndex/Skills")
    ),
    MyLogo,
    SphynxFigure,
    ImageLazy,
  },
  props: {},
  data: () => ({
    allowChangeComponent: false,
    currentIndex: 0,
    componentArray: [],
    maxIndex: null,
    startTimeoutValue: 7000,
    isChangingComponents: false,
  }),
  created() {
    this.componentArray.push("Welcome");
    this.componentArray.push("Skills");
    this.componentArray.push("About");
  },
  mounted() {
    this.maxIndex = this.componentArray.length - 1;
    if (this.$store.state.global.skipIntro) {
      this.startTimeoutValue = 3000;
    }
    this.skipIntro(this.startTimeoutValue);
    this.allowChangeComponentTimeout(this.startTimeoutValue);
    document.addEventListener.call(window, "wheel", (event) => {
      if (
        event.deltaY < 0 &&
        this.allowChangeComponent &&
        this.currentIndex > 0
      ) {
        this.scrollUp();
      } else if (
        event.deltaY > 0 &&
        this.allowChangeComponent &&
        this.currentIndex < this.maxIndex
      ) {
        this.scrollDown();
      } else {
      }
    });
  },
  computed: {
    introSkipped() {
      return this.$store.state.global.skipIntro;
    },
  },
  methods: {
    scrollUp() {
      setTimeout(() => {
        this.currentIndex -= 1;
      }, 1000);
      this.isChangingComponents = true;
      this.toggleCurrentComponent();
    },
    scrollDown() {
      setTimeout(() => {
        this.currentIndex += 1;
      }, 1000);
      this.isChangingComponents = true;
      this.toggleCurrentComponent();
    },
    toggleCurrentComponent() {
      this.allowChangeComponent = false;
      this.allowChangeComponentTimeout(4000);
      this.toggleChangingComponents();
    },
    skipIntro(timeoutValue) {
      setTimeout(() => {
        this.$store.commit("SKIP_INTRO");
      }, timeoutValue);
    },
    allowChangeComponentTimeout(timeoutValue) {
      setTimeout(() => {
        this.allowChangeComponent = true;
      }, timeoutValue);
    },
    toggleChangingComponents() {
      this.$refs.timer.restartBar();
      setTimeout(() => {
        this.isChangingComponents = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
.index {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  &-content {
  }
  .loading {
    //width: 0;
    border: 0;
    box-shadow: none;
    background-color: transparent;
    transform: scaleX(0);
    transform-origin: 50%;
  }
  .panel {
    transition: all 1.3s ease-in-out;
  }
}

.page {
  display: grid;
  grid-template-columns: auto 2fr auto;
  grid-template-rows: 0.1fr 60px 0.5fr 2fr;
  gap: 10px 10px;
  position: relative;
  grid-template-areas:
    ". . ."
    ". page-logo page-nav"
    ". page-content page-content"
    ". page-content page-content";
  @include breakpoint(md) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 0.1fr 80px 1fr 1fr;
    grid-template-areas:
      ". . ."
      "page-logo page-nav page-nav"
      "page-content page-content page-content"
      "page-content page-content page-content";
  }
  @include breakpoint(xl) {
    grid-template-columns: 0.5fr 2fr 0.5fr;
    gap: 20px 20px;
    grid-template-areas:
      ". . ."
      "page-logo page-content page-side"
      "page-nav page-content page-side"
      "page-nav page-content page-side"
      ". page-btn .";
  }
  &-button-slide {
    grid-area: page-btn;
    &__wrapper {
      margin-top: -4em;
      position: fixed;
      .btn:first-child {
        margin-right: 1em;
      }
    }
  }
  &-nav {
    grid-area: page-nav;
    @include breakpoint(xl) {
    }
    .link {
      font-size: 1.3em;
      width: auto;
      height: 100%;
      font-weight: 500;
      @include breakpoint(xl) {
        max-height: 70px;
      }
    }
  }
  &-logo {
    grid-area: page-logo;
  }
  &-side {
    grid-area: page-side;
  }
  &-content {
    grid-area: page-content;
    min-height: 400px;
    @include breakpoint(xl) {
      min-height: 490px;
    }
  }
}
</style>
