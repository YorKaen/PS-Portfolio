<template lang="pug">
.block-1
  .container-full
    .bg-primary
      .container
        .block-1__wrapper.flex-column
            fluid-block-text(v-for="item in dataItemsTop" :fluidblock="item" ).creditio-1__item
            button.btn.btn-secondary.bg-secondary.px-2.py-1.r-10
                span.txt-white.fw-m Получить кредит
    .block-1__footer
      .accordion
        .accordion-item.bg-shape
          .accordion-item-head.brd-tb(v-on:click="toggleAccord(1)" :class="{'is-expanded': expanded.accAdv}")
            .container
              .svg 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00018 17.3335C9.94685 18.5468 12.8668 20.0001 14.2468 20.0001H18.2468C19.2578 18.8182 20.0095 17.4374 20.4535 15.9468C21.0112 14.2412 21.3079 12.4611 21.3335 10.6668H15.3335V4.00013C15.3086 3.75387 15.2174 3.51898 15.0694 3.32055C14.9215 3.12212 14.7224 2.96759 14.4935 2.87346C13.9802 4.20679 12.7468 7.25346 11.6735 8.68679C10.738 9.8998 9.4575 10.8015 8.00018 11.2735V9.85346C9.03597 9.43834 9.93772 8.74647 10.6068 7.85346C11.8602 6.18013 13.4668 1.78013 13.4802 1.74013C13.5389 1.58637 13.6524 1.45976 13.7989 1.38468C13.9453 1.3096 14.1144 1.29136 14.2735 1.33346C15.1668 1.58679 16.6668 2.40013 16.6668 4.00013V9.33346H22.0002C22.177 9.33346 22.3466 9.4037 22.4716 9.52872C22.5966 9.65375 22.6668 9.82332 22.6668 10.0001C22.7188 12.1752 22.4033 14.3434 21.7335 16.4135C20.4735 20.0135 19.0002 21.1735 18.9335 21.2268C18.8171 21.3171 18.6741 21.3663 18.5268 21.3668H14.2468C12.6268 21.3668 9.88018 20.0335 8.00018 18.9468V17.3335Z" fill="#1330D3"/>
                  <path d="M1.33317 20.6667H5.99984C6.17665 20.6667 6.34622 20.5965 6.47124 20.4715C6.59627 20.3465 6.6665 20.1769 6.6665 20.0001V9.33341C6.6665 9.1566 6.59627 8.98703 6.47124 8.86201C6.34622 8.73699 6.17665 8.66675 5.99984 8.66675H1.33317V20.6667ZM5.33317 19.3334H2.6665V10.0001H5.33317V19.3334Z" fill="#1330D3"/>
                  </svg>
              h3 Преимущества
              span.accordion-item-control.close
          .container
            #accAdv.accordion-item-body(:class="{'is-expanded': expanded.accAdv}")
                fluid-block-img(v-for="item in dataItemsImg01" :fluidblock="item" ).creditio-block-2__item
        .accordion-item.bg-shape
          .accordion-item-head.brd-tb(v-on:click="toggleAccord(2)" :class="{'is-expanded': expanded.accHow}")
            .container
              .svg
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3334 10.0001H20.6668V6.00008C20.6668 5.82327 20.5965 5.6537 20.4715 5.52868C20.3465 5.40365 20.1769 5.33341 20.0001 5.33341H4.00009C3.84223 5.33599 3.68858 5.28246 3.5665 5.18235C3.44442 5.08224 3.36182 4.94205 3.33342 4.78675V4.54675C3.36182 4.39144 3.44442 4.25126 3.5665 4.15115C3.68858 4.05104 3.84223 3.99751 4.00009 4.00008H19.7201C19.8969 4.00008 20.0665 3.92984 20.1915 3.80482C20.3165 3.67979 20.3868 3.51023 20.3868 3.33341C20.3868 3.1566 20.3165 2.98703 20.1915 2.86201C20.0665 2.73699 19.8969 2.66675 19.7201 2.66675H4.00009C3.46966 2.66675 2.96095 2.87746 2.58588 3.25253C2.21081 3.62761 2.00009 4.13632 2.00009 4.66675C1.99541 4.74668 1.99541 4.82682 2.00009 4.90675V18.6201C2.00271 18.979 2.076 19.334 2.21579 19.6646C2.35557 19.9952 2.55911 20.295 2.81479 20.547C3.07046 20.799 3.37326 20.9981 3.70589 21.133C4.03852 21.268 4.39448 21.3361 4.75343 21.3334H20.0001C20.1769 21.3334 20.3465 21.2632 20.4715 21.1382C20.5965 21.0131 20.6668 20.8436 20.6668 20.6667V16.6667H21.3334C21.5102 16.6667 21.6798 16.5965 21.8048 16.4715C21.9299 16.3465 22.0001 16.1769 22.0001 16.0001V10.6667C22.0001 10.4899 21.9299 10.3204 21.8048 10.1953C21.6798 10.0703 21.5102 10.0001 21.3334 10.0001ZM19.3334 20.0001H4.75343C4.38263 20.0037 4.02541 19.8607 3.75949 19.6023C3.49356 19.3438 3.34044 18.9908 3.33342 18.6201V6.58675C3.54982 6.64946 3.775 6.67648 4.00009 6.66675H19.3334V10.0001H14.6668C13.7827 10.0001 12.9349 10.3513 12.3097 10.9764C11.6846 11.6015 11.3334 12.4494 11.3334 13.3334C11.3334 14.2175 11.6846 15.0653 12.3097 15.6904C12.9349 16.3156 13.7827 16.6667 14.6668 16.6667H19.3334V20.0001ZM20.6668 15.3334H14.6668C14.1363 15.3334 13.6276 15.1227 13.2525 14.7476C12.8775 14.3726 12.6668 13.8638 12.6668 13.3334C12.6668 12.803 12.8775 12.2943 13.2525 11.9192C13.6276 11.5441 14.1363 11.3334 14.6668 11.3334H20.6668V15.3334Z" fill="#1330D3"/>
                  <path d="M15.3398 14.3333C15.8921 14.3333 16.3398 13.8855 16.3398 13.3333C16.3398 12.781 15.8921 12.3333 15.3398 12.3333C14.7876 12.3333 14.3398 12.781 14.3398 13.3333C14.3398 13.8855 14.7876 14.3333 15.3398 14.3333Z" fill="#1330D3"/>
                  </svg>
              h3 Как оформить кредит
              span.accordion-item-control.close
          .container
            #accHow.accordion-item-body(:class="{'is-expanded': expanded.accHow}")
                fluid-block-img(v-for="item in dataItemsImg02" :fluidblock="item" ).creditio-block-3__item
        .accordion-item.bg-shape
          .accordion-item-head.brd-tb(v-on:click="toggleAccord(3)" :class="{'is-expanded': expanded.accReq}")
            .container
              .svg
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9999 11.3334C12.9838 11.3347 13.946 11.0441 14.7647 10.4985C15.5835 9.95279 16.2219 9.17653 16.5994 8.26789C16.9768 7.35924 17.0763 6.35906 16.8851 5.39389C16.694 4.42872 16.2208 3.54194 15.5256 2.84574C14.8303 2.14954 13.9442 1.67521 12.9792 1.48277C12.0143 1.29033 11.014 1.38843 10.1049 1.76465C9.19572 2.14088 8.4186 2.77832 7.87183 3.59632C7.32505 4.41433 7.0332 5.37613 7.0332 6.36005C7.0332 7.67791 7.55626 8.94188 8.4875 9.87437C9.41874 10.8069 10.682 11.3316 11.9999 11.3334ZM11.9999 2.71338C12.7204 2.71206 13.425 2.92459 14.0246 3.32406C14.6243 3.72352 15.0918 4.29194 15.3682 4.95733C15.6445 5.62273 15.7171 6.35516 15.5769 7.06187C15.4367 7.76858 15.0899 8.41778 14.5804 8.92725C14.0709 9.43671 13.4217 9.78352 12.715 9.92376C12.0083 10.064 11.2759 9.99135 10.6105 9.71502C9.94509 9.43869 9.37667 8.97111 8.97721 8.3715C8.57775 7.77188 8.36522 7.06721 8.36654 6.34672C8.3683 5.38364 8.75166 4.46051 9.43266 3.77951C10.1137 3.09851 11.0368 2.71515 11.9999 2.71338Z" fill="#1330D3"/>
                  <path d="M4.00026 21.26V17.18C5.02951 16.0998 6.27229 15.2456 7.64958 14.6717C9.02686 14.0978 10.5085 13.8169 12.0003 13.8467C14.042 13.8192 16.0516 14.3567 17.8069 15.4L18.7069 14.3933C16.7001 13.1293 14.3718 12.4697 12.0003 12.4933C10.2651 12.4491 8.54148 12.7883 6.95239 13.4866C5.3633 14.1849 3.94784 15.2252 2.80692 16.5333C2.71799 16.6479 2.66884 16.7883 2.66692 16.9333V21.26C2.65796 21.6231 2.79322 21.975 3.04311 22.2387C3.293 22.5023 3.63716 22.6562 4.00026 22.6667H12.2603L10.9936 21.3333L4.00026 21.26Z" fill="#1330D3"/>
                  <path d="M20.0002 21.2601V21.3335H17.9002L16.7002 22.6668H20.0002C20.3586 22.6564 20.6987 22.5062 20.9479 22.2483C21.197 21.9904 21.3354 21.6454 21.3335 21.2868V17.4668L20.0002 18.9535V21.2601Z" fill="#1330D3"/>
                  <path d="M23.1732 12.4133C23.0414 12.296 22.8684 12.2357 22.6922 12.2457C22.516 12.2557 22.3509 12.3352 22.2332 12.4667L14.4865 21.1333L11.0199 17.4067C10.963 17.3401 10.8935 17.2854 10.8155 17.2458C10.7374 17.2061 10.6523 17.1821 10.565 17.1753C10.4778 17.1685 10.39 17.1789 10.3067 17.2061C10.2235 17.2332 10.1464 17.2764 10.0799 17.3333C10.0147 17.3926 9.96191 17.4643 9.92459 17.5441C9.88726 17.6239 9.86613 17.7103 9.86241 17.7983C9.85869 17.8864 9.87246 17.9743 9.90292 18.0569C9.93337 18.1396 9.97992 18.2154 10.0399 18.28L14.4999 23.08L23.2265 13.3333C23.3378 13.2026 23.3944 13.034 23.3844 12.8626C23.3745 12.6913 23.2988 12.5303 23.1732 12.4133Z" fill="#1330D3"/>
                  </svg>
              h3 Требования к заемщику
              span.accordion-item-control.close
          .container
            #accReq.accordion-item-body( :class="{'is-expanded': expanded.accReq}")
              ul.accordion-list.mt-2
                li.accordion-list-item(v-for="li in requirements" :key="li.message") {{ li.message }}
