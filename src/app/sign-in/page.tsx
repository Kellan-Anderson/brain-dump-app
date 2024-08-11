import { SignInButton } from "~/components/signInButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { rejectRouteIfSignedIn } from "~/lib/protectRoute";

export default async function SignInPage() {

  await rejectRouteIfSignedIn();

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4 py-12">
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Sign in to continue</CardTitle>
          <CardDescription>
            You must be signed in to use this feature
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <SignInButton provider="Google" />
          <SignInButton provider="Github" />
        </CardContent>
      </Card>
    </div>
  );
}