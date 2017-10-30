<template>
  <div id="app">
    <h3>{{title}}</h3>
    <div class="container">
      <div class="row">
        <Character 
        v-for="(id, index) in initial_ids" 
        v-bind:id="id" 
        v-bind:index="index" 
        v-bind:key="index"
        v-on:removeCharacterParent="removeCharacter"
        ></Character>
      </div>
    </div>
  </div>
</template>

<script>
import Character from "./components/Character.vue"
export default {
  name: 'app',
  data () {
    return {
      title: 'Starbase App!',
      initial_ids: [1, 10, 12]
    }
  },
  components:{
    Character
  },
  methods:{
    removeCharacter(index){
      this.initial_ids.splice(index, 1);
    }
  }
}
</script>

