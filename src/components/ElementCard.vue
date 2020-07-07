<template>
  <div class="element-card">
    <div class="card" :element='element'>
      <div class="card-content">
        <div class="element-number is-size-3-mobile">{{element.atomicNumber}}</div>
        <div class="words is-size-4 is-size-4-mobile has-text-weight-bold">{{element.symbol}} - {{element.name}}</div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'element'
  ]
}
</script>

<style lang="scss" scoped>
  .element-card {
    height: 3rem;
  }
  .card {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/e4/Hydrogen_Spectra.jpg');
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    text-align: center;
  }
  .card-content {
    display: flex;
    padding-top: 50px;
    position: absolute;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0;
    padding: 10px;
    height: 100%;
    width: 100%;
    // span {
    //   font-size: 60px;
    //   text-align: center;
    //   width: 100%;
    //   position: absolute;
    //   bottom: 0rem;
    //   right: 0;
    // }
  }
  .element-number {
    // background-color: ghostwhite;
    color: ghostwhite;
    font-size: 2em;
    padding: 0 10px;
    position: absolute;
    top: 0;
    // left: 0;
  }
  .words {
    color: ghostwhite;
    // font-size: 1em;
    padding: auto 20px;
    text-align: center;
    width: 50%;
    margin: auto;
  }
  @media (max-width: 500px) {
  .words {
    font-size: 2em;
    // padding: 0 20px;
    width: 90%;
    position: absolute;
    top: .5rem;
    right: 1rem;
    text-align: right;
  }
  }
  //   @media (max-width: 500px) {
  //   .element-number {
  //    font-size: 1.7rem;
  //   }
  // }
</style>