import User from "./user";

export default class Session {
  currentUser: User;

  constructor(currentUser: User) {
    this.currentUser = currentUser;
  }
}
