import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
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
              <Link
                className="hover:text-sky-700 hover:font-bold hover:text-large text-base  "
                to={item.bookTitle}
              >
                {item.bookTitle}
              </Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default Author;
