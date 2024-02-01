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
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 70%;
  position: relative;
  right: 5em;
  width: 100vw;
  z-index: -2;

  &__circle {
    border-radius: 100px;
    filter: blur(60px);
    overflow: hidden;
  }
}

.one {
  animation: one 8s infinite ease;
  background-color: $Air-Superiority-Blue;
  height: 200px;
  left: 100px;
  position: absolute;
  top: 200px;
  transform: scale(1);
  width: 200px;
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

.four {
  animation: four 10s infinite ease-in-out;
  background-color: $Timberwolf;
  height: 180px;
  left: 50px;
  position: absolute;
  top: 50px;
  transform: scale(1);
  width: 180px;
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

.two {
  animation: two 8s infinite ease;
  background-color: $Ultra-Violet;
  height: 200px;
  position: absolute;
  right: -20px;
  top: 80px;
  transform: scale(1.2);
  width: 250px;
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
  animation: three 8s infinite linear;
  background-color: $Lapis-Lazuli;
  height: 250px;
  position: absolute;
  right: 0;
  top: 300px;
  transform: scale(1);
  width: 200px;
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
</style>
