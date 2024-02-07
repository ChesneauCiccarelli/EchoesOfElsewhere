<script setup>
import { onMounted, ref } from 'vue';

const items = ref([
  {
    id: 1,
    title: 'The Other Within',
    author: 'Sumo',
    audioSrc: '/audio/TheOtherWithin.mp3',
  },
  {
    id: 2,
    title: 'Echoes of the Other',
    author: 'Microsoft Copylot',
    audioSrc: '/audio/EchoesOfTheOther.mp3',
  },
  {
    id: 3,
    title: 'The Other Dream',
    author: 'Loudly',
    audioSrc: '/audio/TheOtherDream.mp3',
  },
  {
    id: 4,
    title: 'The Unseen Self',
    author: 'Soundraw',
    audioSrc: '/audio/TheUnseenSelf.mp3',
  },
]);

const audios = ref([]);

onMounted(() => {
  audios.value = items.value.map((item) => {
    return {
      ...item,
      audio: new Audio(item.audioSrc),
    };
  });
});

const currentPlayingIndex = ref(null);

function playAudio(itemIndex) {
  if (
    currentPlayingIndex.value !== null &&
    currentPlayingIndex.value !== itemIndex
  ) {
    stopAudio(currentPlayingIndex.value);
  }
  const selectedItem = audios.value[itemIndex];
  selectedItem.audio.play();
  currentPlayingIndex.value = itemIndex;
}

function stopAudio(itemIndex) {
  const selectedItem = audios.value[itemIndex];
  selectedItem.audio.pause();
  selectedItem.audio.currentTime = 0;
  if (currentPlayingIndex.value === itemIndex) {
    currentPlayingIndex.value = null;
  }
}
</script>

<template>
  <div class="audio">
    <div class="audio__item" v-for="(item, index) in items" :key="item.id">
      <h3 class="audio__item--title">{{ item.title }}</h3>
      <p class="audio__item--author">Made with {{ item.author }}</p>
      <div class="audio__item--btns">
        <playSVG @click="playAudio(index)" class="icon" />
        <stopSVG @click="stopAudio(index)" class="icon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.audio {
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

    &--btns {
      display: flex;
      justify-content: space-around;
      margin-top: rem(20);
    }
  }
}

.icon {
  height: rem(30);
  width: rem(30);
  color: $English-Violet;
}
</style>
