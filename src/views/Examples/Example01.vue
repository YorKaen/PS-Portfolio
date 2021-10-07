<template lang="pug">
#example-page-1
    .container-full.bg-white
        nav-fixed-on-scroll(:isFixed="setNavFixed").difam-nav-fixed.pt-4.bg-white
            .nav-wrapper.d-flex.w-100.flex-between
                .nav-logo
                    router-link(:to="'/Examples/Example01'" exact)
                        image-lazy(:srcImg="'difam/Logo.svg'")
                .nav-list.d-flex.flex-between
                    .nav-list-item(v-for="(item, index) in navLinksArray" :key="item.id" :class="{ 'active-link': index === 0 }")
                        a(:href="item.path" ).txt-black {{ item.name }}
                .nav-phone.d-flex.flex-col
                    .nav-phone-item.mt-a
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1668 12.3792C15.4951 12.2347 14.9637 12.5466 14.4932 12.8189C14.0114 13.0996 13.0951 13.8429 12.57 13.6526C9.88108 12.5455 7.35213 10.192 6.25739 7.49237C6.06444 6.95598 6.80424 6.03391 7.08283 5.54637C7.35316 5.07443 7.65858 4.53803 7.51928 3.8613C7.3934 3.25317 5.76522 1.18139 5.18947 0.614843C4.80977 0.240613 4.42078 0.0347856 4.02147 0.00152065C2.5202 -0.0629302 0.843516 1.94024 0.549452 2.41947C-0.187255 3.44133 -0.183128 4.80103 0.561834 6.44973C2.35717 10.8781 9.14747 17.5613 13.5925 19.4241C14.4128 19.8077 15.1629 20 15.8366 20C16.496 20 17.0831 19.816 17.5876 19.4511C17.9684 19.2318 20.0536 17.4719 19.9989 15.9302C19.9659 15.5373 19.7606 15.1444 19.3912 14.7639C18.8289 14.1828 16.7704 12.506 16.1668 12.3792Z" />
                        </svg>
                        link-phone(:srcLink="'+7 (928) 36-55-547'")
                    .nav-phone-item.mb-a.mt-a
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1668 12.3792C15.4951 12.2347 14.9637 12.5466 14.4932 12.8189C14.0114 13.0996 13.0951 13.8429 12.57 13.6526C9.88108 12.5455 7.35213 10.192 6.25739 7.49237C6.06444 6.95598 6.80424 6.03391 7.08283 5.54637C7.35316 5.07443 7.65858 4.53803 7.51928 3.8613C7.3934 3.25317 5.76522 1.18139 5.18947 0.614843C4.80977 0.240613 4.42078 0.0347856 4.02147 0.00152065C2.5202 -0.0629302 0.843516 1.94024 0.549452 2.41947C-0.187255 3.44133 -0.183128 4.80103 0.561834 6.44973C2.35717 10.8781 9.14747 17.5613 13.5925 19.4241C14.4128 19.8077 15.1629 20 15.8366 20C16.496 20 17.0831 19.816 17.5876 19.4511C17.9684 19.2318 20.0536 17.4719 19.9989 15.9302C19.9659 15.5373 19.7606 15.1444 19.3912 14.7639C18.8289 14.1828 16.7704 12.506 16.1668 12.3792Z" />
                        </svg>
                        link-phone(:srcLink="'+7 (928) 36-55-547'")
                .nav-burger
                    basic-burger(:burgerColor="'difam'" :menuColor="'white'" class="burger-ladder menu-fullscreen" )
                        .burger-list.d-flex.flex-between
                            .burger-list-item(v-for="item in navLinksArray" :key="item.id")
                                a(:href="item.path").txt-black {{ item.name }}
                        .burger-phone.d-flex.flex-col
                            .burger-phone-item.mt-a
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1668 12.3792C15.4951 12.2347 14.9637 12.5466 14.4932 12.8189C14.0114 13.0996 13.0951 13.8429 12.57 13.6526C9.88108 12.5455 7.35213 10.192 6.25739 7.49237C6.06444 6.95598 6.80424 6.03391 7.08283 5.54637C7.35316 5.07443 7.65858 4.53803 7.51928 3.8613C7.3934 3.25317 5.76522 1.18139 5.18947 0.614843C4.80977 0.240613 4.42078 0.0347856 4.02147 0.00152065C2.5202 -0.0629302 0.843516 1.94024 0.549452 2.41947C-0.187255 3.44133 -0.183128 4.80103 0.561834 6.44973C2.35717 10.8781 9.14747 17.5613 13.5925 19.4241C14.4128 19.8077 15.1629 20 15.8366 20C16.496 20 17.0831 19.816 17.5876 19.4511C17.9684 19.2318 20.0536 17.4719 19.9989 15.9302C19.9659 15.5373 19.7606 15.1444 19.3912 14.7639C18.8289 14.1828 16.7704 12.506 16.1668 12.3792Z" />
                                </svg>
                                link-phone(:srcLink="'+7 (928) 36-55-547'")
                            .burger-phone-item.mb-a.mt-a
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1668 12.3792C15.4951 12.2347 14.9637 12.5466 14.4932 12.8189C14.0114 13.0996 13.0951 13.8429 12.57 13.6526C9.88108 12.5455 7.35213 10.192 6.25739 7.49237C6.06444 6.95598 6.80424 6.03391 7.08283 5.54637C7.35316 5.07443 7.65858 4.53803 7.51928 3.8613C7.3934 3.25317 5.76522 1.18139 5.18947 0.614843C4.80977 0.240613 4.42078 0.0347856 4.02147 0.00152065C2.5202 -0.0629302 0.843516 1.94024 0.549452 2.41947C-0.187255 3.44133 -0.183128 4.80103 0.561834 6.44973C2.35717 10.8781 9.14747 17.5613 13.5925 19.4241C14.4128 19.8077 15.1629 20 15.8366 20C16.496 20 17.0831 19.816 17.5876 19.4511C17.9684 19.2318 20.0536 17.4719 19.9989 15.9302C19.9659 15.5373 19.7606 15.1444 19.3912 14.7639C18.8289 14.1828 16.7704 12.506 16.1668 12.3792Z" />
                                </svg>
                                link-phone(:srcLink="'+7 (928) 36-55-547'")
        section-basic(:src-name="'block-01'" isSplit )#block-01.spy-section
            template(v-slot:content-left)
                .wrapper.mb-a.mt-a
                    h1.title.mb-1
                        span Динская фабрика
                        br
                        span мешкотары
                    text1.contain-5(:srcText="'Мы более десяти лет  занимаемся изготовлением и реализацией мешков из  полипропилена и бумаги. Наши специалисты окажут вам полное содействие в приобретении продукции, обеспечат понимание ваших потребностей и желаний, организуют доставку  по  Краснодарском  и Ставропольском краю.'").mb-4
                    btn-basic(:srcText="'Заказать'").btn-difam-primary
            template(v-slot:content-right)
                image-lazy(:srcImg="'difam/block1-1.png'")
        section-basic(:src-name="'block-02'" )#block-02.spy-section
            template(v-slot:title)
                .wrapper.center-text
                    .txt.txt-h Каталог
                    h2.txt.mt-1.mb-2 Делаем мешки на совесть
                    text1.contain-5.mr-a.ml-a(:srcText="'По каждой позиции каталога вы можете заказать образец, чтобы проверить качество товара перед оптовой покупкой. Все подробности уточняйте у менеджеров компании.'")
            template(v-slot:content)
                .wrapper.mt-4
                    .images-01.d-grid.gap-20.grid-3.mt-10.mb-10
                        .item.bg-primary.r-10
                            image-lazy(:srcImg="'difam/block2-1.png'").mr-a.ml-a.p-4
                        .item.bg-primary.r-10
                            image-lazy(:srcImg="'difam/block2-2.png'").mr-a.ml-a.p-4
                        .item.bg-primary.r-10
                            image-lazy(:srcImg="'difam/block2-3.png'").mr-a.ml-a.p-4
                    table-basic(:tableContent="tableContent01").mb-8
                    table-basic(:tableContent="tableContent02")
                        text1(:srcText="'Мешок может быть открытого типа и закрытого с клапаном, 2-х или 3-х слойный с плёнкой. Плотность 60-80 г/м².'")
        section-basic(:src-name="'block-03'" )#block-03.spy-section
            template(v-slot:title)
                .wrapper.center-text.mb-8
                    .txt.txt-h Производство
                    h2.txt.mt-1.mb-2 Современное оборудование и материалы
                    text1.contain-5.ml-a.mr-a(:srcText="'Для организации производства полипропиленовых и бумажных мешков различного ассортимента было закуплено современное оборудование, и была организована собственная производственная линия, позволяющая производить весь ассортимент полипропиленовых мешков стандартных размеров и плотности из полипропиленовой ткани высокой прочности.'")
            template(v-slot:content)
                .swiper-block-03
                    swiper-thumbs
        section-basic(:src-name="'block-04'" isFull isFill)#block-04.spy-section
            template(v-slot:content)
                .container
                    .wrapper
                        .block-04__text
                            .txt.txt-h.txt-black Печать логотипов
                            h2.txt.mt-1.mb-2
                                span Нанесение многоцветных
                                br
                                span логотипов и изображений
                            text1.contain-5(:srcText="'Наше оборудование позволяет оперативно наносить многоцветные изображения по Вашему желанию.'")
                            text1.contain-5(:srcText="'Вы просто предоставляете макет, а мы отдаем Вам готовый продукт в кратчайшие сроки. Использование логотипа и дополнительной информации на упаковки — это доступное и крайне важное конкурентное преимущество для любого бизнеса.'")
                        .block-04__image
                            image-lazy(:srcImg="'difam/block4-1.png'")
        section-basic(:src-name="'block-05'")#block-05
            template(v-slot:content)
                .wrapper.center-text.d-grid.d-grid-lg.grid-2.gap-30
                    .item.col-12.center-text
                        image-lazy(:srcImg="'difam/block5-1.svg'").mr-a.ml-a
                        .txt.txt-h доставка
                        h2.txt.mt-1.mb-2
                            span Быстрая доставка не
                            br
                            span заставит долго ждать
                        text1(:srcText="'Мы предлагаем бесплатную доставку* продукции по г.Краснодару.'")
                        text1(:srcText="'Действует самовывоз, при желании вы можете самостоятельно забрать свой заказ со склада. При самовывозе заказа вы экономите на курьерской доставке.'")
                        text1(:srcText="'*Бесплатная доставка возможна при объеме не более 2м3 и весе не более 200 кг.'")
                    .item.col-12.center-text
                        image-lazy(:srcImg="'difam/block5-2.svg'").mr-a.ml-a
                        .txt.txt-h Оплата
                        h2.txt.mt-1.mb-2
                            span Оплатите удобным
                            br
                            span способом
                        text1(:srcText="'Мы предлагаем бесплатную доставку* продукции по г.Краснодару.'")
                        text1(:srcText="'Действует самовывоз, при желании вы можете самостоятельно забрать свой заказ со склада. При самовывозе заказа вы экономите на курьерской доставке.'")
                        text1(:srcText="'*Бесплатная доставка возможна при объеме не более 2м3 и весе не более 200 кг.'")
        section-basic(:src-name="'block-06'")#block-06
            template(v-slot:title)
                h2.txt.txt-center.mb-2 Наши сертификаты
            template(v-slot:content)
                .wrapper.d-grid.grid-3.gap-20
                    .item.bg-gray.p-4.r-10
                        a(:href="'../img/difam/block6-1.png'" target='_blank')
                            image-lazy(:srcImg="'difam/block6-1.png'").p-1
                    .item.bg-gray.p-4.r-10
                        a(:href="'../img/difam/block6-2.png'" target='_blank')
                            image-lazy(:srcImg="'difam/block6-2.png'").p-1
                    .item.bg-gray.p-4.r-10
                        a(:href="'../img/difam/block6-3.png'" target='_blank')
                            image-lazy(:srcImg="'difam/block6-3.png'").p-1
        section-basic(:src-name="'offer'" isFull isFill)#offer.spy-section
            template(v-slot:title)
                .wrapper
                    h2.txt.mb-1.txt-center.txt.txt-white  Свяжитесь с нами прямо сейчас
                    .txt-1.txt-center.txt.txt-white  Наши менеджеры ответят вам в кротчайшее время!
            template(v-slot:content)
                form-defam(:btnText="'Заказать'")

        section-basic(:src-name="'contacts'" isFull isSplit adaptiveLG)#contacts.spy-section
            template(v-slot:content-left)
                .wrapper.w-100
                    maps-yandex(:coords="this.coords")
            template(v-slot:content-right)
                .wrapper.pl-6.mt-a.mb-a
                    .contacts-01
                        .item.mb-5
                            h3.txt Контакты
                        .item.mb-5
                            .txt.mb-2.fw-b Динская фабрика мешкотары
                            text1(src-text="Краснодарский край, ст. Динская, Шевченко, д. 111")
                        .item.mb-5
                            .d-flex
                                <svg class="svg-mail" width="20" height="16" viewBox="0 0 20 16" fill="#6FBA6D" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" />
                                    </svg>
                                link-mail(:srcLink="'111111@mail.ru'")
                            .d-flex.mt-2
                                <svg class="svg-phone" width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1668 12.3792C15.4951 12.2347 14.9637 12.5466 14.4932 12.8189C14.0114 13.0996 13.0951 13.8429 12.57 13.6526C9.88108 12.5455 7.35213 10.192 6.25739 7.49237C6.06444 6.95598 6.80424 6.03391 7.08283 5.54637C7.35316 5.07443 7.65858 4.53803 7.51928 3.8613C7.3934 3.25317 5.76522 1.18139 5.18947 0.614843C4.80977 0.240613 4.42078 0.0347856 4.02147 0.00152065C2.5202 -0.0629302 0.843516 1.94024 0.549452 2.41947C-0.187255 3.44133 -0.183128 4.80103 0.561834 6.44973C2.35717 10.8781 9.14747 17.5613 13.5925 19.4241C14.4128 19.8077 15.1629 20 15.8366 20C16.496 20 17.0831 19.816 17.5876 19.4511C17.9684 19.2318 20.0536 17.4719 19.9989 15.9302C19.9659 15.5373 19.7606 15.1444 19.3912 14.7639C18.8289 14.1828 16.7704 12.506 16.1668 12.3792Z" />
                                    </svg>
                                link-phone(:srcLink="'+7 (928) 36-55-547'")
                            .d-flex.mt-2
                                <svg class="svg-phone" width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1668 12.3792C15.4951 12.2347 14.9637 12.5466 14.4932 12.8189C14.0114 13.0996 13.0951 13.8429 12.57 13.6526C9.88108 12.5455 7.35213 10.192 6.25739 7.49237C6.06444 6.95598 6.80424 6.03391 7.08283 5.54637C7.35316 5.07443 7.65858 4.53803 7.51928 3.8613C7.3934 3.25317 5.76522 1.18139 5.18947 0.614843C4.80977 0.240613 4.42078 0.0347856 4.02147 0.00152065C2.5202 -0.0629302 0.843516 1.94024 0.549452 2.41947C-0.187255 3.44133 -0.183128 4.80103 0.561834 6.44973C2.35717 10.8781 9.14747 17.5613 13.5925 19.4241C14.4128 19.8077 15.1629 20 15.8366 20C16.496 20 17.0831 19.816 17.5876 19.4511C17.9684 19.2318 20.0536 17.4719 19.9989 15.9302C19.9659 15.5373 19.7606 15.1444 19.3912 14.7639C18.8289 14.1828 16.7704 12.506 16.1668 12.3792Z" />
                                </svg>
                                link-phone(:srcLink="'+7 (928) 36-55-547'")
                    .contacts-02
                        .item.mb-5
                            h3.txt Режим работы
                        .item
                            text1(src-text="Понедельник-пятница с 8:00 до 18:00").mt-2
                            text1(src-text="Суббота с 8:00 до 17:00")

