// pages/work/[id].tsx

import { GetServerSideProps } from "next";
import ImageViewer from "../../components/ImageViewer";
import ThreeViewer from "../../components/ThreeViewer";
import { workData } from "../../data/data"; // Правильный путь

const WorkDetail = ({ work }: { work: { title: string; type: string; fileUrl: string } }) => {
  return (
    <div className="p-10">
      <h1 className="text-3xl">{work.title}</h1>
      {work.type === "3D" ? (
        <ThreeViewer modelUrl={work.fileUrl} />
      ) : work.type === "2D" ? (
        <ImageViewer imageUrl={work.fileUrl} alt={work.title} />
      ) : work.type === "video" ? (
        <video controls className="w-full h-auto">
          <source src={work.fileUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const workId = parseInt(id as string, 10); // Преобразуем id в число
  const work = workData[workId];

  return { props: { work } };
};

export default WorkDetail;
