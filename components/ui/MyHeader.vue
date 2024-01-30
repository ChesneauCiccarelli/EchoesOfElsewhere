<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';

onMounted(() => {
  const timeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
  });
  timeline.add(
    {
      targets: '.Header__line',
      opacity: [0, 1],
      duration: 500,
    },
    '+=500',
  );
  timeline.add(
    {
      targets: '.Header__icon',
      opacity: [0, 1],
      duration: 1000,
    },
    '+=500',
  );
});
</script>

<template>
  <div>
    <a href="#" class="Header">
      <!-- Left Line -->
      <div class="Header__line"></div>

      <!-- Logo -->
      <nuxt-img class="Header__icon" src="/icon/logo.png" alt="Logo" />

      <!-- Right Line -->
      <div class="Header__line"></div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.Header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: rem(25);
  margin-top: rem(50);

  &__line {
    flex: 1;
    height: rem(1);
    background-color: $Dark-Purple;
    border-radius: 50%;
    opacity: 0;
  }

  &__icon {
    width: rem(50);
    height: rem(50);
    opacity: 0;
  }
}

a {
  display: block;
}
</style>
