// pages/work/[id].tsx

import { GetServerSideProps } from "next";
import ImageViewer from "../../components/ImageViewer";
import ThreeViewer from "../../components/ThreeViewer";

const workData = {
  1: { title: "3D Model", type: "3D", fileUrl: "/models/sample.glb" },
  2: { title: "Digital Art", type: "2D", fileUrl: "/images/sample.jpg" },
  3: { title: "Video Demo", type: "video", fileUrl: "/videos/sample.mp4" },
};

const WorkDetail = ({ work }: { work: any }) => {
  return (
    <div className="p-10">
      <h1 className="text-3xl">{work.title}</h1>
      {work.type === "3D" ? (
        <ThreeViewer modelUrl={work.fileUrl} />
      ) : work.type === "2D" ? (
        <ImageViewer imageUrl={work.fileUrl} alt={work.title} />
      ) : work.type === "video" ? (
        <div className="video-container">
          <video controls className="w-full h-auto">
            <source src={work.fileUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  return { props: { work: workData[id] } };
};

export default WorkDetail;