</template>

<script>
// import XXX from "@/components/XXX.vue";
import Text1 from "../../components/UI/Text/Text1";
import BtnBasic from "../../components/UI/Buttons/ButtonBasic";
import ImageLazy from "../../components/UI/Images/ImageLazy";
import SectionBasic from "../../components/Sections/SectionBasic";
import LinkPhone from "../../components/UI/Links/LinkPhone";
import LinkMail from "../../components/UI/Links/LinkMail";
import TableBasic from "../../components/Elements/Table/TableBasic";
import MapsYandex from "../../components/Elements/Maps/mapYandex";
import BasicBurger from "../../components/Elements/Burger/BasicBurger";
import NavFixedOnScroll from "../../components/Elements/Nav/NavFixedOnScroll";

import SwiperThumbs from "../../components/Elements/Swiper/SwiperThumbs";
import FormDefam from "../../components/Elements/Form/FromDefam";

export default {
  name: "Example01",
  components: {
      FormDefam,
      SwiperThumbs,
      NavFixedOnScroll,
      BasicBurger,
    MapsYandex,
    TableBasic,
    LinkMail,
    LinkPhone,
    SectionBasic,
    ImageLazy,
    BtnBasic,
    Text1,
  },
  props: {},
  data: () => ({
    coords: [45.207072, 39.214031],
      thumbsSwiper: null,

    navLinksArray: [
      {
        id: 1,
        path: "#block-01",
        name: "О компании",
      },
      {
        id: 2,
        path: "#block-02",
        name: "Каталог",
      },
      {
        id: 3,
        path: "#block-03",
        name: "Производство",
      },
      {
        id: 4,
        path: "#block-04",
        name: "Печать логотипов",
      },
      {
        id: 5,
        path: "#offer",
        name: "Доставка и оплата",
      },
      {
        id: 6,
        path: "#contacts",
        name: "Контакты",
      },
    ],
    tableContent01: {
      tablename: "table-01 table-difam",
      tabletitle: "Полипропиленовые мешки",
      theadarray: [
        "Ширина, см",
        "Высота, см",
        "Макс. вес груза, кг",
        "Примечание",
      ],
      tbodyarray: [
        {
          row01: ["56 кг", "105", "50 кг", "Для муки, крупы"],
          row02: ["50 кг", "82", "25 кг", "Для муки, крупы"],
          row03: ["50 кг", "82", "25 кг", "Для риса"],
          row04: ["50 кг", "82", "25 кг", "Возможна ручка"],
          row05: ["999 кг", "999", "999 кг", "Возможна ручка"],
        },
      ],
    },
    tableContent02: {
      tablename: "table-02 table-difam",
      tabletitle: "Бумажные мешки",
      theadarray: ["Ширина, см", "Высота, см"],
      tbodyarray: [
        {
          row01: ["36", "На усмотрение заказчика"],
          row02: ["49.5", "На усмотрение заказчика"],
          row03: ["54.5", "На усмотрение заказчика"],
        },
      ],
    },
    setNavFixed: false,
    setSectionsArray: [],
  }),
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.setSectionsArray = document.querySelectorAll(".spy-section");
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleResize);
      this.setSectionsArray = null
  },
  methods: {
    handleScroll() {
      //-345 для проекта, но должно быть удалено на реальном проекте
      if (window.pageYOffset > this.$store.state.global.pageExampleOffset) {
        this.currentOffset = window.pageYOffset - this.$store.state.global.pageExampleOffset;
        this.scrollEvents(this.currentOffset);
      } else {
        this.currentOffset = 0;
      }
      //if(this.currentOffset > ){}
    },
    scrollEvents(offset) {
      this.setNavFixed = offset > 64;
      for (let s in this.setSectionsArray)
        if (
          this.setSectionsArray.hasOwnProperty(s) &&
          this.setSectionsArray[s].offsetTop <= offset
        ) {
          const id = this.setSectionsArray[s].id;
          document
            .querySelector(".active-link")
            .classList.remove("active-link");
          document
            .querySelector(`a[href*=${id}]`)
            .parentNode.classList.add("active-link");
        }
    },
  },
};
</script>

