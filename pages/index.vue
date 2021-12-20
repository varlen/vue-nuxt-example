<template>
  <section class="section">
    <div class="columns is-mobile">
      <card
        :id="beerId"
        :title="beerName"
        :imageUrl="beerImageUrl"
        @next="loadBeer"
        @favourite="addFavouriteBeer()"
      >
      <div>
        <p>{{ beerDescription }}</p>
      </div>
      </card>
      <div>
        <h3> Favourite Beers </h3>
        <ul>
          <li v-for="beer in favouriteBeers" :key="beer.id" >
            <a @click="loadBeer(beer.id)">{{ beer.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

function getBeer (id) {
  const URL = `https://api.punkapi.com/v2/beers/${id ?? 'random'}`
  return fetch(URL).then((result) => { return result.json() })
}

export default {
  name: 'IndexPage',
  components: {
    Card
  },
  data () {
    return {
      beerName: '',
      beerDescription: '',
      beerImageUrl: '',
      favouriteBeers: []
    }
  },
  methods: {
    loadBeer (id) {
      getBeer(id).then(
        (beers) => {
          const beer = beers[0]
          this.beerId = beer.id
          this.beerName = beer.name
          this.beerDescription = beer.description
          this.beerImageUrl = beer.image_url
        }
      )
    },
    addFavouriteBeer () {
      this.favouriteBeers.push(
        {
          id: this.beerId,
          name: this.beerName
        }
      )
    }
  },
  /* eslint-disable object-shorthand */
  beforeMount: function () {
    this.loadBeer()
  }
}
</script>
