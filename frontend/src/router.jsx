
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Form from './Pages/Form';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

