export class Question {
  public id: number;
  public question: string;
  public likeCont: number;
  public dislikeCount: number;
  public answers: Answer[];
  constructor(question: string, likeCount: number, dislikeCount: number) {
    this.id = 1;
    this.question = question;
    this.likeCont = likeCount;
    this.dislikeCount = dislikeCount;
    this.answers = [];
  }
}

export class Answer {
  public id: number;
  public answer: string;
  public likeCount: number;
  public dislikeCount: number;
  constructor(answer: string, likeCount: number, dislikeCount: number) {
    this.id = 1;
    this.answer = answer;
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
  }
}

export class Category {
  public id: number;
  public name: string;
  public description: string;
  public imageURL: string;
  public tags: string[];
  constructor(
    name: string,
    description: string,
    imageURL: string,
    tags: string[]
  ) {
    this.id = 1;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.tags = tags;
  }
}
