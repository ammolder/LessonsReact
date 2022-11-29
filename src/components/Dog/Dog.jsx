export const Dog = ({ dog: { url } }) => {
  return (
    <div>
      <img src={url} alt="Dog" width="480" />
    </div>
  );
};
