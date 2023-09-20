import { NavLink, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { IBook } from '../../../../data';

const Books = () => {
  const { book } = useParams();
  const { bookList } = useOutletContext<{ bookList: IBook[] }>();

  return (
    <>
      <h1 className="text-2xl mt-2 ml-4">{book}</h1>
      <ul className="list-inside list-disc pl-8">
        <li>
          <NavLink
            to="chapters"
            className={({ isActive }) => getLinkClassnames(isActive)}
          >
            Chapters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="characters"
            className={({ isActive }) => getLinkClassnames(isActive)}
          >
            Characters
          </NavLink>
        </li>
      </ul>
      <hr className="m-2" />
      <Outlet context={{ bookList }} />
    </>
  );
};

const getLinkClassnames = (isActive: boolean) => {
  return (
    defaultLinkClassnames + ' ' + (isActive ? 'text-red-700 font-bold' : null)
  );
};
const defaultLinkClassnames =
  'hover:text-red-700 hover:font-bold hover:text-large text-base';

export default Books;
