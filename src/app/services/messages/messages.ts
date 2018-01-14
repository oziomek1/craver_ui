export class Messages {
  private _id: number;
  private _author: string;
  private _content: string;
  private _date: Date;


  constructor(id: number, author: string, content: string, date: Date) {
    this._id = id;
    this._author = author;
    this._content = content;
    this._date = date;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  static fromJson(json: any): Messages {
    return new Messages(json.id, json.author, json.content, new Date(json.date));
  }
}
