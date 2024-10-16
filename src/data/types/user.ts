import CryptoJS from "crypto-js";

export default class User {
  id!: number;
  name!: string;
  email!: string;
  password_hashed!: string;

  constructor(
    id: number,
    name: string,
    email: string,
    password_hashed: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password_hashed = password_hashed;
  }
}
