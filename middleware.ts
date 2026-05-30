import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { legacyBlogSlugRedirects } from "@/lib/blog-posts";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/blog/")) {
    const slug = decodeURIComponent(pathname.slice("/blog/".length));
    const target = legacyBlogSlugRedirects[slug];
    if (target) {
      const url = request.nextUrl.clone();
      url.pathname = `/blog/${target}`;
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:slug*"],
};
