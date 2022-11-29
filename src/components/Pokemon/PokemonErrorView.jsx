import errorImage from '../image/koshka_plakat.jpg';

export const PokemonErrorView = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} alt="sadcat" width="240" />
      <p>{message}</p>
    </div>
  );
};
