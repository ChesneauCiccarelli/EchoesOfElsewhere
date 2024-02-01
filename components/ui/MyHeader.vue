<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';

onMounted(() => {
  const timeline = anime.timeline({
    easing: 'easeOutExpo',
  });
  timeline.add(
    {
      targets: '.Header__line',
      opacity: [0, 1],
      duration: 500,
    },
    '+=1000',
  );
  timeline.add({
    targets: '.Header__icon',
    opacity: [0, 1],
    duration: 1000,
  });
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
  align-items: center;
  display: flex;
  gap: rem(25);
  justify-content: space-around;
  margin-top: rem(50);

  &__icon {
    height: rem(50);
    opacity: 0;
    width: rem(50);
  }

  &__line {
    background-color: $Dark-Purple;
    border-radius: 50%;
    flex: 1;
    height: rem(1);
    opacity: 0;
  }
}

a {
  display: block;
}
</style>
