<template>
  <div class="links">
    <NuxtLink class="links__item" to="/legal">Legal Notices</NuxtLink>
    <NuxtLink class="links__item" to="/about">About Page</NuxtLink>
  </div>
  <div class="infos">
    <NuxtLink to="/">
      <nuxt-img class="infos__icon" src="/icon/logo.png" alt="Logo" />
    </NuxtLink>
    <div class="infos__txtContainer">
      <p class="infos__txtContainer--title">Echoes Of Elsewhere</p>
      <NuxtLink
        class="infos__txtContainer--name"
        to="https://www.linkedin.com/in/chesneauciccarelli/"
        >Lilian Chesneau Ciccarelli</NuxtLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links {
  border-top: 1px solid $Dark-Purple;
  display: flex;
  justify-content: space-around;
  padding: rem(20) 0;

  &__item {
    border: 1px solid $Dark-Purple;
    border-radius: 20px;
    color: $Dark-Purple;
    padding: rem(10) rem(20);
  }
}

.infos {
  align-items: center;
  display: flex;
  gap: rem(20);
  justify-content: center;
  margin-bottom: rem(50);

  &__icon {
    height: rem(50);
    width: rem(50);
  }

  &__txtContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__txtContainer--title {
    color: $Dark-Purple;
  }

  &__txtContainer--name {
    color: $English-Violet;
    text-decoration: underline;
  }
}
</style>
