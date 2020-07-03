<template>
  <div class="element-card">
    <div class="card" :element='element'>
      <div class="card-content">
        <div class="element-number">{{element.atomicNumber}}</div>
        <h2 class="is-size-4 has-text-weight-bold">{{element.symbol}} - {{element.name}}</h2>

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
    padding-top: 50px;
    position: absolute;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0;
    padding: 10px;
    height: 100%;
    width: 100%;
    span {
      font-size: 60px;
      text-align: center;
      width: 100%;
      position: absolute;
      bottom: 4rem;
      right: 0;
    }
    h2 {
      // margin-top: 10px;
    }
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
</style>