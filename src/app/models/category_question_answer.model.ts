let globalId: number = 9;

export class Answer {
  id: number;
  text: string;
  likeCount: number;
  dislikeCount: number;

  constructor(text: string) {
    this.id = globalId++;
    this.text = text;
    this.likeCount = 0;
    this.dislikeCount = 0;
  }
}

export class Question {
  id: number;
  text: string;
  likeCount: number;
  dislikeCount: number;
  answers: Answer[];

  constructor(text: string) {
    this.id = globalId++;
    this.text = text;
    this.likeCount = 0;
    this.dislikeCount = 0;
    this.answers = [];
  }
}

export class Category {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  tags: string[];
  questions: Question[];

  constructor(
    name: string,
    description: string,
    imageURL: string,
    tags: string[]
  ) {
    this.id = globalId++;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.tags = tags;
    this.questions = [];
  }
}
