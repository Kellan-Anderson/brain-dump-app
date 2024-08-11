import { protectRoute } from "~/lib/protectRoute";

export default async function HomePage() {

  await protectRoute();

  return (
    <>Coming soon...</>
  );
}