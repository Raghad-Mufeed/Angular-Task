import { Category } from './category.model';

export interface IQuestion {
    id: number;
    likeCount: number;
    dislikeCount: number;
    text: string;
    category: Category;
    numberOfAnswers: number;
}

export class Question implements IQuestion {
    id: number;
    likeCount: number;
    dislikeCount: number;
    text: string;
    category: Category;
    numberOfAnswers: number;

    constructor() {}

    fromDTO(questionReadDTO: QuestionReadDTO): Question {
        this.id = questionReadDTO.id;
        this.likeCount = questionReadDTO.likeCount;
        this.dislikeCount = questionReadDTO.dislikeCount;
        this.text = questionReadDTO.text;
        this.category = questionReadDTO.category;
        this.numberOfAnswers = questionReadDTO.numberOfAnswers;
        return this;
    }

    toDTO(): QuestionWriteDTO {
        return {id: this.id, likeCount: this.likeCount, dislikeCount: this.dislikeCount, text: this.text,
        categoryId: this.category.id};
    }
}

export interface QuestionReadDTO {
    id: number;
    likeCount: number;
    dislikeCount: number;
    text: string;
    category: Category;
    numberOfAnswers: number;
}

export interface QuestionWriteDTO {
    id: number;
    likeCount: number;
    dislikeCount: number;
    text: string;
    categoryId: number;
}