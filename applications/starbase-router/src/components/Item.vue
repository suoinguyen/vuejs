<template>
  <div class="card">
    <h4 class="header">name: {{itemSelf.name}}</h4>
    <p class="text">hair color: {{itemSelf.hair_color}}</p>  
    <p class="text">eye color: {{itemSelf.eye_color}}</p>  
    <button class="btn btn-primary" v-on:click="switchItem">Switch</button> 
  </div>
</template>
<script>
export default {
  name: "Item", 
  props:['item'],
  data(){
    return {
      itemSelf: this.item
    }
  },
  methods:{
    switchItem(){
      this.type = this.$route.params.type;
      let id = Math.floor(Math.random() *83)+1;
      fetch(`https://swapi.co/api/${this.type}/${id}`,{
            method: 'GET'
      })
      .then(res => res.json())
      .then(json => {
        this.itemSelf = json
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
