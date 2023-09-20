import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { IBook } from '../../../../data';

const Books = () => {
  const { book } = useParams();
  const { bookList } = useOutletContext<{ bookList: IBook[] }>();

  return (
    <>
      <h1 className="text-2xl mt-2">{book}</h1>
      <ul className="list-inside list-disc">
        <li className="hover:text-red-700 hover:font-bold hover:text-large text-base">
          <Link to="chapters">Chapters</Link>
        </li>
        <li>Characters</li>
      </ul>
      <hr />
      <Outlet context={{ bookList }} />
    </>
  );
};

export default Books;
