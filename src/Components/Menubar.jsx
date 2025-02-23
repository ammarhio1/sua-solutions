import Link from "next/link"

export default function Menubar() {
  return (
    <>
      <Link href="/" className="text-blue-600 hover:text-blue-800 px-4 py-2">
        Home
      </Link>
      <Link
        href="/Transaction1"
        className="text-blue-600 hover:text-blue-800 px-4 py-2"
      >
        Transaction 1
      </Link>
      <Link
        href="/Transaction2"
        className="text-blue-600 hover:text-blue-800 px-4 py-2"
      >
        Transaction 2
      </Link>
      <Link
        href="/Transaction5"
        className="text-blue-600 hover:text-blue-800 px-4 py-2"
      >
        Transaction 5
      </Link>
      <Link
        href="/Transaction6"
        className="text-blue-600 hover:text-blue-800 px-4 py-2"
      >
        Transaction 6
      </Link>
      <Link
        href="/Transaction10"
        className="text-blue-600 hover:text-blue-800 px-4 py-2"
      >
        Transaction 10
      </Link>
      <Link
        href="/Transaction12"
        className="text-blue-600 hover:text-blue-800 px-4 py-2"
      >
        Transaction 12
      </Link>
    </>
  );
}