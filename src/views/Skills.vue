<template lang="pug">
section.skills.skills__block.block.hide-scrollbar
    MyTitle(:txtTitle="'Мои навыки'" :visitsCount="$store.state.visitsPageSkills")
    .br
    .block__content.flex-column
        .block__text.block-text
            .block-text__block1.flex-row
                ButtonSimple(v-if="isBtnActive" @click="showNext()" :txtButton="changeBtnText()" :isWhite="true" class="dark r-20 hover-circle mr" )
                .block__counter.txt.txt-white {{ listRemaining() }}
        .block__list
            transition-group(name="list")
                .list-item(v-for="item in listSkillsActive" :key="item.id")
                    .list-item__title.txt.txt-white {{ item.skillTitle }}
                    .line
                    .list-item__text.txt.txt-white(v-for="code in splitArray(item.skillItems)") {{ code }}

//https://www.toptal.com/resume/giulia-cardieri#Employment
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "Skills",
  components: {},
  data: () => ({
    buttonTxt: "Показать больше",
    isBtnActive: true,
    listSkillsActive: [],
    listSkills: [
      {
        id: 1,
        skillTitle: "Языки",
        skillItems: "HTML, PUG, CSS, SCSS, Vanilla JS, C#",
      },
      {
        id: 2,
        skillTitle: "Фреймворки/API",
        skillItems:
          "Vue 3, VueX, Axios, Bootstrap, Materialize, jQuery, Работа с LocalStorage ",
      },
      {
        id: 3,
        skillTitle: "Инструменты",
        skillItems:
          "Visual Studio Code, Microsoft Visual Studio, WebStorm 2020, Webpack, Vue-CLI/Vite, Git, Gulp, npm, Figma, Adobe Photoshop, Affinity Designer, Vegas, Unity",
      },
      {
        id: 4,
        skillTitle: "Принципы",
        skillItems:
          "UX, UI, BEM (хоть они особо и не нужны при работе с VUE, но очень удобны для SCSS разметки)",
      },
      {
        id: 5,
        skillTitle: "Дополнительные навыки",
        skillItems:
          "Использование CSS Grid вместо Flexbox где будет лучше;+ Создание PWA;+ Использование Google Lighthouse;+ Создание сложных анимаций через модули или Vanilla JS;+ Рефакторинг jQuery кода в Vanilla JS;+ Знаком с A11Y;",
      },
      {
        id: 6,
        skillTitle: "Остальные полезные навыки",
        skillItems:
          "Возможность гуглить правильно на нескольких языках;+ Познания в SEO;+ Переобучение стажеров с платных курсов Fullstack Developer на хотя-бы базовые знания верстки;+ Слепой метод решения ошибок и багов с версткой на Safari;+ Верстка писем через сторонние сервисы с максимально возможной поддержкой браузеров;+ Определение, какой элемент макета раздует код страницы раза в два или затормозит разработку на пару дней минимум;",
      },
    ],
  }),
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    splitArray(toSplit) {
      return toSplit.split("+");
    },
    showNext() {
      if (this.listSkills.length > 1) {
        this.listSkillsActive.push(this.listSkills[0]);
        this.listSkills.shift();
      } else {
        //
        this.listSkillsActive.push(this.listSkills[0]);
        this.listSkills.shift();
        this.isBtnActive = false;
      }
    },
    changeBtnText() {
      return "Показать больше";
    },
    listRemaining() {
      let counterText = "Осталось пунктов " + this.listSkills.length;
      if (this.listSkills.length > 0) {
        return counterText;
      } else {
        counterText =
          "Это лишь базовый список, всегда готов ответить на Ваши вопросы или обучиться чему-то новому!";
        return counterText;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";

.list-item {
  margin-bottom: 2em;
  &__title {
    padding-bottom: 4px;
    font-size: em(18);
    font-weight: bold;
    @include breakpoint(lg) {
      font-size: em(20);
    }
  }
  &__text {
    padding-top: 4px;
    font-size: em(16);
    @include breakpoint(lg) {
      font-size: em(18);
    }
  }
  .line {
    width: 50%;
  }
}
.block {
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: calc(100vh - 220px);
  padding: 25px;
  &__counter {
  }
  &__content {
    position: relative;
    .block-text {
      //max-width: 75%;
      margin-right: 1em;
      &__block1 {
        font-size: em(16);
        margin-bottom: 1em;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        @include breakpoint(md) {
          font-size: em(18);
        }
        @include breakpoint(lg) {
          font-size: em(20);
        }
      }
    }
  }
}
</style>
