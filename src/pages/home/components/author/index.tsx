import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { IBook, authorDatas } from '../../../../data';

const Author = () => {
  const [bookList, setBookList] = useState<IBook[]>([]);
  const { name } = useParams();

  useEffect(() => {
    if (!name) return;
    const books = authorDatas.filter(
      (authorData) => authorData.authorName === name,
    );
    if (!books) return;
    setBookList(books[0].books);
  }, [name]);

  return (
    <>
      <div className="p-2">
        <h1 className="text-3xl mb-2">{name}</h1>
        <ul className="list-inside list-disc">
          {bookList.map((item, index) => (
            <li className="pl-4" key={index}>
              <NavLink
                className={({ isActive }) => getLinkClassnames(isActive)}
                to={item.bookTitle}
              >
                {item.bookTitle}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet context={{ bookList }} />
      </div>
    </>
  );
};

const getLinkClassnames = (isActive: boolean) => {
  return (
    defaultLinkClassnames + ' ' + (isActive ? 'text-sky-700 font-bold' : null)
  );
};
const defaultLinkClassnames =
  'hover:text-sky-700 hover:font-bold hover:text-large text-base';

export default Author;
