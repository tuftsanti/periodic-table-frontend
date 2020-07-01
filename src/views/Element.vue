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
export default {
  name: 'Element',
  data () {
    return {
      elements: [
        {
          id: 1,
          name: 'Charity Ball',
          category: 'Fundraising',
          description: 'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
          ],
          location: '1234 Fancy Ave',
          date: '12-25-2019',
          time: '11:30'
        },
        {
          id: 2,
          name: 'Rescue Center Goods Drive',
          category: 'Adoptions',
          description: 'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500'
          ],
          location: '1234 Dog Alley',
          date: '11-21-2019',
          time: '12:00'
        }
      ],
      element: {}
    }  
  },
  created() {
    const elementID = Number(this.$route.params.id);
    let element = this.elements.find(element => element.id === elementID);
    this.element = element;
  }
}
</script>