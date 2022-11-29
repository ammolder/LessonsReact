export const fetchPokemon = name => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
    console.log('r.json() :', res.json());

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`There is no Pokemon named ${name}`));
  });
};
