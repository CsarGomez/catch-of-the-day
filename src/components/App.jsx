import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
export default function App() {
  return (
    <div className='flex m-auto h-screen bg-[#d4d4d4]  p-[2rem]'>
      <Header />
      <Order />
      <Inventory />
    </div>
  );
}
