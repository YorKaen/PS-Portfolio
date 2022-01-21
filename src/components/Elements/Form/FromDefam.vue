<template lang="pug">
.forms-container.container
    form.form.d-flex.flex-col.flex-row-lg.gap-30(@submit.prevent="check()" v-if="!$store.state.defam.showNext")
        .form-item(v-bind:class="{'is-invalid': !valid.firstname}")
            input(type="text" required  v-model="form.firstname"  @change="validate()" autocomplete="off")#inputName.form-input
            label#labelName.form-label.txt-white Имя*
            .form-line
            .form-error.txt-danger Error message.
        .form-item
            input(type="text" required v-mask="{mask: '+7 (999) 999-9999' , showMaskOnHover: false }" :class="{'is-invalid': !valid.phone}" v-model="form.phone" @change="validate()" autocomplete="off")#inputNumber.form-input
            label#labelNumber.form-label.txt-white Номер телефона*
            .form-line
            .form-error.txt-danger Error message.
        .form-item(:class="{'is-invalid': !valid.email}")
            input(type="text" required  v-model="form.email" @change="validate()" autocomplete="off")#inputEmail.form-input
            label#labelEmail.form-label.txt-white E-mail*
            .form-line
            .form-error.txt-danger Error message.
        .form-item
            button.btn.bg-white.r-5(type="submit")
                .px-2.py-2.txt.txt-color-defam.fw-m {{btnText}}
    .form-approval(v-else)
        .form-popup.r-10.bg-white.mr-a.ml-a.mt-4
            .row
                .form-popup__logo
                    image-lazy(:srcImg="'difam/LogoMin.png'")
            .row
                .form-popup__title
                    h2.txt {{afterTitle}}
                .form-popup__subtitle
                    .txt.txt-1 Спасибо, что выбрали нас. В ближайшее время мы с вами свяжемся.
</template>

<script>
// import XXX from "@/components/XXX.vue";
import * as Validate from "./validators.js";
import ImageLazy from "../../UI/Images/ImageLazy";

export default {
  name: "FormDefam",
  components: { ImageLazy },
  props: {
    btnText: { type: String, default: "Заказать" },
    afterTitle: { type: String, default: "Заявка успешно отправлена!" },
  },
  data: () => ({
    isNextClicked: false,
    form: {
      phone: null,
      email: null,
      firstname: null,
    },
    valid: {
      phone: true,
      email: true,
      firstname: true,
    },
  }),
  created() {},
  mounted() {},
  methods: {
    check() {
      this.isNextClicked = true;
      if (this.validate()) {
      }
    },
    validate() {
      if (this.isNextClicked === false) {
        return true;
      }
      this.valid.phone = Validate.phone(this.form.phone);
      this.valid.email = Validate.email(this.form.email);
      this.valid.firstname = Validate.noempty(this.form.firstname);
      for (const field in this.valid) {
        if (this.valid[field] === false) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
//Project Specific
.btn {
  .txt-color-defam {
    color: #3b7b3a;
  }
}
.form {
  display: flex;
  flex-direction: column;
  height: 300px;
  align-content: space-between;
  position: relative;
  z-index: 3000;
  @include breakpoint(lg) {
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    height: 80px;
    margin-top: 40px;
  }
  &.is-valid {
  }

  &-item {
    position: relative;
    width: 100%;
    margin: auto 0;
    @include breakpoint(lg) {
      max-width: 25%;
    }
    @include breakpoint(xxl) {
      max-width: 325px;
    }
    &.is-invalid {
      .form-line {
        border: 1px solid #f31919;
      }
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
      top: -15px;
      font-size: 11px;
      font-weight: normal;
    }
    .form-input {
    }
    .form-label {
    }
    .form-error {
      display: none;
    }
    .form-line {
      width: 100%;
      border: 1px solid #fafafa;
      opacity: 0.5;
    }
  }
}
//////////////////////////
.form-popup {
  width: 100%;
  height: 100%;
  padding: 30px 37px;
  place-content: center;
  flex-direction: column;
  text-align: center;
  display: flex;
  @include breakpoint(md) {
    max-width: 670px;
    max-height: 460px;
  }

  .form-popup__logo {
    margin: 14px auto 16px;
  }

  .form-popup__title {
    margin-bottom: 16px;
    text-align: center;
    width: 100%;
  }

  .form-popup__subtitle {
    max-width: 245px;
    margin: 0 auto;
    @include breakpoint(md) {
      max-width: 400px;
    }
  }

  .form-popup__close {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 999;
    cursor: pointer;
    right: 0;
    margin-left: auto;

    &:after,
    &:before {
      position: absolute;
      background-color: #9c9c9c;
      height: 3px;
      content: "";
      right: 0;
      width: 30px;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
