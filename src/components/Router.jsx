import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import StorePiker from './StorePicker';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<StorePiker />} />
      <Route path='/store/:storeId' element={<App />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
