<template>
  <div id="app" class="text-center">
    <h2>{{title}}</h2>
    <button class="btn btn-primary" @click="initJokes">Click me to get random 10 jokes</button>
    <button class="btn btn-primary" @click="addJoke">Click me to get a random joke</button>
    <div>
      <span  
        v-for="(type, index) in jokeTypes"
        :key="index">
      <input 
        type="checkbox"
        :value="type"
        v-model="checkedTypes"
        checked
      >  
      <label for="">{{type}}</label>&nbsp;
    </span>  
    </div>
    {{checkedTypes}}
    <div class="joke-list">
      <Joke 
        v-for="(joke, index) in $store.state.joke" 
        :key="index"
        :joke="joke"
        :index="index"
        v-show="checkedTypes.includes(joke.type)"
      />
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import Joke from './Joke.vue'

export default {
  name: 'App',
  components: {
    Joke
  },
  data(){
    return {
      title: 'Vuex',
      jokeTypes: ['knock-knock', 'programing', 'general'],
      checkedTypes: ['knock-knock', 'programing', 'general']
    }
  },
  methods: mapActions([
    'initJokes',
    'addJoke',
  ])
}
</script>
<style>

</style>
