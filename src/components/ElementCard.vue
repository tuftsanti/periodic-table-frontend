<template>
  <div class="element-card">
    <div class="card" :element='element'
      :style="{backgroundImage: element.spectral_img}">
      <div class="card-content">
        <h2 class="is-size-4 has-text-weight-bold">{{element.name}}</h2>
        <div class="element-number">{{element.atomicNumber}}</div>
        <div>{{element.symbol}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'element'
  ],
  //   created() {
  //   this.getImg()
  // },
  // methods: {
  //   getImg() {

      
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  .card {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/e4/Hydrogen_Spectra.jpg');
    height: 100px;
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
    height: 100px;
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
      margin-top: 10px;
    }
  }
  .element-number {
    // background-color: ghostwhite;
    color: ghostwhite;
    font-size: 4em;
    padding: 2px 10px;
    position: absolute;
    top: 0;
    // left: 0;
  }
</style>