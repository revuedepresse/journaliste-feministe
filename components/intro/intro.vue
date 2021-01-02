<template>
  <div class="intro">
    <div class="intro__container">
      <div class="intro__logo-container">
        <a href="/">
          <img
            class="intro__logo lazyload"
            alt="logo"
            width="100"
            height="100"
            :data-src="logo"
          />
        </a>
      </div>
      <div class="intro__description-container">
        <p class="intro__description">Chaque jour, les posts les plus marquants émanants de journalistes féministes. Cette page est alimentée à partir d'une liste Twitter, Journaliste et féministe :
          <a
            class="intro__project"
            href="https://twitter.com/i/lists/1094868073247637505">https://twitter.com/i/lists/1094868073247637505</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "~/assets/logo.png";

export default {
  name: "intro",
  data() {
    return {
      currentRoute: this.$router.currentRoute.path,
      logo
    }
  }
}
</script>

<style lang="scss" scoped>
@import './intro.scss';
</style>
