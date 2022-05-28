import logo from '/images/logo.svg';
const Header = () => (
  <header className='flex flex-col items-center p-[1rem] grow shrink-[4] basis-auto border-4 border-black border-double bg-white'>
    <figure className='w-[200px]'>
      <img src={logo} alt='logo' />
    </figure>
  </header>
);

export default Header;
