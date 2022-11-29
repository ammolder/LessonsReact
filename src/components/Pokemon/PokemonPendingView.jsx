import { ImSpinner } from 'react-icons/im';
import pendingImage from '../image/question.jpg';
import { PokemonDataView } from './PokemonDataView';

export const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  console.log('pokemon :', pokemon);

  return (
    <div role="alert">
      <div>
        <ImSpinner size="32" className="icon-spin" />
        Loading...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};
