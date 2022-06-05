import logo from '/images/logo.svg';

const Header = (fishes) => {
  return (
    <>
      <header>
        <figure className='mt-[1rem]'>
          <img src={logo} alt='logo' />
        </figure>
      </header>
    </>
  );
};

export default Header;
