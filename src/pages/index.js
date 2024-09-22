import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const hanldeBackend = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    alert(data.name);
  };
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-y-4">
     
      <ul className="flex justify-center items-center gap-x-10 bg-slate-400 px-10 py-3 rounded-full w-full my-2">
        <li>
          <Link href="/portfolio">Postfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <h1>home page</h1>
      <button
        onClick={hanldeBackend}
        className="ring-1 ring-green-500 px-6 py-2 hover:bg-green-500"
      >
        Backend
      </button>
    </div>
  );
}
