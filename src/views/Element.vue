<template>
  <div class="element-single">
    <section class="hero" v-bind:style="{backgroundColor: `#${element.cpkHexColor}`}">
      <div class="hero-body">
        <div class="container">
          <h1 class="symbol">{{element.symbol}}</h1>
          <h1 class="title">
            {{ element.name }}
          </h1>
          <h2 class="subtitle ">
            <strong>Atomic Number:</strong> {{ element.atomicNumber }}
            <br>
            <strong>Atomic Mass:</strong> {{ element.atomicMass }} amu
          </h2>
        </div>
      </div>
    </section>
    <section class="element-content">
      <div class="container">
        <p class="is-size-4 description">{{ element.description }}</p>
        <p class="is-size-5"><strong>Location:</strong> {{ element.location }}</p>
        <p class="is-size-5"><strong>Category:</strong> {{ element.category }}</p>
        <div class="element-images columns is-multiline has-text-centered">

            <img :src=element.spectral_img :alt="element.name">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import getter from '@/services/getter.js'
export default {
  name: 'Element',
  data () {
    return {
      element: {}
    }  
  },
  created() {
    // const elementID = Number(this.$route.params.id);
    // let element = this.elements.find(element => element.id === elementID);
    // this.element = element;
    // console.log(`test`)
    this.getData()
  },
  methods: {
    async getData() {
      // const token = await this.$auth.getTokenSilently()

      getter.getElement(this.$route.params.id) //, token)
      .then (
        (element => {
          this.$set(this, "element", element)
        })
        .bind(this),
      )}
  }
}
</script>

<style scoped>
.hero {
  /* background-color: '${bgColor}'; */
  }
.hero-body {
  width: 33%;
  margin-left: auto;
  margin-right: auto;
  border: 1rem solid black;
  border-radius: 1rem;
}
@media (max-width: 400px) {
  .hero-body {
    width: 100%;
  }
}
.symbol {
  font-size: 5rem;
  /* margin: 0; */
}
</style>