<template>
  <div>
    {{list_id_to_show}}
    {{id_show}}
    <div class="form-add-id">
      <div class="title">Add the id do you want to show the info.</div>
      <input type="text" v-model="id_show" placeholder="Type the id">
      <button class="btn btn-primary" @click="addId">Add</button>
    </div>
    <Item 
    v-for="(item, index) in datas" 
    :item="item" 
    :key="index"
    />
  </div>
</template>
<script>
import Item from './Item.vue'

export default {
  name: 'Data',
  components: {
    Item  
  },
  data(){
      return {
        type : this.$route.params.type,
        datas: [],
        list_id_to_show: [],
        id_show: ''
      }
  },
  methods:{
    fetchData(){
      this.type = this.$route.params.type;
      this.datas = [];
      // let list_ids= [1, 25, 34];
      for(let i in this.list_id_to_show){
        console.log(i)
        let id = this.list_id_to_show[i];
        fetch(`https://swapi.co/api/${this.type}/${id}`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(json => {
          this.datas.push(json);
        })
        .catch(err => {
          console.log(err);
        })
      }
    },
    addId(){
      this.list_id_to_show.push(this.id_show);
      this.id_show = null;
    }
  },
  watch: {
    '$route': 'fetchData',
    list_id_to_show(){
      this.fetchData();
    }
  },
  created(){
    this.fetchData()
  }
}
</script>
