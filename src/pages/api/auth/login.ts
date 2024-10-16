import { NextApiRequest, NextApiResponse } from "next";

import CryptoJS from "crypto-js";
import signIn from "./sign_in";
import Session from "../../../data/types/session";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;
    const currentUser = await signIn("credentials", {
      credentials: { email, password },
    });

    const sessionData: Session = new Session(currentUser);

    const encryptedSessionData = CryptoJS.AES.encrypt(
      JSON.stringify(sessionData),
      process.env.ENCRYPTION_SECRET_KEY_NEWS_APP!
    ).toString();

    res
      .status(200)
      .json({ success: true, encryptedSessionData: encryptedSessionData });
  } catch (error: any) {
    res.status(500).json({ error: "{error.message}" });
  }
}
