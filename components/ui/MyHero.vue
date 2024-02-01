<script></script>

<template>
  <div class="Hero">
    <div class="Hero__top">
      <p class="Hero__top--txt">On the threshold of the unknown</p>
      <logotypeSVG class="Hero__top--logo" />
      <p class="Hero__top--subtext">When art meets other intelligences</p>
      <AnimatedGradient class="Hero__top--gradient" />
    </div>
    <div class="Hero__bottom">
      <p class="Hero__bottom--text">
        In the vastness of the universe and the depths of the mind,
        <strong>where does the story of the other begin?</strong> Is it among
        distant stars, within the circuits of artificial intelligence, or
        somewhere in between? Explore a world where art becomes the bridge
        between human souls and non-human spirits, uncovering the nuances of
        otherness through the prism of binary entities.
      </p>
      <p class="Hero__bottom--background">Otherness</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Hero {
  margin-top: rem(150);

  @include laptop {
    border-right: solid 1px $Dark-Purple;
    display: flex;
    justify-content: space-between;
  }

  &__bottom {
    margin-top: rem(100);
    padding: 0 rem(20) rem(120) rem(20);
    position: relative;

    @include laptop {
      border-bottom: solid 1px $Dark-Purple;
      flex: 1;
      margin-top: rem(600);
    }

    @include tablet-small {
      font-size: $font-size-medium;
    }

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

      @include mobile {
        left: -10%;
        top: -35%;
      }

      @include tablet-small {
        left: -10%;
      }

      @include tablet {
        left: -5%;
        top: -45%;
      }

      @include laptop {
        left: -6%;
        top: -40%;
      }
    }

    &--txt {
      border-bottom: solid 1px $Dark-Purple;
      border-top: solid 1px $Dark-Purple;
      padding: rem(15) 0;
      text-align: center;
      text-transform: uppercase;
    }

    &--subtext {
      border-bottom: solid 1px $Dark-Purple;
      padding-bottom: rem(50);
      font-size: $font-size-small;
      text-align: center;
    }

    &--gradient {
      position: absolute;
      top: rem(-100);
      z-index: -1;
    }
  }

  &__top {
    position: relative;

    @include laptop {
      border-right: solid 1px $Dark-Purple;
      flex: 1;
    }

    &--gradient {
      position: absolute;
      top: rem(-100);
      z-index: -1;
    }

    &--logo {
      margin: rem(50) rem(20) rem(15) rem(20);
    }

    &--subtext {
      border-bottom: solid 1px $Dark-Purple;
      padding-bottom: rem(50);
      font-size: $font-size-small;
      text-align: center;
    }

    &--txt {
      border-bottom: solid 1px $Dark-Purple;
      border-top: solid 1px $Dark-Purple;
      padding: rem(15) 0;
      text-align: center;
      text-transform: uppercase;
    }
  }
}
</style>
