export interface Answer {
  id?: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  question: Question;
}

export interface DTOAnswer {
  id?: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  questionId: number;
}

export interface Question {
  id?: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  category: Category;
  numberOfAnswers?: number;
}

export interface DTOQuestion {
  id?: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  categoryId: number;
}

export interface Category {
  id?: number;
  name: string;
  description: string;
  imageURL: string;
  tags: string[];
}

