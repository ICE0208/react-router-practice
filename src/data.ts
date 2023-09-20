export const authorDatas: IAuthorData[] = [
  {
    authorName: 'J.K.Rowling',
    books: [
      {
        bookTitle: 'Harry Potter I',
        chapters: [
          'Chapter I - aab',
          'Chapter II - aba',
          'Chapter III - bab',
          'Chapter IV - final',
        ],
        characters: ['Good Guy A', 'Good Guy A2', 'Bad Guy A3', 'Bad Guy A4'],
      },
      {
        bookTitle: 'Harry Potter II',
        chapters: [
          'Chapter I - 111',
          'Chapter II - 222',
          'Chapter III - 333',
          'Chapter IV - 444',
        ],
        characters: ['Good Guy B', 'Good Guy B2', 'Bad Guy B3', 'Bad Guy B4'],
      },
    ],
  },

  {
    authorName: 'J.R.R.Tolkien',
    books: [
      {
        bookTitle: 'Lord of The Rings I',
        chapters: [
          'Chapter I - a',
          'Chapter II - b',
          'Chapter III - c',
          'Chapter IV - d',
        ],
        characters: ['Good Guy C', 'Good Guy C2', 'Bad Guy C3', 'Bad Guy C4'],
      },
      {
        bookTitle: 'Lord of The Rings II',
        chapters: [
          'Chapter I - aa',
          'Chapter II - bb',
          'Chapter III - cc',
          'Chapter IV - dd',
        ],
        characters: ['Good Guy D', 'Good Guy D2', 'Bad Guy D3', 'Bad Guy D4'],
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
