
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';
import { StarButton } from './starButton';
import { useDispatch } from 'react-redux'
import { setFavorite } from '../actions'

const PokemonCard = ({ name, image, abilities, id, favorite }) => {
  const dispatch = useDispatch()
  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }
  return (
    <Card
      title={name}      
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={ handleFavorite }/>}
    >
      <Meta description={abilities} />
    </Card>
  );
};

export default PokemonCard;
