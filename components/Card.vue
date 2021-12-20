<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ displayTitle }}
        </p>
        <b-button
          icon-right="star"
          @click="$emit('favourite')"
        />
        <b-button
          icon-right="glass-mug"
          @click="$emit('next')"
        />
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <img v-if="imageUrl" :src="imageUrl" class="beer-image"/>
          <div v-else>
            No image available for this beer.
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuefyCard',
  computed: {
    displayTitle () {
      if (!this.id) {
        return ''
      }
      return `#${this.id} - ${this.title}`
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String
    },
    id: {
      type: Number
    }
  }
}
</script>

<style scoped>
.beer-image {
  height: 300px;
}
</style>
