<template>
  <div class="container">
    <div class="one container__circle"></div>
    <div class="two container__circle"></div>
    <div class="three container__circle"></div>
    <div class="four container__circle"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -2;
  width: 100vw;
  position: relative;
  right: 5em;
  opacity: 70%;

  &__circle {
    border-radius: 100px;
    filter: blur(60px);
    overflow: hidden;
  }
}

.one {
  background-color: $Air-Superiority-Blue;
  position: absolute;
  top: 200px;
  left: 100px;
  height: 200px;
  width: 200px;

  animation: one 8s infinite ease;
}
@keyframes one {
  0% {
    top: 200px;
    left: 100px;
    transform: scale(1);
  }
  30% {
    top: 300px;
    left: 150px;
    transform: scale(1.2);
  }
  60% {
    top: 100px;
    left: 200px;
    transform: scale(1.3);
  }
  100% {
    top: 200px;
    left: 100px;
    transform: scale(1);
  }
}

.two {
  background-color: $Ultra-Violet;
  position: absolute;
  top: 80px;
  right: -20px;
  height: 200px;
  width: 250px;

  animation: two 8s infinite ease;
}
@keyframes two {
  0% {
    top: 80px;
    right: -20px;
    transform: scale(1.2);
  }
  30% {
    top: 300px;
    right: -20px;
    transform: scale(1);
  }
  60% {
    top: 200px;
    right: 100px;
    transform: scale(1);
  }
  100% {
    top: 80px;
    right: -20px;
    transform: scale(1.2);
  }
}

.three {
  background-color: $Lapis-Lazuli;
  position: absolute;
  right: 0;
  top: 300px;
  height: 250px;
  width: 200px;

  animation: three 8s infinite linear;
}
@keyframes three {
  0% {
    top: 250px;
    right: 0px;
    transform: scale(1);
  }
  30% {
    top: 150px;
    right: 150px;
    transform: scale(1.4);
  }
  60% {
    top: 250px;
    right: 100px;
    transform: scale(1);
  }
  100% {
    top: 250px;
    right: 0px;
    transform: scale(1);
  }
}

.four {
  background-color: $Timberwolf;
  position: absolute;
  top: 50px;
  left: 50px;
  height: 180px;
  width: 180px;

  animation: four 10s infinite ease-in-out;
}

@keyframes four {
  0%,
  100% {
    top: 50px;
    left: 50px;
    transform: scale(1);
  }
  25% {
    top: 200px;
    left: 200px;
    transform: scale(1.5);
  }
  50% {
    top: 350px;
    left: 50px;
    transform: scale(0.8);
  }
  75% {
    top: 200px;
    left: 200px;
    transform: scale(1.2);
  }
}
</style>
