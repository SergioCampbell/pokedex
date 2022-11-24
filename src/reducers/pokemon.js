import { SET_FAVORITE, SET_LOADING, SET_POKEMON } from "../actions/types";
import { fromJS } from "immutable";

const initialState = fromJS({
  pokemons: [],
  loading: false,
});

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      //return { ...state, pokemons: action.payload };
      return state.setIn(["pokemons"], fromJS(action.payload));

    case SET_FAVORITE:
      //create a copy of this object
      //--const newPokemonList = [...state.pokemons];
      //search for the index of the current pokemon
      const currentPokemonIndex = state.get("pokemons").findIndex((pokemon) => {
        return pokemon.get("id") === action.payload.pokemonId;
      });

      //if the pokemon does not exist we return the state
      if (currentPokemonIndex < 0) return state;

      //if the pokemon exist we add to favorite the current pokemon
      //--newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite

      const isFavorite = state.getIn([
        "pokemons",
        currentPokemonIndex,
        "favorite",
      ]);

      return state.setIn(
        ["pokemons", currentPokemonIndex, "favorite"],
        !isFavorite
      );

    //and then return the modified list
    //--return {...state, pokemons: newPokemonList}

    case SET_LOADING:
      //--return { ...state, loading: action.payload };
      return state.setIn(["loading"], action.payload);

    default:
      return state;
  }
};
