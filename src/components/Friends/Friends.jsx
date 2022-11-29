import { useState, useMemo } from 'react';

const initalFriends = [
  'Flkn Flkj',
  'Jjjj Gjjjj',
  'Amolder Ban',
  'Vilkto Gito',
  'Car Nothink',
];

export const Friends = () => {
  const [count, setCount] = useState(0);
  const [friends] = useState(initalFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = useMemo(() => {
    console.log(' hello');

    return friends.filter(friend =>
      friend.toLocaleLowerCase().includes(filter)
    );
  }, [filter, friends]);

  //   const visibleFriends = friends.filter(friend =>
  //     friend.toLocaleLowerCase().includes(filter)
  //   );

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <hr />
      <input onChange={e => setFilter(e.target.value)} value={filter} />
      <ul>
        {visibleFriends.map((friends, idx) => (
          <li key={idx}>{friends}</li>
        ))}
      </ul>
    </div>
  );
};
