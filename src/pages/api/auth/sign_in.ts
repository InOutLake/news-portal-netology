import mockUsers from "../../../data/mock/users";
import User from "../../../data/types/user";
import CryptoJS from "crypto-js";

export default function signIn(method: string, params: any) {
  if (method === "credentials") {
    const email = params.credentials.email;
    const password = params.credentials.password;
    const users: User[] = mockUsers();
    const user = users.find(
      (u) =>
        u.email === email &&
        u.password_hashed === CryptoJS.SHA256(password).toString()
    );
    if (!user) throw new Error("Invalid credentials.");
    return user;
  }
  if (method === "token") {
    const token = params.token;
    const decryptedToken = CryptoJS.AES.decrypt(
      token,
      process.env.ENCRYPTION_SECRET_KEY!
    ).toString(CryptoJS.enc.Utf8);
    const { currentUser: user } = JSON.parse(decryptedToken);
    return user;
  }
  throw new Error("Invalid sign in method.");
}
