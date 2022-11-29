export const Controls = ({ currenItem, totalItems, onchange }) => {
  return (
    <section>
      <button
        type="button"
        disabled={currenItem === 1}
        onClick={() => onchange(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={currenItem === totalItems}
        onClick={() => onchange(+1)}
      >
        Вперід
      </button>
    </section>
  );
};
