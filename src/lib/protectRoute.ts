import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

type redirects = {
  redirectTo?: string
}

const UNAUTHORIZED_REDIRECT_LINK = '/sign-in';
const AUTHORIZED_REDIRECT_LINK = '/home';

export async function protectRoute(props?: redirects) {
  const redirectTo = props?.redirectTo ?? UNAUTHORIZED_REDIRECT_LINK;
  const session = await getServerAuthSession();
  if(!session) {
    redirect(redirectTo);
  }
  return session;
}

export async function rejectRouteIfSignedIn(props?: redirects) {
  const redirectTo = props?.redirectTo ?? AUTHORIZED_REDIRECT_LINK;
  const session = await getServerAuthSession();
  if(session) {
    redirect(redirectTo)
  }
}