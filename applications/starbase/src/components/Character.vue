<template>
    <div class="col-md-4">
        <div class="card">
            {{id}}
            <br>
            {{index}}
            <div class="card-block">
                <button class="close" v-on:click="removeCharacterChild(index)">&times;</button>
                <h4 class="card-title">{{character.name}}</h4>
                <p class="card-subtitle">{{character.birth_year}}</p>
                <p class="card-text">{{character.height}}</p>
                <p class="card-text">{{character.mass}}</p>
                <p class="card-text">{{character.hair_color}}</p>
                <p class="card-text">{{character.eye_color}}</p>
                <button class="btn btn-primary" v-on:click="switchCharacter">switchCharacter</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['id', 'index'],
        data() {
            return {
                character: ''
            }
        },
        methods: {
            fetchCharacterInfo(id){
                //using extension Allow-Control-Allow-Origin: * - Chrome Web Store to disable security.
                fetch(`https://swapi.co/api/people/${id}`, {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(character_info => this.character = character_info)
            },
            switchCharacter(){
                var id = Math.floor(Math.random()*83)+1;
                this.fetchCharacterInfo(id);
            },
            removeCharacterChild(index){
                this.$emit('removeCharacterParent', index);
            }
        },
        created(){
            this.fetchCharacterInfo(this.id);
        },
        updated(){
            this.fetchCharacterInfo(this.id);
        }
    }
</script>
<style>
    .card{
        background: transparent;
        border: solid 1px #ccc;
        margin-top: 15px;
    }
</style>