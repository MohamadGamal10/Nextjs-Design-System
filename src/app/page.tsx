import Link from "next/link";
import Button, { buttonVariants } from "./components/ui/Button";
import ThemeChanger from "./components/ui/ThemeChanger";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-center my-5 text-4xl bg-primary rounded-md text-black w-fit p-5 mx-auto font-sans">
        Design System in Depth
      </h1>
      <ThemeChanger />
      <div className="flex items-center space-x-4 ">
      <Button size={"xs"}>xs</Button>
      <Button variant={"destructive"} size={"sm"} rounded={"none"}>small</Button>
      <Button size={"base"}>base</Button>
      <Button variant={"outline"} size={"lg"}>large</Button>
      {/* <Button>LINK</Button> */}
      </div>
      <Button fullWidth rounded={"full"}>GHOST</Button>
      <br />
      <br />
      <br />
      <br />
      <Link href="/ticket" className={buttonVariants({rounded:"full"})}>Get Your Ticket</Link>


    </main>
  );
}
