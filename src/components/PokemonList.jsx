import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            abilities={pokemon.abilities[0].ability.name}
            id={pokemon.id}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(8).fill(""),
};

export default PokemonList;
