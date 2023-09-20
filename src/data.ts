export const authorDatas: IAuthorData[] = [
  {
    authorName: 'J.K.Rowling',
    books: [
      {
        bookTitle: 'Harry Potter I',
        chapters: ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV'],
        characters: ['Good Guy A', 'Good Guy B', 'Bad Guy A', 'Bad Guy B'],
      },
      {
        bookTitle: 'Harry Potter II',
        chapters: ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV'],
        characters: ['Good Guy A', 'Good Guy B', 'Bad Guy A', 'Bad Guy B'],
      },
    ],
  },

  {
    authorName: 'J.R.R.Tolkien',
    books: [
      {
        bookTitle: 'Lord of The Rings I',
        chapters: ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV'],
        characters: ['Good Guy A', 'Good Guy B', 'Bad Guy A', 'Bad Guy B'],
      },
      {
        bookTitle: 'Lord of The Rings II',
        chapters: ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV'],
        characters: ['Good Guy A', 'Good Guy B', 'Bad Guy A', 'Bad Guy B'],
      },
    ],
  },
];

type ICharacter = string;
export type IChapter = string;

export interface IBook {
  bookTitle: string;
  chapters: IChapter[];
  characters: ICharacter[];
}

interface IAuthorData {
  authorName: string;
  books: IBook[];
}
