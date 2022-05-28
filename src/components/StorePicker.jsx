import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validStore } from '../lib/helpers';
import ErrorMessage from './ErrorMessage';

export default function StorePicker() {
  const [storeName, setStoreName] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const goToStore = (event) => {
    event.preventDefault();
    console.log(storeName);

    if (validStore(storeName)) return;

    navigate(`/store/${storeName}`);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setStoreName(event.target.value);
  };
  const handleBlur = (event) => {
    event.preventDefault();
    setError(validStore(storeName));
  };

  return (
    <form
      className='max-w-[500px] p-[2rem] text-center mt-[20rem] mx-auto bg-[#fff]'
      onSubmit={goToStore}
    >
      <h2 className='font-bold mb-[2rem]'>Welcome!</h2>
      <select
        name='store-picker'
        className='w-full border-black border-b mb-[.5rem] p-[1rem] outline-[transparent]'
        onChange={handleChange}
        defaultValue='default'
        onBlur={handleBlur}
      >
        <option value='default'>Please select a Store</option>
        <option value='demo-store'>Demo Store</option>
      </select>
      {error ? <ErrorMessage msg={error} color='red' /> : ''}
      <button
        type='submit'
        className='mt-[2rem] border-2 border-black hover:bg-black hover:text-white p-[0.5rem]'
      >
        Visit Store &#8594;
      </button>
    </form>
  );
}
