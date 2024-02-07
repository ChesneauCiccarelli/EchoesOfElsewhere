<script setup>
import { ref, onMounted } from 'vue';

const poems = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('/api/query?col=poems');
    const data = await response.json();
    poems.value = data.result;
  } catch (error) {
    console.error('Failed to fetch poems:', error);
  }
});
</script>

<template>
  <div class="poems">
    <NuxtLink
      class="poems__item"
      v-for="poem in poems"
      :key="poem.id"
      :to="`/poems/${poem.id}`"
    >
      <h3 class="poems__item--title">{{ poem.title }}</h3>
      <p class="poems__item--author">Made by {{ poem.author }}</p>
      <button class="poems__item--link">Read</button>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.poems {
  border-top: 0.5px solid $English-Violet;
  border-bottom: 0.5px solid $English-Violet;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  margin: rem(50) 0 rem(200) 0;

  text-align: center;

  &__item {
    border: 0.5px solid $English-Violet;
    padding: rem(30) rem(10);
    width: 100%;

    &--title {
      color: $English-Violet;
      margin-bottom: rem(10);

      font-family: $font-display;
      font-size: $font-size-big;
      text-transform: uppercase;
    }

    &--author {
      color: $Slate-Gray;
      margin-bottom: rem(30);
    }

    &--link {
      border: 1px solid $English-Violet;
      border-radius: 20px;
      color: $English-Violet;
      padding: rem(10) rem(20);
    }
  }
}
</style>
