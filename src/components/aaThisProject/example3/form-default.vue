<template lang="pug">
.form-container.d-grid
    .header.d-flex.flex-col.mb-4
        .label-1 Выберите сумму и срок
        .txt.txt-blue Шаг {{ currentStep }} из {{maxStep}}
    .content
        transition(name="hide")
            .slider(v-if="currentStep === 1").brd-blue.p-2.r-10.fill.d-flex.flex-col
                .slider__wrapper.w-100.mt-2
                    .value-output-txt.form-output.d-flex.flex-between.mb-1(v-if="slider.value")
                        .txt.txt-3  Выбранная сумма:
                        .wrap-input.d-flex
                            icon-edit(:width="'25'" :height="'25'" fill="#1730B9" @click="slider.valueLocked = !slider.valueLocked").svg-edit.mt-a.mb-a
                            input(disabled v-model="sliderValuePrettier" v-if="slider.valueLocked").txt.txt-blue.txt-3.item-output-locked
                            input(v-model="slider.value" v-else="slider.valueLocked").txt.txt-blue.txt-3.item-output
                    .value-output-txt.form-output.d-flex.flex-between.mb-1(v-else)
                        .txt.txt-3.mt-a.mb-a  Выберите нужную сумму
                    input.form-input(type="range" min="10000" max="1000000" step="1000" v-model.number="slider.value").custom-slider
                .slider__wrapper.w-100.mt-4
                    .value-output-txt.form-output.d-flex.flex-between.mb-1(v-if="slider.period" )
                        .txt.txt-3 На выбранный срок:
                        .wrap-input.d-flex
                            icon-edit(:width="'25'" :height="'25'" fill="#1730B9" @click="slider.periodLocked = !slider.periodLocked").svg-edit.mt-a.mb-a
                            input(disabled v-model="sliderPeriodPrettier" v-if="slider.periodLocked").txt.txt-blue.txt-3.item-output-locked
                            input(v-model="slider.period" v-else="slider.periodLocked").txt.txt-blue.txt-3.item-output
                    .value-output-txt.form-output.d-flex.flex-between.mb-1(v-else)
                        .txt.txt-3.mt-a.mb-a  Выберите нужный срок
                    input.form-input(type="range" min="30" max="365" step="1" v-model.number="slider.period").custom-slider


        transition(name="hide")
            .anketa(v-if="currentStep === 2").brd-blue.p-2.r-10.fill.d-flex.flex-col
                .row.mt-4.d-flex.flex-between
                    .col-6.pr-2.w-100
                        .form-item(v-bind:class="{'is-invalid': !valid.firstname}").mt-2.brd-blue.r-10
                            input(type="text" required  v-model="form.firstname"  @change="validate()" autocomplete="off")#inputName.form-input
                            label#labelName.form-label.txt-white Имя*
                    .col-6.pl-2.w-100
                        .form-item(v-bind:class="{'is-invalid': !valid.secondname}").mt-2.brd-blue.r-10
                            input(type="text" required  v-model="form.secondname"  @change="validate()" autocomplete="off")#inputSecond.form-input
                            label#labelSecond.form-label.txt-white Фамилия*
                .row.mt-4
                    .col-6
                        .form-item(v-bind:class="{'is-invalid': !valid.middlename}").mt-2.brd-blue.r-10
                            input(type="text" required  v-model="form.middlename"  @change="validate()" autocomplete="off")#inputMiddle.form-input
                            label#labelMiddle.form-label.txt-white Отчество*
                .row.mt-4
                    .col-12
                        .form-item(:class="{'is-invalid': !valid.phone}").mt-2.brd-blue.r-10
                            input(type="text" required v-mask="{mask: '+7 (999) 999-9999' , showMaskOnHover: false }" :class="{'is-invalid': !valid.phone}" v-model="form.phone" @change="validate()" autocomplete="off")#inputNumber.form-input
                            label#labelNumber.form-label.txt-white Номер телефона*
                .row.mt-4
                    .col-12
                        .form-item(:class="{'is-invalid': !valid.email}").mt-2.brd-blue.r-10
                            input(type="text" required  v-model="form.email" @change="validate()" autocomplete="off")#inputEmail.form-input
                            label#labelEmail.form-label.txt-white E-mail*


        transition(name="right")
            .agreement(v-if="currentStep === 3")
                h3.txt.txt-primary Все получилось!


    .info-block.brd-blue.p-2.r-10.d-flex.flex-col
        .info-block__item(v-if="slider.value").mt-1
            .txt.txt-1.fw-m Вы выбрали кредит на сумму
            .txt-2.txt-blue {{ sliderValuePrettier }}
        .info-block__item(v-else).mt-2
            .txt.txt-1.fw-m Выберите нужную сумму
        .info-block__item(v-if="slider.period").mt-1
            .txt.txt-1.fw-m Вы выбрали кредит на срок
            .txt-2.txt-blue {{ sliderPeriodPrettier }}
        .info-block__item(v-else).mt-2
            .txt.txt-1.fw-m Выберите нужный срок
        .info-block__item.mt-1
            .txt.txt-1.fw-m Ставка
            .txt-2.txt-blue 5.4%
        .info-block__item.mt-2
            .txt.fw-m
                span Вероятность одобрения
                span
                span.txt-secondary.fw-b  {{" " + bidProgress}} %
            .info-block__progress-bar.progress-bar.mt-2
                .progress-bar__empty
                    .progress-bar__fill(:style="{ width: bidProgress + '%'}" )
            .info-block__item.mt-1
                .txt.txt-gray(v-if="currentStep === 1  && bidProgress < 45 ")
                    span Получите
                    span.txt-secondary &nbsp; + 45 %
                    span  к одобрению, заполнив первый шаг
                .txt.txt-gray(v-if="currentStep === 2 && bidProgress < 85")
                    span Получите
                    span.txt-secondary &nbsp; + 40 %
                    span  к одобрению, заполнив второй шаг
    .footer.d-flex
        transition-group(name="right")
            .wrap(v-if="currentStep > 1").mr-2
                button.btn.btn-anketa-back(@click="prevPage()")
                     span.fw-r Назад
            .wrap(v-if="currentStep === 1" )
                button.btn.btn-anketa-blue.brd-blue(@click="toAnketa()")
                    span.fw-m Далее
            .wrap(v-if="currentStep === 2 " )
                button.btn.btn-anketa-blue.brd-blue(@click="toFinish()")
                    span.fw-m К последнему шагу
            .wrap(v-if="currentStep === maxStep" )
                button.btn.btn-anketa-blue.brd-blue(@click="finished()")
                    span.fw-m Завершить


