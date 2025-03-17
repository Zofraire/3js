import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="text-xl font-bold">Student Portfolio</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </nav>
  );
};

export default Navbar;
