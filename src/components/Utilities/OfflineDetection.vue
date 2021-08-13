<template lang="pug">
.top-message.is-offline(v-if="!connection.isOnline") Для полноценной работы сайта требуется интернет соединение
</template>

<script>
//import XXX from "@/components/XXX.vue";
export default {
  name: "OfflineDetection",
  components: {},
  data: () => ({
    connection: {
      isOnline: Boolean,
    },
  }),
  created() {
    window.addEventListener("online", this.handleNetwork);
    window.addEventListener("offline", this.handleNetwork);
    this.handleNetwork();
  },
  mounted() {},
  unmounted() {
    window.removeEventListener("online", this.handleNetwork);
    window.removeEventListener("offline", this.handleNetwork);
  },
  methods: {
    handleNetwork() {
      this.connection.isOnline = navigator.onLine;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project/mixins.scss";
.top-message {
  display: none;
  &.is-offline {
    display: block;
    z-index: 99999;
    position: fixed;
    background: rgba(29, 29, 29, 0.6);
    border-radius: 0px 0px 20px 20px;
    color: white;
    width: 100%;
    max-width: 360px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    text-align: center;
    padding: 10px;
    @include breakpoint(md) {
      max-width: 410px;
    }
  }
}
</style>
