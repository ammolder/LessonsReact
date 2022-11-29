import { useState } from 'react';

export const Tabs = ({ items }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  return (
    <>
      <div>
        {items.map((item, idx) => (
          <button
            type="button"
            key={item.label}
            onClick={() => setActiveTabIdx(idx)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>
        <h2>{items[activeTabIdx].label}</h2>
        <p>{items[activeTabIdx].content}</p>
      </div>
    </>
  );
};

// export class OldTabs extends PureComponent {
//   state = {
//     activeTabIdx: 0,
//   };

//   //   shouldComponentUpdate(nextProps, nextState) {
//   //     return nextState.activeTabIdx !== this.state.activeTabIdx;
//   //   }

//   setActiveTabIdx = idx => {
//     this.setState({ activeTabIdx: idx });
//   };
//   render() {
//     const { activeTabIdx } = this.state;
//     const { items } = this.props;
//     const activeTab = items[activeTabIdx];

//     return (
//       <>
//         <div>
//           {items.map((item, idx) => (
//             <button
//               type="button"
//               key={item.label}
//               onClick={() => this.setActiveTabIdx(idx)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//         <div>
//           <h2>{activeTab.label}</h2>
//           <p>{activeTab.content}</p>
//         </div>
//       </>
//     );
//   }
// }
