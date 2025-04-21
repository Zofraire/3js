// src/data/data.ts
export type Work = {
  id: number;
  title: string;
  type: "3D" | "2D" | "video";
  thumbnail: string; // shown in the Gallery grid
  fileUrl: string; // used on the detail page viewer
};

export const workData: Work[] = [
  // ── 2D images ─────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Image 1",
    type: "2D",
    thumbnail: "/images/Image1.jpg",
    fileUrl: "/images/Image1.jpg",
  },
  {
    id: 2,
    title: "Image 2",
    type: "2D",
    thumbnail: "/images/Image2.jpg",
    fileUrl: "/images/Image2.jpg",
  },
  {
    id: 3,
    title: "Sample Photo",
    type: "2D",
    thumbnail: "/images/sample.jpg",
    fileUrl: "/images/sample.jpg",
  },

  // ── 3D models ────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Am.fbx Model",
    type: "3D",
    thumbnail: "/models/Am.fbx",
    fileUrl: "/models/Am.fbx",
  },
  {
    id: 5,
    title: "glb.glb Model",
    type: "3D",
    thumbnail: "/models/glb.glb",
    fileUrl: "/models/glb.glb",
  },
  {
    id: 6,
    title: "Sample.fbx Model",
    type: "3D",
    thumbnail: "/models/sample.fbx",
    fileUrl: "/models/sample.fbx",
  },

  // ── Videos ───────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Video 1",
    type: "video",
    thumbnail: "/videos/Video1.mp4", // you can swap this for a true image‐thumbnail if you create one
    fileUrl: "/videos/Video1.mp4",
  },
  {
    id: 8,
    title: "Video 2",
    type: "video",
    thumbnail: "/videos/Video2.mp4",
    fileUrl: "/videos/Video2.mp4",
  },
];
