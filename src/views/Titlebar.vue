<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            The Periodic Table of Elements       
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Titlebar'
}
</script>

<style lang="scss" scoped>
  .home {
    background-color: gray;
  }
  .hero {  
    text-align: center;
    background-image: url('https://www.philipharris.co.uk/media/1924/periodic-table-header-v2-min.png?anchor=center&mode=crop&width=1110&rnd=131931602780000000&quality=75');
    background-size: cover;
    background-position: center;
    height: 100%;
  }
  .hero-body .title {
    font-size: 40px;
  }
  @media (max-width: 400px) {
    .hero .title {
      font-size: 2rem;
      height: 50%;
  }
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