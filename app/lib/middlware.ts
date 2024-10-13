import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next(); 

  const supabase = createMiddlewareClient({ req, res });

  const { 
    data: {
      session
    }
  } = await supabase.auth.getSession();

  console.log(session);

  if(!session) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  return res; // if there is a session
}

// list of pages to match the middlware. 
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}