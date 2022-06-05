import { useState, useRef } from 'react';
import { getID } from '../lib/helpers';

const fishInitialState = {
  id: getID(),
  name: '',
  price: '',
  status: '',
  description: '',
  image: '',
};
export default function AddFishForm({ addFish }) {
  // creating references for inputs with useRef
  let nameRef = useRef();
  let priceRef = useRef();
  let statusRef = useRef();
  let descriptionRef = useRef();
  let imageRef = useRef();

  // create fish function
  const createFish = (event) => {
    event.preventDefault();
    // create a fish object using the form values
    const fish = {
      // id: getID(),
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      description: descriptionRef.current.value,
      image: imageRef.current.value,
    };
    // passing the fish object to App component using addFish via props
    addFish(fish);
    // clean up the form after sending the data
    event.currentTarget.reset();
  };

  return (
    <form
      className='flex border-[1px] border-black flex-wrap'
      onSubmit={createFish}
    >
      <input
        type='text'
        name='name'
        placeholder='Fish name'
        className='border-[1px] border-black w-1/3 outline-none p-[0.5rem]'
        ref={nameRef}
      />
      <input
        type='text'
        name='price'
        placeholder='Fish price'
        className='border-[1px] border-black w-1/3 outline-none p-[0.5rem]'
        ref={priceRef}
      />
      <select
        name='status'
        className='border-[1px] border-black w-1/3 outline-none p-[0.5rem]'
        ref={statusRef}
      >
        <option value='available'>Fresh</option>
        <option value='unavailable'>Sold Out</option>
      </select>
      <textarea
        name='description'
        className='border-[1px] border-black w-full outline-none p-[0.5rem]'
        ref={descriptionRef}
        placeholder='Fish Description'
      ></textarea>
      <input
        type='text'
        name='image'
        className='border-[1px] border-black w-full outline-none p-[0.5rem]'
        ref={imageRef}
        placeholder='Fish Image'
      />
      <button
        type='submit'
        className='border-[1px] border-black hover:bg-black hover:text-white p-[0.5rem] w-full font-bold'
      >
        + Add Fish
      </button>
    </form>
  );
}
