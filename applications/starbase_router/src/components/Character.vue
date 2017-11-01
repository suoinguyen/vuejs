<template>
  <div class="col-md-3 card-container">
    <div class="card">
      <img class="card-img-top" src="../assets/images/avatar.jpg" alt="Card image cap">
      <div class="card-block text-left">
        <h4 class="card-title">Name: <br><strong>{{character.name}}</strong></h4>
        <p class="card-text">Birth year: <strong>{{character.birth_year}}</strong></p>
        <p class="card-text">Gender: <strong>{{character.gender}}</strong></p>
        <p class="card-text">Height: <strong>{{character.height}}</strong></p>
        <p class="card-text">Eye color: <strong>{{character.eye_color}}</strong></p>
        <p class="card-text">Hair color: <strong>{{character.hair_color}}</strong></p>
        <transition name="fade">
          <div class="loading" v-if="is_show"></div>
        </transition>
      </div>
      <button class="btn btn-primary switch-character" @click="switchCharacter">Switch Character</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['characterId'],
  data(){
    return{
      character: {},
      is_show : false
    }
  },
  methods: {
    fetchCharacter(id){
      fetch(`https://swapi.co/api/people/${id}`, {
        method: 'GET'
      })
      .then(res => res.json())
      .then(json => {
        this.character = json;
        this.is_show = false;
      })
      .catch( error => console.log(error))
    },
    switchCharacter(){
      this.is_show = true;
      let random = Math.floor(Math.random()*83)+1;
      this.fetchCharacter(random);
    }
  },
  created(){
    console.log(this.characterId);
    this.fetchCharacter(this.characterId);
  }
}
</script>
<style lang="scss">
  .card-container{
    margin-top: 30px;
    position: relative;
  }
  .card{
    background: transparent;
    border: solid 1px #ccc;
    height: 100%;
    .card-img-top{
      max-width: 100%;
      height: auto;
    }
  }
  .card-block{
    position: relative;
    .loading{
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.78);
      background-image: url('../assets/svg/Spinner.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50%;
    }
  }
  .switch-character{
    border-radius: 0 0 .25rem .25rem;
    cursor: pointer;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
