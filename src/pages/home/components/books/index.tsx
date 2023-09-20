import { useParams } from 'react-router-dom';

const Books = () => {
  const { book } = useParams();

  return (
    <>
      <h1 className="text-2xl mt-2">{book}</h1>
      <li>Chapters</li>
      <li>Characters</li>
    </>
  );
};

export default Books;
