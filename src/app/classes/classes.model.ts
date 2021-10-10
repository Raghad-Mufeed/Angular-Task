let globalId:number=9;
export class Answer {
  public id: number;
  public answer: string;
  public likeCount: number;
  public dislikeCount: number;
  constructor(answer: string) {
    this.id = globalId++;
    this.answer = answer;
    this.likeCount = 0;
    this.dislikeCount = 0;
  }
}

export class Question {
  public id: number;
  public question: string;
  public likeCount: number;
  public dislikeCount: number;
  public answers: Answer[];
  constructor(question: string) {
    this.id = globalId++;
    this.question = question;
    this.likeCount = 0;
    this.dislikeCount = 0;
    this.answers = [];
  }
}

export class Category {
  public id: number;
  public name: string;
  public description: string;
  public imageURL: string;
  public tags: string[];
  public questions: Question[];
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
