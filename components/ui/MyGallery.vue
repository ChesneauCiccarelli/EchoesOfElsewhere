<script setup>
import { ref, onMounted } from 'vue';

const gallery = ref([]);
const showPrompt = ref(false);

onMounted(async () => {
  try {
    const response = await fetch('/api/query?col=gallery');
    const data = await response.json();
    gallery.value = data.result;
  } catch (error) {
    console.error('Failed to fetch gallery:', error);
  }
});

function togglePromptDisplay() {
  showPrompt.value = !showPrompt.value;
}
</script>

<template>
  <div class="container">
    <div class="gallery" v-for="art in gallery" :key="art.id">
      <nuxt-img :src="`/gallery/${art.path}`" class="gallery__image" />
      <h3 class="gallery__title">{{ art.title }}</h3>
      <div class="gallery__infos">
        <button class="gallery__infos--promptBtn" @click="togglePromptDisplay">
          Show prompt
        </button>
        <p class="gallery__infos--author">Made with {{ art.author }}</p>
      </div>
      <div v-show="showPrompt" class="gallery__promptDisplay">
        <p class="gallery__promptDisplay--text">
          {{ art.prompt }}
        </p>
        <p class="gallery__promptDisplay--background">Prompt</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin: rem(50) 0 rem(100) 0;
  scroll-snap-type: x mandatory;
}

.gallery {
  border-top: 1px solid $Dark-Purple;
  border-left: 0.5px solid $Dark-Purple;
  border-right: 0.5px solid $Dark-Purple;
  padding: rem(50) 0 0 0;
  min-width: 100vw;
  scroll-snap-align: start;

  &__image {
    height: 500px;
    object-fit: cover;
    padding: 0 rem(20) rem(50) rem(20);
    margin: auto;
  }

  &__title {
    border-bottom: 1px solid $Dark-Purple;
    border-top: 1px solid $Dark-Purple;
    color: $English-Violet;
    padding: rem(20) 0;

    font-family: $font-display;
    font-size: $font-size-giant;
    text-align: center;
    text-transform: uppercase;
  }

  &__infos {
    border-bottom: 1px solid $Dark-Purple;
    display: flex;
    gap: rem(20);
    justify-content: center;

    &--promptBtn {
      border-right: 1px solid $Dark-Purple;
      color: $English-Violet;
      cursor: pointer;
      padding: rem(10) rem(20) rem(10) 0;

      text-decoration: underline;
      text-transform: uppercase;
    }

    &--author {
      color: $Slate-Gray;
      padding: rem(10) 0;
    }
  }

  &__promptDisplay {
    border-bottom: 1px solid $Dark-Purple;
    margin-top: rem(50);
    padding: 0 rem(20) rem(50) rem(20);
    position: relative;

    &--background {
      color: $Ultra-Violet;
      left: 50%;
      opacity: 10%;
      position: absolute;
      top: 30%;
      transform: translate(-50%, -50%);

      font-family: $font-display;
      font-size: $font-size-gianter;
      text-transform: uppercase;
      z-index: -1;
    }

    &::before {
      color: $Ultra-Violet;
      content: '“';
      left: -10%;
      opacity: 30%;
      position: absolute;
      top: -25%;

      font-family: $font-display;
      font-size: rem(200);
      text-transform: uppercase;
      z-index: -1;
    }

    &--text {
      color: $Lapis-Lazuli;

      font-style: italic;
      text-align: center;
    }
  }
}
</style>
