<template>
  <div class="elements container">
    <div class="searchName">
      <input type="text" placeholder="Search by name" v-model="filter"/>
    </div>
    <div class="dropdown-list"></div>
    <button @click="sortit">Sort by name</button>

    <el-col :lg="6" :md="6" :sm="6" :xs="24">
      <el-select v-model="sort" placeholder="Sort by">
        <el-option
          :key="item in options"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>

    <!-- <v-select placeholder="Sort by phase" :options="['solid', 'liquid', 'gas']" v-model="elementPhaseSearch"></v-select> -->
    <div class="columns is-multiline">
      <div v-for="element in textSearch" :element="element" :key="element.atomicNumber" class="column is-full">
        <router-link :to="'/element/' + element.atomicNumber">
          <ElementCard :element="element" />
        </router-link>
      </div>
    </div>
    <go-top></go-top>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementCard from '@/components/ElementCard';
import getter from '@/services/getter.js';
import axios from 'axios';
import GoTop from '@inotom/vue-go-top';

import vSelect from 'vue-select'
// import 'vue-select/dist/vue-select.css';
Vue.component('v-select', vSelect)
Vue.config.delimiters = ['${', '}'];

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
      elementFeed: null,
      searchType: "textSearch()",
      filter: '',
      sort: '',
      options: [
        { label: 'Default', value: 'none' },
        { label: 'Alphabetically', value: 'Alphabetically' },
      ]
    }  
  },
  created() {
    this.getData()
    // this.textSearch()
  },
  methods: {
    async getData() {
      getter.getElements()
      .then((elements => {this.$set(this, 'elements', elements)})
      .bind(this)
      )
    },
    // textSearch() {
    //   let result = this.elementFeed
    //   let elementNameSearch = this.elementNameSearch
    //   if (!elementNameSearch) {
    //     return result
    //   }
    //   const searchString = elementNameSearch.trim().toLowerCase()
    //   result = result.filter(function(item) {
    //     if (item.name.toLowerCase().indexOf(searchString) !== -1) {
    //       return item
    //     }
    //   }) 
    //   return result
    // },
    // sortit() {
    //   // console.log(this.elements)
    //   this.elements.sort(this.sortAlphaNum);
    //   // console.log(this.elements)
    // },
    // sortAlphaNum(a,b) {
    //   let regexAlpha = /[^a-zA-Z]/g;
    //   let regexNumber = /[^0-9]/g;
    //   let aA = a.name.replace(regexAlpha, "");
    //   let bA = b.name.replace(regexAlpha, "");
    //   if (aA === bA) {
    //       let aN = parseInt(a.name.replace(regexNumber, ""), 10);
    //       let bN = parseInt(b.name.replace(regexNumber, ""), 10);
    //       return aN === bN ? 0 : aN > bN ? 1 : -1;
    //   } else {
    //       return aA > bA ? 1 : -1;
    //   }
    // }
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
    textSearch() {
      let elements = this.elements.filter((element) => {
        return element.name.toLowerCase().includes(this.filter.toLowerCase())
      })
      if (this.sort == 'Alphabetically') {
        return elements.sort(function (a,b) {
          return a.name - b.name
        })
      } else {
        return elements
      }
    },
    // textSearch() {
    //   let result = this.elementFeed
    //   let elementNameSearch = this.elementNameSearch
    //   if (!elementNameSearch) {
    //     return result
    //   }
    //   const searchString = elementNameSearch.trim().toLowerCase()
    //   result = result.filter(function(item) {
    //     if (item.name.toLowerCase().indexOf(searchString) !== -1) {
    //       return item
    //     }
    //   }) 
    //   return result
    // },
    // sortByName: function () {
    //   let result = this.elementFeed
    //   return result.sort((a,b) => {
    //     a[this.name] < b[this.name]
    //   })
    // },
    // phaseSearch: function () {
    // let result = this.elementFeed
    // let elementPhaseSearch = this.elementPhaseSearch
    // if (!elementPhaseSearch) {
    //   return result
    // }
    // // const searchString = elementPhaseSearch.trim().toLowerCase()
    // console.log(elementPhaseSearch)
    // result = result.filter(function(item) {
    //   if (item.standardState.toLowerCase().indexOf(elementPhaseSearch) !== -1) {
    //     return item
    //   }
    // }) 
    // return result
    // }
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