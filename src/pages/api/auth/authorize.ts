import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import signIn from "./sign_in";
import Session from "../../../data/types/session";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { encryptedSessionData } = req.body;
    const currentUser = await signIn("token", {
      token: encryptedSessionData,
    });

    res.status(200).json({ success: true, currentUser: currentUser });
  } catch (error: any) {
    if (error.type === "CredentialsSignin") {
      res.status(401).json({ error: "Invalid credentials." });
    } else {
      console.error(error);
      res.status(500).json({ error: "Something went wrong." });
    }
  }
}
