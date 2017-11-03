<template>
  <div id="app">
    <h1>{{title}}</h1>
    <div class="compoents-container container-fluid">
      <div class="row">
        <Character 
        v-for="(id, index) in list_characters" 
        :key="index"
        :character-id="id"
      ></Character>
      </div>
    </div>
  </div>
</template>

<script>
import Character from "./components/Character.vue"

export default {
  name: 'app',
  components: {
    Character,
  },
  data () {
    return {
      title: 'Starbase Router!',
      list_characters: [12, 13, 56, 55, 24, 58, 23, 1]
    }
  }
}
</script>

<style lang="scss">
  
</style>
