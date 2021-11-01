import { Category } from './category.model';

export interface Question {
    id: number;
    likeCount: number;
    dislikeCount: number;
    text: string;
    category: Category;
    numberOfAnswers: number;
}

export interface QuestionDTO {
    id: number;
    likeCount: number;
    dislikeCount: number;
    text: string;
    categoryId: number;
}