// components/Catalog.tsx

import Link from 'next/link';
import { workData } from 'pages/work/[id].tsx';

const Catalog = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(workData).map((id) => {
          const work = workData[parseInt(id)];
          return (
            <div key={id} className="border p-4 rounded shadow-lg">
              <h2 className="text-xl font-semibold">{work.title}</h2>
              <p className="text-gray-600">{work.type}</p>
              <div className="mt-4">
                <Link href={`/work/${id}`}>
                  <a className="text-blue-500 hover:underline">
                    View {work.type === "video" ? "Video" : "Work"}
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