</template>

<script>
//import XXX from "@/components/XXX.vue";

import dataText from "../../json/crblock.json";
import dataTextImgTop from "../../json/crblockimg.json";
import dataTextImgBot from "../../json/crblockimgtwo.json";
import FluidBlockText from "../../Elements/FluidBlock/FluidBlockText";
import FluidBlockImg from "../../Elements/FluidBlock/FluidBlockImg";

export default {
  name: "Block_1-mobile",
  components: {
    FluidBlockImg,
    FluidBlockText,
  },
  data: () => ({
    expanded: {
      accAdv: false,
      accHow: false,
      accReq: false,
    },
    dataItemsTop: dataText,
    dataItemsImg01: dataTextImgTop,
    dataItemsImg02: dataTextImgBot,
    requirements: [
      {
        message: "Гражданин РФ в возрасте от 21 до 68 лет",
      },
      {
        message: "Зарегистрированы в регионе присутствия банка",
      },
      {
        message: "Проработали не менее 3 месяцев на текущем месте работы",
      },
      {
        message:
          "Минимальный ежемесячный доход по основному месту работы 15 000 рублей",
      },
    ],
  }),
  methods: {
    toggleAccord(number) {
      switch (number) {
        case 1:
          this.expanded.accAdv = !this.expanded.accAdv;
          break;
        case 2:
          this.expanded.accHow = !this.expanded.accHow;
          break;
        case 3:
          this.expanded.accReq = !this.expanded.accReq;
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mixins.scss";
.accordion-item-body {
  .item {
    margin-top: 20px;
  }
  .item:last-child {
    margin-bottom: 30px;
  }
}
.svg {
  //margin-top: 4px;
  line-height: 100%;
}
.btn {
  margin-top: 0px;
  margin-bottom: 30px;
}
.brd-tb {
  border-top: 1px solid #1730b9;
  border-bottom: 1px solid #1730b9;
}
.close {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  right: 0px;
  overflow: hidden;
  transition: transform 1s;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    right: 0;
    margin-top: -1px;
    background: $blue;
  }
  &:before {
    transform: rotate(0deg);
  }
  &:after {
    transform: rotate(90deg);
  }
}

.accordion {
  .svg {
  }
  &-item {
    margin-top: 10px;
    position: relative;
  }
  &-item-head {
    cursor: pointer;
      &.is-expanded{
          .accordion-item-control{

              &:after{

                transform: rotate(0);
              }
          }
      }
    h3 {
      margin-left: 12px;
      font-weight: 500;
      font-size: 20px;
    }
    .container {
      display: flex;
      align-items: center;
      height: 56px;

    }
  }
  &-item-control {
    margin-left: auto;
      &:after{
          transition: all 0.3s ease-in-out;
      }
  }
  &-item-body {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);

    &.is-expanded {
      max-height: 1400px;
      transition: max-height 1s ease-in-out;
    }
  }
  &-list-item {
    margin-bottom: 20px;
    margin-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      border-radius: 100%;
      top: 0.5em;
      left: -18px;
      width: 10px;
      height: 10px;
      background-color: $secondary;
    }
  }
  &-list {
  }
}

.block-1 {
  &__wrapper {
    padding: 2em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 16px;
  }
}
</style>
