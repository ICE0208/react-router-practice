import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { IBook, IChapter } from '../../../../data';

const Chapters = () => {
  const { book } = useParams();
  const { bookList } = useOutletContext<{ bookList: IBook[] }>();
  const [chapterList, setChapterList] = useState<IChapter[]>([]);

  useEffect(() => {
    if (!book) return;
    const selectedBook = bookList.filter(
      (bookInfo) => bookInfo.bookTitle === book,
    );
    if (!selectedBook) return;
    const chapters = selectedBook[0].chapters;
    setChapterList(chapters);
  }, [book, bookList, chapterList, setChapterList]);

  return (
    <>
      <h1>Chapters</h1>
      <ul className="list-inside list-disc">
        {chapterList.map((chapter, index) => (
          <li className="pl-4" key={index}>
            {chapter}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Chapters;
