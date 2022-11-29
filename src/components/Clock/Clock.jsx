import { useState, useEffect, useRef } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);
  // const buttonRef = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => setTime(new Date()), 1000);
    return () => {
      console.log('Clear');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  console.log('intervalId :', intervalId);

  return (
    <div>
      <p className="Clock__face">Поточний час: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
      <p className="Clock__face">Поточний час: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
};

// export class OldClock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };

//   intervalld = null;

//   componentDidMount() {
//     this.intervalld = setInterval(
//       () => this.setState({ time: new Date().toLocaleTimeString() }),
//       1000
//     );
//   }
//   componentWillUnmount() {
//     clearInterval(this.intervalld);
//   }

//   render() {
//     return <div className="Clock__face">{this.state.time}</div>;
//   }
// }
