
// vbasetsse
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';
import type {Pokemon} from '@/interfaces/pokemon';
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'PokemonPage',
    components: {
        PokemonOptions,
        PokemonPicture,
    },
    setup: ()=>{
        const pokemonArr=ref<Pokemon[]>([]);
        const pokemon=ref<Pokemon>();
        const showPokemon=ref(false);
        const showAnswer=ref(false);
        const message=ref("");

        const mixPokemonArray=async()=>{
            pokemonArr.value=await getPokemonOptions();
            //console.log(pokemonArr.value);
            const randomInt=Math.floor(Math.random()*4);
            pokemon.value=pokemonArr.value[randomInt];
        }

        mixPokemonArray();

        const checkAnswer=(selectedId: number)=>{
            //TAREA: Al hacer click que se muestre el pokemon a color.
            if(!pokemon.value)return;
            showAnswer.value=true;
            showPokemon.value=true;
            if(selectedId===pokemon.value.id){
                message.value=`Correcto, ${pokemon.value.name}`
            } else{
                message.value=`Oops, era, ${pokemon.value.name}`
            }
        }

        const newGame=()=>{
            showPokemon.value=false;
            showAnswer.value=false;
            pokemonArr.value=[];
            pokemon.value=undefined;

            mixPokemonArray();
        }
        return {
            pokemonArr,
            pokemon,
            showPokemon,
            showAnswer,
            message,

            checkAnswer,
            newGame
        }
    },
});

