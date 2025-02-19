import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-center my-5 text-4xl bg-white rounded-md text-black w-fit p-5 mx-auto font-sans">
        Design System in Depth
      </h1>
      <div className="space-y-3">
      <Button>PRIMARY</Button>
      <Button intent={"destructive"}>DESTRUCTIVE</Button>
      <Button>SECONDARY</Button>
      <Button intent={"outline"}>OUTLINE</Button>
      <Button>GHOST</Button>
      <Button>LINK</Button>
      </div>
    </main>
  );
}
