import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuth = request.cookies.get("next-auth.session-token");

  if (
    !isAuth &&
    !request.url.includes("/login") &&
    !request.url.includes("/register")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    (isAuth && request.url.includes("/login")) ||
    request.url.includes("/register")
  ) {
    return NextResponse.redirect(new URL("/recommended", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/reading",
    "/recommended",
    "/library",
    "/profile",
  ],
};
