export default class Post {
  id: number;
  title: string;
  content: string;
  date: string;
  authorId: number;

  constructor(
    id: number,
    title: string,
    content: string,
    date: string,
    authorId: number
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.date = date;
    this.authorId = authorId;
  }
}
