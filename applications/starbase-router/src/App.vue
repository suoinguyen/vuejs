<template>
  <div id="app">
    <h1>{{title}}</h1>
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
