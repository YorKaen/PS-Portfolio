<template lang="pug">
.block.block-welcome.p-2.pb-4
    .container
        .row
            .block-welcome__title.col-md-7.col-12
                .row.block-welcome__title-row
                    h2.txt.txt-secondary Добро пожаловать!
                    h4.txt.txt-white Давайте знакомиться
                .row.block-welcome__title-row.mt-a.mb-a
                    .col
                        h3
                            text-mouseover-change(:textOld="'Ёлкин Александр'" :textNew="'Purple Sphynx'").px-1
                    .line.w-100
                    .col
                        h3
                            text-mouseover-change(:textOld="'Фронтенд Разработчик'" :textNew="'FrontEnd Developer'").px-1
                .row
                    .col
                        text1(:srcText="'Занимаюсь созданием сайтов в качестве хобби более 5 лет и профессионально более 2 лет.'").txt-white.mb-a
            .block-welcome__img.d-flex.flex-center.col-md-5.col-12
                image-lazy(:srcImg="'face3.png'").border-dark.r-10.mt-a.mb-a





</template>

<script>
// import XXX from "@/components/XXX.vue";
import ImageLazy from "../../UI/Images/ImageLazy";
import TextMouseoverChange from "../../UI/Text/TextMouseoverChange";
import ButtonRollDown from "../../UI/Buttons/ButtonRollDown";
import Text1 from "../../UI/Text/Text1";
import ProgressBarTimer from "../../Elements/ProgressBar/ProgressBarTimer";
export default {
  name: "Welcome",
  components: {ProgressBarTimer, Text1, ButtonRollDown, TextMouseoverChange, ImageLazy},
  props: {},
  data: () => ({}),
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
//Project Specific
.block{
    transition: all 0.3s ease-in-out;
    opacity: 1;
    .line{
        transition: max-width 0.9s ease-in-out;
    }
    &.hide{
        opacity: 0;
        .line{
            max-width: 0;
        }
        .block-welcome__img{
            transform: translateX(100%);
        }
    }
}
.block-welcome{

    h4{
        font-weight: normal;
    }
    &__img{
        transition: all 1s ease-in-out;
        margin-top: 1em;
        @include breakpoint(lg){
            justify-content: end;

        }
        img{
            width: 80%;
        }
    }
    &__title{
        display: flex;
        flex-direction: column;
        text-align: center;
        &-row{
            text-align: center;
            h2,h4{
                width: 100%;
            }
        }
        @include breakpoint(md){
            text-align: start;
            &-row{
                text-align: start;
            }
        }
    }
}
</style>
