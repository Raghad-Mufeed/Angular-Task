export interface DTOAnswer {
  id?: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  questionId: number;
}

export interface DTOQuestion {
  id?: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  categoryId: number;
  numberOfAnswers?: number;
}

export interface Category {
  id?: number;
  name: string;
  description: string;
  imageURL: string;
  tags: string[];
}

