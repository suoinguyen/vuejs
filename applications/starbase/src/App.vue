<template>
  <div id="app">
    <h3>{{title}}</h3>
    <div class="form-group">
      <div>Total card: {{totalCard}}</div>
      <label for="number">The number of list card.</label>
      <input v-model="total_card" type="number" id="number">
    </div>
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
      initial_ids: [1, 10, 12],
      total_card: 0
    }
  },
  components:{
    Character
  },
  methods:{
    removeCharacter(index){
      this.initial_ids.splice(index, 1);
    },
    randomArrNumber(){
      console.log(this.initial_ids);
      this.initial_ids = [];
      let i = 1;
      for(i; i<= parseInt(this.total_card); i++){
        this.initial_ids[i-1] = Math.floor(Math.random()*83)+1;
      }
      console.log(this.initial_ids);
    }
  },
  computed: {
    totalCard(){
       return this.initial_ids.length;
    }    
  },
  watch: {
    total_card: function(new_val, old_val){
        this.randomArrNumber();
    }
  }
}
</script>

