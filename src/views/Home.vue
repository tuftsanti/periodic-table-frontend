<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            The Periodic Table of Elements       
          </h1>
            <!-- <div class="button-block">
              <button v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-dark">Sign Up to Browse Events</button>
              <h3 v-if="$auth.isAuthenticated" class="is-size-3 has-background-dark welcome">Welcome, {{ $auth.user.name }}!</h3>
            </div> -->
        </div>
      </div>
    </section>
    <ElementList/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ElementList from "../components/ElementList"
export default {
  name: 'Home',
  components: {
    ElementList
    // HelloWorld
  }
  //   methods: {
  //   // Log the user in
  //   login() {
  //     this.$auth.loginWithRedirect();
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  .hero {  
    text-align: center;
    background-image: url('https://www.philipharris.co.uk/media/1924/periodic-table-header-v2-min.png?anchor=center&mode=crop&width=1110&rnd=131931602780000000&quality=75');
    background-size: cover;
    background-position: center;
    height: 150px;
  }
  .hero-body .title {
    font-size: 40px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -50px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>