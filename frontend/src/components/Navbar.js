import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">To-Do App</h1>
        <div>
          <Link href="/" className="text-white px-4">Home</Link>
          <Link href="/todo" className="text-white px-4">To-Do List</Link>
        </div>
      </div>
    </nav>
  );
}
