<template>
  <div class="my-nav">
    <nav class="navbar container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="~@/assets/img/nav-logo.png" alt="logo">
        </router-link>
        <div class="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link 
            class="navbar-item is-tab" 
            v-for="menu in menus"
            :key="menu"
            :to="`/${menu}`" v-html="string.nav[menu]">
          </router-link>
        </div>

        <div class="navbar-end">
          <a class="navbar-item">
            <span class="icon">
              <i class="fa fa-sign-out"></i>
            </span>
            注销
          </a>
        </div>
      </div>
    </nav>  
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  computed: {
    ...mapGetters({
      string: 'global/string'
    })
  },
  data () {
    return {
      menus: ['analysis', 'app', 'recommend']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/base.scss";
.my-nav {
  box-shadow: 0 1px 0px rgba(10, 10, 10, 0.1);
  position: fixed;
  z-index: 999;
  width: 100%;
  transition: all .3s;
  background: linear-gradient(270deg, #1486a2, #154163);
  .navbar {
    background: transparent;
    .navbar-item, .navbar-link{
      color: white;
      &:hover{
        background: rgba(255, 255, 255, 0.1);
      }
      &.is-tab{
        &:hover, &.is-active{
          border-bottom-color: white;
        }
      }
    }
  }
}
</style>