</template>

<script>
import noUiSlider from "nouislider";
// for default styles
import ImageLazy from "../../UI/Images/ImageLazy";
import IconEdit from "../../UI/Icons/Edit";
import * as Validate from "../../Elements/Form/validators.js";
//import XXX from "@/components/XXX.vue";

export default {
  name: "FormCredit",
  components: { IconEdit, ImageLazy },
  data: () => ({
    sliderAmount: 0,
    sliderPeriod: 0,
    currentStep: 1,
    maxStep: 3,
    successPercent: 5,
    bidProgress: 5,
      isNextClicked: false,
    slider: {
      value: 0,
      period: 0,
      valueLocked: true,
      periodLocked: true,
    },
    form: {
      phone: null,
      email: null,
      firstname: null,
      secondname: null,
      middlename: null,
    },
    valid: {
      phone: true,
      email: true,
      firstname: true,
      secondname: true,
      middlename: true,
    },
  }),
  methods: {
    toAnketa() {
      if (
        this.currentStep === 1 &&
        this.slider.value > 0 &&
        this.slider.period > 0
      ) {
        this.bidProgress = 45;
        this.currentStep = 2;
      }

    },
      toFinish(){
          this.isNextClicked = true;
          if (this.validate()) {
              this.bidProgress = 85;
              this.currentStep = 3;
          }
      },

    prevPage() {
      if (this.currentStep > 1) this.currentStep--;
    },
    finished() {},
    spellingGrammar(value) {
      let newVal = Math.abs(value) % 100;
      const words = ["дней", "день", "дня"];
      let num = newVal % 10;

      if (num === 0) return words[0];
      if (num > 4 && num < 10) {
        return words[0];
      }
      if (num === 2) return words[2];
      if (num === 1) return words[1];

      return words[2];
    },
    validate() {
        if (this.isNextClicked === false) {
            this.isNextClicked = true;
            return true;
        }
      this.valid.phone = Validate.phone(this.form.phone);
      this.valid.email = Validate.email(this.form.email);
      this.valid.firstname = Validate.noempty(this.form.firstname);
      this.valid.secondname = Validate.noempty(this.form.secondname);
      this.valid.middlename = Validate.noempty(this.form.middlename);
      for (const field in this.valid) {
        if (this.valid[field] === false) {
          return false;
        }
      }
      return true;
    },
  },
  mounted() {},
  computed: {
    sliderValuePrettier() {
      return (
        this.slider.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
        " ₽"
      );
    },
    sliderPeriodPrettier() {
      if (this.slider.period === 365) return "1 год";
      else
        return (
          this.slider.period + " " + this.spellingGrammar(this.slider.period)
        );
    },
  },
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";
@import "@/assets/scss/modules/custom-slider.scss";

.footer {
  .btn {
    padding: 1em 2em;
  }
  .btn-anketa-back {
  }
  .btn-anketa-blue {
    border-radius: 10px;
  }
}
.brd-blue {
  border: 2px solid $blue;
}
.svg-edit {
  cursor: pointer;
  &:hover {
    &.svg {
      fill: #7183e5;
    }
  }
}
.progress-bar {
  width: 80%;
  height: 8px;

  &__empty {
    background-color: #c7c7c7;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  &__fill {
    transition: width 0.3s ease-in-out;
    height: 100%;
    border-radius: 4px;
    background-color: #60d313;
  }
}

.slider {
  &__wrapper {
  }
  .form-output {
  }
}

.form-container {
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 1fr 1fr 60px;
  gap: 10px;
  grid-template-areas:
    "header header"
    "content content"
    "info-block info-block"
    "footer footer";
  @include breakpoint(md) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 1fr 60px;
    gap: 20px;
    grid-template-areas:
      "header ."
      "content info-block"
      "footer .";
  }

  .header {
    grid-area: header;
  }
  .content {
    grid-area: content;
    max-height: 435px;
    overflow: hidden;
    input.item-output {
      text-align: end;
      background-color: transparent;
      max-width: 11ch;
      border: 2px solid $blue;
      &-locked {
        text-align: end;
        background-color: transparent;
        max-width: 11ch;
        border: 2px solid transparent;
      }
    }
  }
  .footer {
    grid-area: footer;
  }
  .info-block {
    grid-area: info-block;
    z-index: 10;
    background-color: white;
    transition: all 0.5s ease-in-out;
  }
}

.anketa {
  color: $blue;
  .form-item {
    position: relative;
    width: 100%;
    margin: auto 0;
    @include breakpoint(lg) {
    }
    @include breakpoint(xxl) {
    }
    &.is-invalid {
      border: 2px solid #f31919;
      .form-error {
        position: absolute;
        display: flex;
        flex-wrap: wrap;
      }
    }
    input {
      width: 100%;
      padding: 0 5px;
      border: none;
      //font-size: 20px;
      //font-weight: bold;
      outline: 0;
      background: transparent;
      box-shadow: none;
    }
    label {
      color: $blue;
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      //font-size: 20px;
      //font-weight: bold;
      padding: 0 5px;
      transition: 0.2s ease-in-out;
    }
    & input:valid + label {
      top: -25px;
      font-size: 11px;
      font-weight: normal;
    }
  }
}
/////////////////////////////
</style>
