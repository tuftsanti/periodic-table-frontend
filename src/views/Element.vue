<template>
  <div class="element-single">
    <Titlebar/>
    <section class="hero" v-bind:style="{backgroundColor: `#${element.cpkHexColor}`}">
      <div class="hero-body">
        <div class="container">
          <h1 class="atomic-number title is-size-1" >{{element.atomicNumber}}</h1>
          <h1 class="symbol">{{element.symbol}}</h1>
          <h1 class="title">
            {{ element.name }}
          </h1>
          <h2 class="atomic-mass title is-size-5">
            {{ element.atomicMass }} amu
          </h2>
        </div>
      </div>
    </section>
    <section class="element-content">
      <div class="container"><br>
        <p class="is-size-5"><strong>Additional Information:</strong></p>
      </div><br>
      <div class="table-container">
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th><abbr title="State">State</abbr></th>
              <th><abbr title="Group">Group Block</abbr></th>
              <th><abbr title="Density">Density</abbr></th>
              <th><abbr title="Radius">Atomic Radius</abbr></th>
              <th><abbr title="Affinity">Electron Affinity</abbr></th>
              <th><abbr title="Ionization">Ionization Energy</abbr></th>
              <th><abbr title="MP">Melting Point</abbr></th>
              <th><abbr title="BP">Boiling Point</abbr></th>
              <th><abbr title="Year">Year Discovered</abbr></th>
            </tr>
            <tr>
              <td>{{ element.standardState }}</td>
              <td>{{ element.groupBlock }}</td>
              <td>{{ element.density }} kg/L</td>
              <td>{{ element.atomicRadius }} pm</td>
              <td>{{ element.electronAffinity }}</td>
              <td>{{ element.ionizationEnergy }} kJ/mol</td>
              <td>{{ element.meltingPoint }} °K</td>
              <td>{{ element.boilingPoint }} °K</td>
              <td>{{ element.yearDiscovered }}</td>
            </tr>
          </thead>
        </table>
      </div><br>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/CPK-coloring-periodic-table.svg/1024px-CPK-coloring-periodic-table.svg.png" alt="CPK Chart">
    </section>
  </div>
</template>

<script>
import Titlebar from "./Titlebar"
import getter from '@/services/getter.js'
export default {
  name: 'Element',
  components: {
    Titlebar
  },
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
  width: 366px;
  height: 366px;
  margin-left: auto;
  margin-right: auto;
  border: 1rem solid black;
  border-radius: 1rem;
}
.hero-body {
  padding: 20px;
}
.symbol {
  font-size: 6rem;
  padding-top: 4rem;
}
.atomic-number {
  position: absolute;
  top: .5rem;
  left: 0.5rem;
}
.table {
  width: 90%;
  margin: auto;
}
@media (max-width: 400px) {
  .hero {
    width: 100%;
  }
}

</style>