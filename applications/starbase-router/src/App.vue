<template>
  <div id="app">
    <h1>{{title}}</h1>
    <router-link to="/data/people">Character</router-link>
    |
    <router-link to="/data/planets">Planet</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name : 'App',
  data(){
    return {
        title: 'Starbase Router!'
    }
  }
}
</script>
