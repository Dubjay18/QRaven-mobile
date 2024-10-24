import { Redirect } from "expo-router";
export default function Index() {
  const firstLaunch = false;

  // if (firstLaunch) {
  //   return <Redirect href={"/onboard"} />;
  // }

  return <Redirect href={"/main"} />;
}
