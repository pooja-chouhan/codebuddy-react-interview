import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forms from './pages/Forms';
import Home from './pages/Home';
import Posts from './pages/Posts';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/forms" element={<Forms />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
