import { Route, Routes } from 'react-router-dom';
import { About, Home } from './pages';
import { Header } from './components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
