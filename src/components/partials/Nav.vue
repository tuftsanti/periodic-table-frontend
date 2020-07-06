<template>
<!-- <div> -->
<nav class="navbar is-fixed-top container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <!-- <strong class="is-size-4">The Periodic Table</strong> -->
      <img src="../../assets/periodic-table.png" alt="Periodic Table" width="80" height="28">
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu" @click="menuIsShown = !menuIsShown" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navMenu" class="navbar-menu" v-bind:class="{'is-active':menuIsShown }">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link @click.native="randomLink()" :to="randomLink()" class="navbar-item" >❓ Random Element ❓</router-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <!-- Check that the SDK client is not currently loading before accessing methods
          <div v-if="!$auth.loading">
            show login when not authenticated
            <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"><strong>Sign in</strong></a>
            show logout when authenticated
            <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"><strong>Log out</strong></a>
         </div> -->
       </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Nav',
    data () {
      return {
        menuIsShown: false
      }  
    },
    watch: {
      '$route' () {
        this.menuIsShown = false
      }
    },
  ////// AUTH
  //   methods: {
  //   // Log the user in
  //   login() {
  //     this.$auth.loginWithRedirect();
  //   },
  //   // Log the user out
  //   logout() {
  //     this.$auth.logout({
  //       returnTo: window.location.origin
  //     });
  //   }
  // }
   methods:{
     randomLink(){
          let rnd=Math.floor(Math.random() * 118) + 1;
          return '/element/'+rnd+''
          }
      }
}
</script>

<style lang="scss" scoped>
  nav {
    // margin-top: 25px;
    // margin-bottom: 30px;
    background-color: lightslategray;
    a {
      font-weight: bold;
      color: darkblue;
      &.router-link-exact-active {
        color: orange;
      }
    }
  }
  .is-active {  
    width: 25%;
    position: absolute;
    right: 0;
  }
  @media (max-width: 400px) {
    .is-active {  
       width: 65%;
    }
  }
</style>