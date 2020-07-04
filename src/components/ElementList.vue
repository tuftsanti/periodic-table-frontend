<template>
  <div class="elements container">
    <!-- <h2 class="subtitle is-3">
    Pick your favorite
    </h2> -->
  <div class="searchName">
    <input type="text" placeholder="Search by name" v-model="elementNameSearch"/>
  </div>
    <div class="columns is-multiline">
      <div v-for="element in textsearch" :element="element" :key="element.atomicNumber" class="column is-full">
        <router-link :to="'/element/' + element.atomicNumber">
          <ElementCard :element="element" />
        </router-link>
      </div>
    </div>
    <go-top></go-top>
  </div>
</template>

<script>
import ElementCard from '@/components/ElementCard';
import getter from '@/services/getter.js';
import axios from 'axios';
import GoTop from '@inotom/vue-go-top';

export default {
  name: 'ElementList',
  components : {
    ElementCard,
    GoTop
  },
  data () {
    return {
      element: {},
      elements: [],
      elementNameSearch: '',
      elementFeed: null
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
  },
  mounted() {
    axios
      // .get(`https://neelpatel05.pythonanywhere.com/`)
      // .get(`http://localhost:8000/`)
      .get(`https://andys-periodic-table.herokuapp.com/`)
      .then(response => {
        this.elementFeed = response.data
      })
      .catch(error => console.log(`Error searching: \n ${error}`))
  },
  computed: {
    textsearch: function () {
      let result = this.elementFeed
      let elementNameSearch = this.elementNameSearch
      if (!elementNameSearch) {
        return result
      }
      const searchString = elementNameSearch.trim().toLowerCase()
      result = result.filter(function(item) {
        if (item.name.toLowerCase().indexOf(searchString) !== -1) {
          return item
        }
      }) 
      return result
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
  .searchName {
    padding: 2rem;
  }
</style>