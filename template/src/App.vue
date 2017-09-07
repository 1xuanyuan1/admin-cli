<template>
  <div id="app">
    <navbar v-if="isAuth"></navbar>
    <app-main></app-main>
    <footer-bar v-if="isAuth"></footer-bar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import AppMain from '@/components/AppMain'
import FooterBar from '@/components/FooterBar'
export default {
  name: 'app',
  components: {
    Navbar,
    AppMain,
    FooterBar
  },
  computed: {
    isAuth () {
      return !this.$route.meta.auth || false
    }
  }
}
</script>

<style lang="scss">
@import "~bulma";
@import "~@/scss/style.scss";
</style>
