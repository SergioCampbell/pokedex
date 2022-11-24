import { getPokemonDetails } from "../api";
import { SET_POKEMON, SET_LOADING, SET_FAVORITE } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
})

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
})

//redux thunk
export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonDetailed));
  };
