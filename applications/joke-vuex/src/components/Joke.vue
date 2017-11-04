<template>
  <div class="col-md-6">
    <div class="joke-container text-center">
      <button class="close" @click="removeJoke(index)"><span>&#10006;</span></button>
      <div class="joke-title"><u>{{joke.setup}}</u></div>
      <div class="joke-content"><em>{{joke.punchline}}</em></div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  name: 'Joke',
  props: ['joke', 'index'],
  methods: mapActions([
    'removeJoke'
  ])
}
</script>
<style>
  .joke-container{
    padding: 15px;
    border: solid 1px #000;
    margin-top: 15px;
  }
</style>
