import { SET_FAVORITE, SET_LOADING, SET_POKEMON } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return { ...state, pokemons: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_FAVORITE:
        //create a copy of this object
      const newPokemonList = [...state.pokemons];
      //search for the index of the current pokemon
      const currentPokemonIndex = newPokemonList.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      //if the pokemon does not exist we return the state
      if(currentPokemonIndex < 0) return state

      //if the pokemon exist we add to favorite the current pokemon 
      newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite
      //and then return the modified list
      return {...state, pokemons: newPokemonList}

    default:
      return state;
  }
};
