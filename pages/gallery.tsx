import Link from "next/link";

const works = [
  { id: 1, title: "3D Model", type: "3D", thumbnail: "/images/3d-preview.jpg" },
  { id: 2, title: "Digital Art", type: "2D", thumbnail: "/images/2d-preview.jpg" },
  { id: 3, title: "Video Demo", type: "video", fileUrl: "/videos/video.jpg" },

];

export default function Gallery() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-2 gap-4">
        {works.map((work) => (
          <Link key={work.id} href={`/work/${work.id}`} className="border p-2">
            <img src={work.thumbnail} alt={work.title} className="w-full h-40 object-cover" />
            <h2 className="text-xl">{work.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
