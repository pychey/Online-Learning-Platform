import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const isAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/register");
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

// Protect only these routes:
export const config = {
  matcher: ["/my-courses","/my-account-settings"], // Add more as needed
};
