import { Route, Routes } from 'react-router-dom';
import { About, Home } from './pages';
import { Header } from './components';
import { Author, Books } from './pages/home/components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="author/:name" element={<Author />}>
            <Route path=":book" element={<Books />} />
          </Route>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
