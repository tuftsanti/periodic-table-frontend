<template>
  <div class="about">
    <Titlebar/>
    <h1>About the App</h1>
    <div class="text">
      <div class="content is-small">
        This app combines my previous career as an analytical chemist with my new career in software. I've always needed a quick but rubust way to grab elemental information on the go, and this satisfies that need. I've also ensured it's mobile friendly, so it's truly portable! 
      </div>
      <h2>Features: </h2>
      <div class="content is-small">
        <ul>
          <li>
            Fully searchable list of all current elements
          </li>
          <li>
            Pulls list from an API, with a static file as backup
          </li>
          <li>
            Each element page shows the standard table square with pertinent information
          </li>
          <li>
            Additional elemental information resides in a table below
          </li>
          <li>
            The color of each square coincides with its CPK color, a chart of which is found at the bottom of each element's page
          </li>
          <li>
            Looking for fun? Click the "Random Element" button to learn something new!
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Titlebar from "./Titlebar"
export default {
  name: 'About',
  components: {
    Titlebar
  }
}
</script>
<style scoped>
  .about {
    background-color: gray;
  }
  h1 {
  background-color: ghostwhite;
  padding: 10px;
  color: #2c3e50;
  font-weight: bold;
  }
  h2 {
    text-align: center;
    text-decoration: underline red;
  }
  li {
    padding-left: 1em;
    text-indent: 0em;
  }
  .text {
  background-color: ghostwhite;
  width: 75%;
  margin: 20px auto;
  border: 2px solid black;
  border-radius: 25px;
  padding: 40px;
  text-align: justify;
  line-height: 2.5rem;
  text-indent: 3rem;
  }
  @media (max-width: 500px) {
    .text {
      font-size: .6rem;
      line-height: 1.2rem;
      padding: 8px;
    }
  }
</style>