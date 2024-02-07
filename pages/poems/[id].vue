<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const poem = ref(null);
const showPrompt = ref(false);

async function fetchPoem() {
  try {
    const response = await fetch('/api/query?col=poems');
    const data = await response.json();
    const poems = data.result;
    const poemId = route.params.id;
    poem.value = poems.find((p) => p.id === poemId);
  } catch (error) {
    console.error('Failed to fetch poems:', error);
  }
}

const formattedText = computed(() => {
  if (!poem.value || !poem.value.text) return '';
  return poem.value.text.split('.  ').join('.\n\n');
});

function togglePromptDisplay() {
  showPrompt.value = !showPrompt.value;
}

onMounted(fetchPoem);

watch(() => route.params.id, fetchPoem);
</script>

<template>
  <AnimatedGradient class="AnimatedGradient" />
  <div v-if="poem" class="poem">
    <h3 class="poem__title">{{ poem.title }}</h3>
    <div class="poem__infos">
      <button class="poem__infos--promptBtn" @click="togglePromptDisplay">
        Show prompt
      </button>
      <p class="poem__infos--author">Made with {{ poem.author }}</p>
    </div>
    <div v-show="showPrompt" class="poem__promptDisplay">
      <p class="poem__promptDisplay--text">
        {{ poem.prompt }}
      </p>
      <p class="poem__promptDisplay--background">Prompt</p>
    </div>
    <p class="poem__txt">{{ formattedText }}</p>
  </div>
  <div v-else class="poem-not-found">Poem not found.</div>
</template>

<style lang="scss" scoped>
.AnimatedGradient {
  position: absolute;
  top: -30%;
}

.poem {
  margin-top: rem(150);

  &__title {
    border-bottom: 1px solid $Dark-Purple;
    border-top: 1px solid $Dark-Purple;
    color: $English-Violet;
    padding: rem(15) rem(20);

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
    margin-top: rem(100);
    padding: 0 rem(20) rem(100) rem(20);
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

  &__txt {
    margin: rem(100) rem(20);
    white-space: pre-wrap;
  }
}
</style>
