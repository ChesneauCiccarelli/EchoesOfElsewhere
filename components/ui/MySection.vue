<script setup>
const props = defineProps({
  separator: {
    type: String,
    default: 'missing text',
  },
  title: {
    type: String,
    default: 'missing title',
  },
  p1: {
    type: String,
    default: 'missing text',
  },
  p2: {
    type: String,
    default: 'missing text',
  },
  p3: {
    type: String,
    default: 'missing text',
  },
  btn: {
    type: String,
    default: 'missing text',
  },
  imgSrc: {
    type: String,
    default: 'missing link',
  },
});
</script>

<template>
  <div class="conatainer">
    <p class="separator">{{ separator }}</p>
    <div class="laptop">
      <div class="top">
        <logoSVG class="top__logo" />
        <h2 class="top__title">{{ title }}</h2>
      </div>
      <div class="image">
        <nuxt-img class="image__img" :src="imgSrc" alt="Lines" />
        <AnimatedGradient class="image__background" />
      </div>
    </div>
    <div class="content">
      <div class="content__txt">
        <p>{{ p1 }}</p>
        <p>{{ p2 }}</p>
        <p>{{ p3 }}</p>
      </div>
      <div class="content__link">
        <a class="content__link--item">{{ btn }}</a>
        <arrowSVG class="content__link--arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.separator {
  background-image: url('/img/lines(1).png');
  background-size: 100% 100%;
  color: $English-Violet;
  padding: rem(100) rem(20);

  font-family: $font-display;
  font-size: $font-size-medium;
  text-align: center;
  text-transform: uppercase;

  @include tablet-small {
    font-size: $font-size-bigger;
  }

  @include laptop {
    margin-top: rem(300);
  }
}

.top {
  background-color: $Dark-Purple;
  border-top-left-radius: rem(20);
  border-top-right-radius: rem(20);
  box-shadow:
    0px -10px 21px 0px rgba(94, 104, 145, 0.1),
    0px -39px 39px 0px rgba(94, 104, 145, 0.09),
    0px -87px 52px 0px rgba(94, 104, 145, 0.05),
    0px -154px 62px 0px rgba(94, 104, 145, 0.01),
    0px -241px 67px 0px rgba(94, 104, 145, 0);
  color: $Seashell;

  @include laptop {
    flex: 1;
  }

  @include tablet-small {
    border-top-left-radius: rem(50);
    border-top-right-radius: 0;
  }

  &__logo {
    color: $Timberwolf;
    max-width: rem(50);
    margin: 0 auto;
    padding: rem(50) 0;
  }

  &__title {
    color: $Timberwolf;
    padding: 0 rem(20) rem(100) rem(20);

    font-family: $font-display;
    font-size: $font-size-bigger;
    text-transform: uppercase;

    @include mobile {
      font-size: $font-size-gianter;
    }

    @include tablet-small {
      font-size: $font-size-extra1;
    }
  }
}

.image {
  background-image: url('/img/lines(1).png');
  background-size: 100%;
  border-top: solid 1px $Timberwolf;
  display: flex;
  justify-content: center;
  margin-top: rem(-50);
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 20%;
  position: relative;

  @include laptop {
    background-color: $Dark-Purple;
    background-image: none;
    border-top: none;
    border-top-right-radius: rem(50);
    margin-top: 0;
    padding-bottom: 0;
  }

  @include laptop {
    flex: 1;
  }

  &__img {
    scale: 1.3;

    @include laptop {
      margin-top: rem(200);
      scale: 1;
      width: 150%;
    }
  }

  &__background {
    left: 0;
    position: absolute;
    top: 0;
  }
}

.content {
  background-color: $Dark-Purple;
  color: $Timberwolf;
  padding: rem(100) 0;

  @include tablet-small {
    font-size: $font-size-medium;
  }

  &__txt {
    display: flex;
    flex-direction: column;
    gap: rem(20);
    padding: 0 rem(20);
    position: relative;

    @include laptop {
      margin-top: rem(-300);
      max-width: 50%;
    }

    &::before {
      background-image: url('/img/NeuralMinds.png');
      background-size: cover;
      content: '';
      filter: blur(10px);
      height: 100%;
      left: 0;
      opacity: 0.2;
      position: absolute;
      top: 0;
      width: 100%;
    }

    p:nth-child(2) {
      color: $Timberwolf;

      font-family: $font-display;
      text-transform: lowercase;
    }
  }

  &__link {
    align-items: center;
    border-bottom: 1px solid $Timberwolf;
    border-top: 1px solid $Timberwolf;
    display: flex;
    gap: rem(20);
    justify-content: center;
    margin: rem(50) auto 0 auto;
    padding: rem(20) 0;

    &--item {
      border: 1px solid $Timberwolf;
      border-radius: 20px;
      color: $Timberwolf;
      padding: rem(10) rem(20);
    }

    &--arrow {
      width: rem(25);
    }
  }
}

.laptop {
  @include laptop {
    display: flex;
  }
}
</style>
