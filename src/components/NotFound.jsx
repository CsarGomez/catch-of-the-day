import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='flex flex-col justify-center items-center h-screen w-screen '>
    <h1>&#x2639; 404 NOT FOUND</h1>
    <Link
      to='/'
      className='border-2 border-black hover:bg-black hover:text-white p-[0.5rem]'
    >
      back to home &#8594;
    </Link>
  </div>
);

export default NotFound;
