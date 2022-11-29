import axios from 'axios';
import { useEffect, useState } from 'react';

export const HTTPReqAbort = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsVisible(prevState => !prevState);
        }}
      >
        {isVisible ? 'Unmount' : 'Mount'}
      </button>
      {isVisible && <ChildComponent />}
    </div>
  );
};

// https: //jsonplaceholder. typicode.com/todos

const ChildComponent = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos',
          { signal: controller.signal }
        );
        // setTodos(res.data);
        setTodos(prevState => [...prevState, ...res.data]);
      } catch {}
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h2>ChildComponent</h2>
      {todos.length > 0 && (
        <div>
          {todos.map(todo => (
            <div key={todo.key}>{todo.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
