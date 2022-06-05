import { formatPrice } from '../lib/helpers';

const Fish = ({ details, addToOrder, index }) => {
  const isAvailable = details.status === 'available';

  return (
    <li className='border-y-black border-y-2 p-[0.5rem] my-[0.5rem] flex gap-2 w-[400px]'>
      <img className='w-[150px]' src={details.image} alt={details.name} />
      <div className='w-full'>
        <h3 className='flex items-center justify-between'>
          {details.name}
          <span className='text-[14px]'>{formatPrice(details.price)}</span>
        </h3>
        <p className='text-[12px]'>{details.desc}</p>
        <button
          disabled={!isAvailable}
          className='border-[1px] border-black hover:bg-black hover:text-white p-[0.5rem] mt-[1rem] text-[12px] disabled:border-2 disabled:border-[#d12028] disabled:text-[#d12028] disabled:-rotate-[10deg] disabled:scale-150 disabled:translate-x-2/4 disabled:-translate-y-[100%] disabled:bg-white disabled:cursor-none'
          onClick={() => addToOrder(index)}
        >
          {isAvailable ? 'ADD TO ORDER' : 'SOLD OUT!'}
        </button>
      </div>
    </li>
  );
};
export default Fish;
