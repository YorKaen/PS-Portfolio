<template lang="pug">
.block-4
  .container
    .block-4__wrapper.flex-column
      TitleInBlock(title="Онлайн заявка")
      .block-4__content
        FormCredit
</template>

<script>
import TitleInBlock from "./title-in-block";
import FormCredit from "./form-default";

//import Form from "@/components/Utilities/form-default.vue";

export default {
  name: "Block_4",
  components: {
    FormCredit,
    TitleInBlock,

    //Calculator,
    //Form,
  },

  mounted() {},
};
</script>

<style lang="scss" scoped></style>
