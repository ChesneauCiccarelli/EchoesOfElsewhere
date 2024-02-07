<template>
  <div class="app-container">
    <NuxtLayout v-if="!screenTooLarge" />
    <div class="screen-warning" v-else>
      This site is not available on this type of screen. Please use a mobile
      device.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenTooLarge: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.screenTooLarge = window.innerWidth > 600;
    },
  },
};
</script>

<style>
.screen-warning {
  display: none;
}

@media (min-width: 601px) {
  .NuxtLayout {
    display: none;
  }

  .screen-warning {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
}
</style>
