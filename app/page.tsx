import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <h2 className="text-5xl">Hello World {new Date().getTime()}</h2>
    </div>
  );
}
