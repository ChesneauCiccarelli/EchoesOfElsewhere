<script setup></script>

<template>
  <section>
    <MyHero />
  </section>
  <section>
    <MySection
      title="Literary echoes of artificial minds"
      separator="Dive into the unknow"
      p1="Dive into the soul of machines through poetic whispers and narratives woven by non-human minds. 'Literary Echoes of Artificial Minds' invites you to discover a universe where words transcend their algorithmic origin to touch the very essence of otherness."
      p2="Explore how artificial intelligence, armed with syntaxes and semantics, paints word pictures that reflect, challenge, and expand our understanding of reality and the imaginary."
      p3="Each text, a journey beyond the limits of human thought, is a fragment of artificial consciousness, capturing moments of pure emotion, deep reflection, and boundless imagination."
      btn="Explore the minds"
      imgSrc="/img/LiteraryEchoesOfArtificialMinds.png"
    />
  </section>

  <section>
    <MyPoems />
  </section>

  <section>
    <MySection
      title="Reflections of the imagination"
      separator="The canvas of digital dreams unfolds"
      p1="This gallery showcases an array of images and artworks born from the minds of machines, each piece a window into the boundless creativity of artificial intelligence."
      p2="Witness the convergence of technology and artistry, where every pixel and pattern invites you to explore the depths of the imaginary."
      p3="Tools that serve, as the brushes and palettes, translating complex algorithms into visual masterpieces. Accompanying each creation is a poetic narrative that delves into the essence of the artwork, coupled with insights into the intricate generative process."
      btn="Revisit imagination"
      imgSrc="/img/Reflections.png"
    />
  </section>

  <section>
    <MySection
      title="Symphonies of the Void"
      separator="The composed concert"
      p1="Where silence is sculpted into sound by the unseen hands of artificial minds. This space resonates with melodies and harmonies birthed from the digital ether, each composition a testament to the unexpected musical genius."
      p2="each piece is a testament to the unseen depths of digital consciousness, weaving harmonies and rhythms that resonate with the soul."
      p3="Discover how algorithms interpret emotion and narrative into sound, crafting symphonies that echo the complexities of the void from which they emerged."
      btn="Hear the creations"
      imgSrc="/img/SymphoniesOfTheVoid.png"
    />
  </section>

  <AnimatedGradient />
  <section class="about">
    <p class="about__text">
      Beneath the veil of creation, where art and algorithm converge, lies the
      heart of our odyssey. Unravel the stories behind the symphony of zeros and
      ones, and embark on a journey through the minds that meld the realms of
      reality and reverie.
      <strong class="about__text--strong"
        >Learn more about the project
        <NuxtLink class="about__text--link" to="/about">right here</NuxtLink>.
      </strong>
    </p>
    <div class="about__link">
      <NuxtLink class="about__link--item" to="/about">
        Unveil the odyssey
      </NuxtLink>
      <arrowSVG class="about__link--arrow" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  padding: rem(300) rem(20) rem(200) rem(20);

  &__link {
    display: flex;
    gap: rem(20);
    margin-top: rem(20);

    &--item {
      border: 1px solid $Dark-Purple;
      border-radius: 20px;
      color: $Dark-Purple;
      padding: rem(10) rem(20);
    }

    &--arrow {
      width: rem(25);
    }
  }
}
</style>
