import { useEffect, useState } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import { getID } from '../lib/helpers';
import sampleFishes from '../lib/sample-fishes';

export default function App() {
  // STATE
  // fishes: collection of fishes that will be displayed in the menu
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState({});

  /**
   * AddFish: add fish to the state
   * @param {Object} fish - grab the fish object from Inventory > AddFish Form component
   */
  const addFish = (fish) => {
    console.log(fish);
    setFishes({
      ...fishes,
      [`fish${getID()}`]: fish,
    });
  };

  // Add to order
  const addToOrder = (key) => {
    setOrder({
      ...order,
      [key]: order[key] + 1 || 1,
    });
  };

  const loadSampleFishes = () => {
    setFishes(sampleFishes);
  };

  return (
    <div className='flex m-auto h-screen bg-[#d4d4d4]  p-[2rem]'>
      <div className='flex flex-col items-center p-[1rem] grow shrink-[4] basis-auto border-4 border-black border-double bg-white overflow-scroll w-[30%]'>
        <Header fishes={fishes} />
        <ul>
          {Object.keys(fishes).map((key) => (
            <Fish
              key={key}
              details={fishes[key]}
              addToOrder={addToOrder}
              index={key}
            />
          ))}
        </ul>
      </div>
      <Order fishes={fishes} order={order} />
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
    </div>
  );
}
