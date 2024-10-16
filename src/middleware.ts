import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const cookies = request.cookies.get("session");
    if (cookies === undefined) {
      throw new Error("Unauthorized");
    }
    const encryptedSessionData = cookies!.value;
    const response = await fetch(new URL("/api/auth/authorize", request.url), {
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
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/posts:path*"],
};
