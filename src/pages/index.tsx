import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Student Portfolio</h1>
      <p>Explore 3D and 2D artworks by talented students.</p>
      <Link href="/gallery" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded">
        View Gallery
      </Link>
    </div>
  );
}
