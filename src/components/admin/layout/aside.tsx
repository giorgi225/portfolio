import Image from "next/image";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className="flex flex-col w-full max-w-[280px] p-6 bg-white">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="G.shalamberidze"
          width={176}
          height={42}
          className="w-full flex max-w-[140px] lg:max-w-[176px]"
          priority={true}
        />
      </Link>
      <nav className="mt-6 w-full">
        <ul className="flex flex-col gap-2 w-full">
          <li className="w-full flex">
            <Link href={`/dashboard/main`} className="w-full flex px-2.5 py-1.5 hover:bg-gray-50">Hero</Link>
          </li>
          <li className="w-full flex">
            <Link href={`/dashboard/main`} className="w-full flex px-2.5 py-1.5 hover:bg-gray-50">About</Link>
          </li>
          <li className="w-full flex">
            <Link href={`/dashboard/main`} className="w-full flex px-2.5 py-1.5 hover:bg-gray-50">Projects</Link>
          </li>
          <li className="w-full flex">
            <Link href={`/dashboard/main`} className="w-full flex px-2.5 py-1.5 hover:bg-gray-50">Blogs</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
