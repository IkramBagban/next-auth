// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   const token = await request.cookies.get("token");
//   console.log("token", token);

//   if(token){
//     return NextResponse.redirect(new URL("/", request.url));
//   }else{
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// export const config = {
//   matcher: ["/", "/login", "/register", "/profile"],
// };
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("path", path);
  const isPublicPath = path === "/login" || path === "/signup";
  const token = (await request.cookies.get("token")?.value) || "";
  console.log("token", token);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
    matcher: ["/", "/login", "/signup", "/profile/:path*"],
  };