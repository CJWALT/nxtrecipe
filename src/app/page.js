import Link from "next/link";

export default function Home() {
  return (
      <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="self-center overflow-hidden w-auto grid gap-12">
          <h1 className="text-2xl font-light">Welcome to Recipe App</h1>
          <Link href={'/recipe-list'} className="bg-blue-400 text-center rounded-md p-4">Explore Recipes</Link>
        </div>
        
        </div>
      </>
  );
}