<style lang="scss">
#example-page-1{
$primary: #6fba6d;
$primary50: #519c4f;
//////////////

.bg-primary {
  background-color: $primary;
}
.btn-difam {
  &-primary {
    background: $primary;
    border-radius: 5px;
    padding: 18px 24px;
    color: white;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    @include breakpoint(xl) {
      min-width: 220px;
      min-height: 60px;
    }
  }
}
//////////////
.nav {
  &-wrapper {
    max-height: 64px;
    align-content: center;
    line-height: 64px;
    font-size: 13px;
    font-weight: 600;
    color: $black-1;
    @include breakpoint(xxl) {
      font-size: 16px;
    }
  }
  &-list {
    width: 100%;
    flex: 1 1 100%;
    max-width: 820px;
    display: none;
    @include breakpoint(lg) {
      font-size: em(15);
      max-width: 520px;
      display: flex;
    }
    @include breakpoint(xl) {
      max-width: 720px;
    }
  }
  &-logo {
    width: 100%;
    max-width: 200px;
    min-width: 150px;
  }
  &-list-item {
    cursor: pointer;
    transition: color 0.2s ease-in-out;
      &:after{
          position: absolute;
          bottom: 0;
          left: 0;

          height: 0;
          content: '';
          transition: all 0.1s ease-in-out;
      }
    &.active-link {
        position: relative;
      .txt-black {
        color: $primary50;
      }
        &:after{
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            content: '';
            z-index: 1;
            background-color: $primary50;
        }
    }
    &:hover {
      .txt-black {
        color: $primary50;
      }
    }
  }
  &-burger {
    overflow: hidden;
    max-width: 100vw;
    max-height: 100vh;
    @include breakpoint(lg) {
      display: none;
    }
  }
  .nav-phone-item {
    line-height: 140%;
    align-content: center;
    justify-content: space-between;
    transition: all 0.4s ease-in-out;
    display: none;
    @include breakpoint(lg) {
      display: flex;
    }
    a {
      color: $black-1;
      font-size: em(16px);
    }
    &:hover {
      a {
        color: $primary50;
      }
      svg {
        fill: $primary;
        opacity: 0.9;
      }
    }
  }
  svg {
    opacity: 0.18;
    margin-right: 8px;
  }
  .burger-menu {
    padding: 4vw;
    .burger-list {
      @extend .nav-list;
      display: flex;
      flex-direction: column;
      margin-bottom: 2em;
      &-item {
        @extend .nav-list-item;
        font-size: em(22);
        &:hover {
        }
      }
    }
    .burger-nav {
      @include breakpoint(md) {
        width: fit-content;
        display: flex;
        place-content: center;
        margin-right: auto;
        margin-left: auto;
      }
    }
    .burger-phone {
      &-item {
        @extend .nav-phone-item;
        display: flex;
        width: fit-content;
        font-size: em(22);
        margin-top: 1em;
      }
    }
  }
}

