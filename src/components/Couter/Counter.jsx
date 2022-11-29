import { useReducer } from 'react';

// const countReducer = (prevState, nextState) => {
//   return prevState + nextState;
// };

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.playload;

    case 'decrement':
      return state - action.playload;

    default:
      return state;
  }
};
export const Counter = () => {
  //   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div
    //   className={styles.container}
    >
      <p>{count}</p>
      <button
        // className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'increment', playload: 1 })}
      >
        Збільшити
      </button>

      <button
        //  className={styles.btn}

        type="button"
        onClick={() => dispatch({ type: 'decrement', playload: 1 })}
      >
        Зменшити
      </button>
    </div>
  );
};
