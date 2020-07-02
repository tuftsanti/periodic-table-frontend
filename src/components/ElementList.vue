<template>
  <div class="elements container">
    <!-- <h2 class="subtitle is-3">
    Pick your favorite
    </h2> -->
    <div class="columns is-multiline">
      <div v-for="element in elements" :element="element" :key="element.atomicNumber" class="column is-full">
        <router-link :to="'/element/' + element.atomicNumber">
          <ElementCard :element="element" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ElementCard from '@/components/ElementCard';
import getter from '@/services/getter.js'

export default {
  name: 'ElementList',
  components : {
    ElementCard
  },
  data () {
    return {
      element: {},
      elements: []
    }  
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      getter.getElements()
      .then((elements => {this.$set(this, 'elements', elements)})
      .bind(this)
      )
    }
  }
}
</script>
<style lang="scss" scoped>
  .element {
    margin-top: 100px;
    text-align: center;
  }
  .column {
    padding: 6px
  }
</style>