/////////////
.block-01 {
    &__content.content-split{
        display: flex;
        flex-direction: column;
        @include breakpoint(lg){
            display: grid;
        }
        .block-01__content-right{
            order: -1;
            margin-bottom: 2em;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
            @include breakpoint(lg){
                order: 1;
                max-width: unset;
            }
        }
        .block-01__content-left{
            //order: 2;
        }
    }
  .content-left {
    display: flex;
    flex-direction: column;
  }
  .content-right {
    display: flex;
    justify-content: center;
  }
  .contain-5 {
    max-width: 514px;
  }
}
/////////////
.block-02 {
  .contain-5 {
    max-width: 560px;
  }
  .images-01 {
  }
  .txt-1 {
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
}
/////////////
.block-03 {
  .contain-5 {
    max-width: 666px;
  }
}
/////////////
.block-04 {
    color: $white;
    .wrapper{
        padding: 3em 0;
        display: flex;
        flex-wrap: wrap;
    }
  .contain-5 {
    max-width: 580px;
  }
    .block-04__text{
        @include breakpoint(lg){
            max-width: 50%;
            margin-top: auto;
            margin-bottom: auto;
        }
    }
    .block-04__image{
        display: none;
        @include breakpoint(lg){
            display: block;
            border-radius: 10px;
            overflow: hidden;
            max-width: 50%;
            margin-left: auto;
            margin-right: auto;
        }
    }
}
/////////////
.block-05 {
    @include breakpoint(lg){
        .item {
            max-width: 600px;
            margin-right: auto;
            margin-left: auto;
        }
    }

}
/////////////
.block-06 {
    .item {

    }
    @include breakpoint(lg){
        .item {

        }
    }

}
/////////////
.offer{
    .section-container{padding: 6em 0;}

    .wrapper{

    }
}
/////////////
.contacts {
  padding-top: 0;
    .content-left.contacts__content-left{
        order: 2;
        margin-top: 2em;
        @include breakpoint(lg){
            order: 0;
            margin-top: 0;
        }
    }
    .content-right.contacts__content-right{
        .item{
            .d-flex{
                a{
                    color: black;
                }
                &:hover{
                    a{color: $primary50;}
                }
                svg{
                    margin-right: 6px;
                }
                .svg-phone{
                    opacity: 0.18;
                }
            }
        }
    }
}

    //последняя скобка окончания вынужденного стиля для этой страницы-отдельного-сайта
}
</style>
