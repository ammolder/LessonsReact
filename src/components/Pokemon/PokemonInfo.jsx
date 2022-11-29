import { useState, useEffect } from 'react';
import { PokemonDataView } from './PokemonDataView';
import { PokemonErrorView } from './PokemonErrorView';
import { PokemonPendingView } from './PokemonPendingView';
import { fetchPokemon } from './service-api';
// import { ToastContainer } from 'react-toastify';

export const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!pokemonName) {
      console.log('pokemonName :', pokemonName);
      return;
    }
    setStatus('pending');
    // Помилка в фетчі
    fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);

  if (status === 'idle') {
    return <div>Enter the name pokemon.</div>;
  }
  if (status === 'pending') {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }
  if (status === 'rejected') {
    return <PokemonErrorView message={error.message} />;
  }
  if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />;
  }
};

// export class PokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     error: null,
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.pokemonName !== this.props.pokemonName) {
//       this.setState({ status: 'pending' });
//       fetchPokemon(this.props.pokemonName)
//         .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
//   }
//   render() {
//     const { pokemon, error, status } = this.state;
//     const { pokemonName } = this.props;

//     if (status === 'idle') {
//       return <div>Enter the name pokemon.</div>;
//     }
//     if (status === 'pending') {
//       return <PokemonPendingView pokemonName={pokemonName} />;
//     }
//     if (status === 'rejected') {
//       return <PokemonErrorView message={error.message} />;
//     }
//     if (status === 'resolved') {
//       return <PokemonDataView pokemon={pokemon} />;
//     }
//   }
// }

// Variant 1
// import { Component } from 'react';

// export class PokemonForm extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   };

//   componentDidMount() {
//     this.setState({
//       loading: true,
//     });
//     setTimeout(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then(res => res.json())
//         .then(pokemon => this.setState({ pokemon }))
//         .finally(() => this.setState({ loading: false }));
//     }, 1000);
//   }

//   //   componentDidUpdate(prevProps, prevState) {
//   //     if (prevState.index !== this.state.index) {
//   //       localStorage.setItem(LS_KEY, this.state.index);
//   //     }
//   //   }

//   render() {
//     return (
//       <div>
//         {this.state.loading && <h1>Loading...</h1>}
//         {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//       </div>
//     );
//   }
// }
