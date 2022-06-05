import AddFishForm from './AddFishForm';

const Inventory = ({ addFish, loadSampleFishes }) => {
  return (
    <div className='p-[1rem] grow shrink-[4] basis-auto border-4 border-black border-double bg-white flex flex-col items-center w-[30%]'>
      <h2 className='mb-[2rem]'>INVENTORY</h2>
      <AddFishForm addFish={addFish} />
      <button
        className='border-[1px] border-black hover:bg-black hover:text-white p-[0.5rem] font-bold m-[1rem]'
        onClick={loadSampleFishes}
      >
        Load Sample Fishes
      </button>
    </div>
  );
};

export default Inventory;
