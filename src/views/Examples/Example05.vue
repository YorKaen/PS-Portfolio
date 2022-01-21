<template lang="pug">
#example-page-5
    .dorn-page.bg-brick
        section-basic(:src-name="'dorn'" isFull).pt-4
            template(v-slot:content)
                .wrapper-dorn.txt-center.p-4.blue-box-full
                    h1.txt-primary.txt-allcaps
                        span.shadow-neon Do
                        span.anim-flicker.shadow-neon(:style="getRandomDelay()") u
                        span.shadow-neon ble
                        span.shadow-neon  o
                        span.shadow-neon.anim-flicker(:style="getRandomDelay()") r
                        span.shadow-neon  no
                        span.shadow-neon.anim-flicker(:style="getRandomDelay()") th
                        span.shadow-neon ing!
        section-basic(:src-name="'display'")
            template(v-slot:content)
                .wrapper-display.mr-a.ml-a.blue-box.bg-dark.p-4.d-grid.center-text
                    .row.d-flex.flex-col.mb-4
                        h2.txt-white.txt БАНК
                        h3.txt.txt-primary {{ Bank }}
                    .row.d-flex.flex-col.mb-4
                        h2.txt-white.txt Ваш Баланс
                        h3.txt.txt-primary {{ Balance }}
                    .row.d-flex.mb-4.flex-center
                        h3.txt.txt-secondary.txt-allcaps(v-if="Streak > 0") Double X {{ Streak }}
                        h3.txt.txt-danger.txt-allcaps(v-else, :class="hideClass").hide {{ txtResult }}
                    .row.d-flex.mb-4.flex-center.trans
                        button.btn(@click="rollDouble()" :class="{isDisabled: !clickAllowed}" :disabled="!clickAllowed")
                            .txt-1.txt-white(v-if="Streak < 1") Начать игру
                            .txt-1.txt-white(v-else) Увеличить ставку
                        transition(name="right")
                            button.btn(@click="takeBank()"  :disabled="!clickAllowed" v-if="Bank > 0").ml-4
                                .txt-1.txt-white Забрать
        section
</template>

<script>
// import XXX from "@/components/XXX.vue";
import SectionBasic from "../../components/Sections/SectionBasic";
import ImageLazy from "../../components/UI/Images/ImageLazy";
export default {
  name: "Example05",
  components: {
    ImageLazy,
    SectionBasic,
  },
  props: {},
  data: () => ({
    Balance: 1000,
    Bank: 0,
    ScoreMultiplier: 5,
    Streak: 0,
    clickAllowed: true,
    txtResult: "",
    hideClass: "hide-not",
  }),
  created() {},
  mounted() {},
  methods: {
    smoothNumber(strtnum, endnum) {
      if (strtnum <= endnum) {
        this.Bank = strtnum;
        setTimeout(() => {
          this.smoothNumber(strtnum + 1, endnum);
        }, 20);
      }
      if (strtnum === endnum) {
        this.clickAllowed = true;
      }
    },
    rollDouble() {
      if (this.Balance > 0) {
        this.hideClass = "hide-not";
        this.txtResult = "Роллим";
        this.clickAllowed = false;
        this.Balance -= this.ScoreMultiplier;
        this.checkStreak();
        let startNumber = this.Bank;
        let endNumber = this.Bank;
        endNumber += this.Streak * this.ScoreMultiplier;
        this.smoothNumber(startNumber, endNumber);
      } else this.txtResult = "Баланс на нуле";
    },
    checkStreak() {
      let Doubleornothing = Math.floor(Math.random() * (100 - 1 + 1));
      if (Doubleornothing >= 30) {
        return this.Streak++;
      } else {
        this.hideDelay();
        this.txtResult = "NOTHING";
        this.Streak = 0;
        this.Bank = 0;
        return this.Streak;
      }
    },
    takeBank() {
      this.Balance += this.Bank;
      this.txtResult = "Пополняем банк на " + this.Bank;
      this.hideDelay();
      this.Bank = 0;
      this.Streak = 0;
    },
    getRandomDelay() {
      return { animationDelay: Math.floor(Math.random() * 5) + 1 + "s" };
    },
    hideDelay() {
      setTimeout(() => {
        this.hideClass = "hide-this";
      }, 200);
    },
  },
  computed: {},
};
</script>

<style lang="scss">
#example-page-5 {
  $blue-neon: rgb(10, 155, 222);
  user-select: none;
  .bg-dark {
    background-color: $dark-1;
  }
  .bg-brick {
    background-color: rgb(28, 29, 28);
    background-image: linear-gradient(335deg, black 23px, transparent 23px),
      linear-gradient(155deg, black 23px, transparent 23px),
      linear-gradient(335deg, black 23px, transparent 23px),
      linear-gradient(155deg, black 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0 2px, 4px 35px, 29px 31px, 34px 6px;
    box-shadow: inset 0 0 50px 50px black;
    color: #ffffff;
  }
  .anim-flicker {
    animation: text-flicker 4s ease-in-out infinite;
  }
  .blue-box {
    box-shadow: 0 0 4px 3px $blue-neon;
    &-full {
      box-shadow: inset 0 14px 1px -10px $blue-neon,
        inset 0 -14px 1px -10px $blue-neon;
    }
  }
  .shadow-neon {
    text-shadow: 0 4px 29px $primary;
  }
  .btn {
    border: 2px solid $blue-neon;
    box-shadow: 0 0 4px 3px $blue-neon;
    padding: 8px 20px;
  }
  .wrapper-display {
    width: 100%;
    overflow: hidden;
    @include breakpoint(md) {
      width: 75%;
    }
    @include breakpoint(lg) {
      width: 50%;
    }
  }
  .trans {
    transition: all 0.3s ease-in-out;
  }
  .hide {
    transition: opacity 0.3s ease-in-out;
    transition-delay: 2s;
    cursor: default;

    &-this {
      opacity: 0;
    }
    &-not {
      opacity: 1;
    }
  }
}

@keyframes text-flicker {
  0% {
    opacity: 1;
    text-shadow: 0px 4px 29px $primary;
  }

  8% {
    opacity: 0.5;
    text-shadow: 0px 4px 29px $primary;
  }

  9% {
    opacity: 1;
    text-shadow: 0px 4px 29px $primary;
  }

  27% {
    opacity: 0.3;
    text-shadow: 0px 4px 29px $primary;
  }

  30% {
    opacity: 1;
    text-shadow: 0px 4px 29px $primary;
  }

  70% {
    opacity: 0.7;
    text-shadow: 0px 4px 29px $primary;
  }

  100% {
    opacity: 0.9;
    text-shadow: 0px 0px 29px $primary;
  }
}
</style>
