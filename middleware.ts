import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuth =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token");

  if (
    !isAuth &&
    !request.url.includes("/login") &&
    !request.url.includes("/register")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    (isAuth && request.url.includes("/login")) ||
    (isAuth && request.url.includes("/register"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/reading", "/", "/library", "/profile"],
};
