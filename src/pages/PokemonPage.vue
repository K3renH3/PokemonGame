
<script src="./PokemonPage.ts"/>



<template>

    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <PokemonPicture 
            :pokemon-id="pokemon.id" 
            :show-pokemon="showPokemon" />
    </div>

        <PokemonOptions 
            :pokemons="pokemonArr" 
            @selection-pokemon="checkAnswer" />

        <div v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo juego
            </button>
        </div>
    

</template>


<style scoped>

</style>