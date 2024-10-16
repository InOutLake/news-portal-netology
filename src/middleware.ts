import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const cookies = request.cookies.get("session");
    if (cookies === undefined) {
      throw new Error("Unauthorized");
    }
    const encryptedSessionData = cookies!.value;
    //! Had to hardcode base url due to the way codesandbox handles requests
    const url = new URL("/api/auth/authorize", "https://jgvlv2-3000.csb.app");
    const response = await fetch(url.href, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ encryptedSessionData }),
    });
    if (!response.ok) {
      throw new Error("Unauthorized");
    }
    const data = await response.json();

    if (!data.currentUser) {
      throw new Error("Unauthorized");
    }

    return NextResponse.next();
  } catch (error: any) {
    console.error("Error authorizing");
    return NextResponse.redirect(
      new URL("/login", "https://jgvlv2-3000.csb.app").href
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/posts", "/posts/:path*"],
};
