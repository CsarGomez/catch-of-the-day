import { formatPrice } from '../lib/helpers';
const Order = ({ fishes, order }) => {
  // make an array from order state
  const orderIds = Object.keys(order);

  // calculate the total:
  // =====================
  // prevTotal - previous amount, initialized is 0 by default
  // key - actual item in the loop.
  const total = orderIds.reduce((prevTotal, key) => {
    // grab the fish that is looping from fishes state
    const fish = fishes[key];
    // grab the current value of the order key
    const count = order[key];
    // is available if the fish exist in the order and status is available
    const isAvailable = fish && fish.status === 'available';
    if (isAvailable) {
      return prevTotal + count * fish.price;
    }
    return prevTotal;
  }, 0);
  return (
    <div className='p-[1rem] grow shrink-[4] basis-auto border-y-4 border-black border-double bg-white w-[20%]'>
      <h2 className='text-center'>ORDER</h2>
      <div className='p-[1rem]'>
        <ul>
          {orderIds.map((key) => {
            const fish = fishes[key];
            const count = order[key];
            if (fish.status !== 'available') {
              return (
                <li
                  key={key}
                  className='text-[14px] border-b-2 border-black m-[1rem] p-[1rem]'
                >
                  sorry {fish ? fish.name : 'fish'} is no longer available
                </li>
              );
            }
            return (
              <li
                key={key}
                className='text-[14px] border-b-2 border-black m-[1rem] p-[1rem]'
              >
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
              </li>
            );
          })}
        </ul>
        <div className='flex justify-between text-[18px] p-[1rem]'>
          <p>Total:</p>
          <p>{formatPrice(total)}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
