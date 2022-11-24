import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import "./App.css";
import logo from "./statics/logo.svg";
import { useEffect } from "react";
import { getPokemon } from "./api";
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonsWithDetails, setLoading } from "./actions";

function App() {
  const pokemons = useSelector(state => state.get('pokemons')).toJS()
  const loading = useSelector((state) => state.get('loading'))
  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true))
      const pokemonRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonRes))
      dispatch(setLoading(false))
    };

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux :v" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (<Spin spinning size="large" />) :
      (<PokemonList pokemons={pokemons} />)
      }
    </div>
  );
}


export default App;
