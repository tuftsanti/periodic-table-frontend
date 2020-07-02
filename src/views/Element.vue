<template>
  <div class="element-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ element.name }}
          </h1>
          <h2 class="subtitle ">
            <strong>Date:</strong> {{ element.date }}
            <br>
            <strong>Time:</strong> {{ element.time }}
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
          <div v-for="image in element.images" :key="image.id" class="column is-one-third">
            <img :src="image" :alt="element.name">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import service from '@/services/service.js'
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
    this.getData()
  },
  methods: {
    async getData() {
      const token = await this.$auth.getTokenSilently()

      service.getElement(this.$route.params.id, token)
      .then (
        (element => {
          this.$set(this, "element", element)
        })
        .bind(this)
      )}
  }
}
</script>