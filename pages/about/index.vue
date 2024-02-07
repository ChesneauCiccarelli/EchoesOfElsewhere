<template>
  <div class="Hero">
    <div class="Hero__top">
      <p class="Hero__top--txt">About Page</p>
      <logotypeSVG class="Hero__top--logo" />
      <p class="Hero__top--subtext">When art meets other intelligences</p>
      <AnimatedGradient class="Hero__top--gradient" />
    </div>
  </div>

  <article class="section">
    <h2 class="section__title">About the project</h2>

    <div class="about">
      <h3 class="about__title">Welcome to a journey beyond the known</h3>
      <p class="about__text">
        At the intersection of art and ar tificial intelligence, our project
        unfolds—a digital odyssey that explores the realms of otherness and
        creativity beyond human boundaries. Inspired by the philosophical
        musings of Jean-Paul Sartre and the visionary storytelling of Steven
        Spielberg, we embark on an exploration of what it means to encounter the
        'Other'—be it through the lens of an AI, the depths of space, or the
        echoes of our own souls.
      </p>
    </div>
    <nuxt-img class="about__img float-right" src="/img/Prism.png" alt="Prism" />

    <div class="about">
      <h3 class="about__title">Concept and Inspiration</h3>
      <p class="about__text">
        This project, conceived within the academic framework of a Bachelor's
        Degree in Multimedia and Internet Professions (BUT MMI), is more than
        just a showcase of technical skills. It is a canvas for existential
        inquiry, a dialogue between human and non-human intellects. Drawing from
        the enigmatic question that divides the scientific community—will the
        first non-human intelligence we encounter be artificial,
        extraterrestrial, or a blend of both?—we delve into the essence of
        alterity, entirely created by Lilian Chesneau Ciccarelli.
      </p>
    </div>
    <nuxt-img class="about__img" src="/img/Void.png" alt="Void" />

    <div class="about">
      <h3 class="about__title">Technology and Creativity</h3>
      <p class="about__text">
        Every element you encounter on this site—from the poetic verses that
        whisper of otherness to the vivid images that dance on the edge of
        imagination—has been birthed by the intricate algorithms of artificial
        intelligence but, behind every AI-generated piece lies a narrative, a
        human reflection on the process, the inspiration, and the implications
        of such creations. This project is not just about showcasing what AI can
        do; it's about exploring how these digital creations affect us,
        challenge us, and reflect our own humanity back to us.
      </p>
    </div>
    <nuxt-img class="about__img float-right" src="/img/Shame.png" alt="Void" />

    <div class="about">
      <h3 class="about__title">Join the Odyssey</h3>
      <p class="about__text">
        This project is an invitation—to dream, to question, to explore. Join us
        on this journey as we navigate the uncharted waters of creativity, where
        the currents of human imagination meet the waves of artificial
        intelligence.
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.Hero {
  margin-top: rem(150);

  &__top {
    position: relative;

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

.section {
  margin: rem(100) 0 rem(200) 0;

  &__title {
    color: $English-Violet;
    margin: 0 rem(20) rem(50) rem(20);

    font-family: $font-display;
    font-size: $font-size-gianter;
    text-transform: uppercase;
  }
}

.about {
  margin: 0 rem(20) 0 rem(20);

  &__title {
    font-weight: 600;
    margin-bottom: rem(20);
  }

  &__text {
    margin-bottom: rem(50);
  }

  &__img {
    margin-bottom: rem(50);
  }
}
</style>
