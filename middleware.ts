import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(
  req: NextRequest,
  ev: NextFetchEvent,
  res: NextResponse
) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("user");

  if (url.pathname === "/signup" && token?.name) {
    url.pathname = "/blog";

    return NextResponse.redirect(url);
  }

  if (url.pathname === "/blog" && !token?.name) {
    url.pathname = "/";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
