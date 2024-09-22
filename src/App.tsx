import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import About from './components/About/About';

import './App.css';

/**
 * * App Function with the Routes Configuration
 * @returns App Compnent with the Routing Configurations
 */

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App
