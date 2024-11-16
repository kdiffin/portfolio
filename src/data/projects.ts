export type Project = {
  title: string;
  techs: string[];
  link: string;
  imageSrc: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "diffin-dex",
    techs: ["Tauri", "Desktop App", "Next.js"],
    link: "https://diffindex.vercel.app/",
    imageSrc: "/diffindex.png",
  },
  {
    title: "diffin-list",
    techs: ["Next.js", "Prisma", "T3"],
    link: "https://diffinlist.vercel.app/",
    imageSrc: "/diffinlist.png",
  },

  {
    title: "Bono",
    techs: ["Hackathon project", "T3", "Frontend"],
    link: "https://bono-one.vercel.app/",
    imageSrc: "/bono.png",
  },
  {
    title: "diffin-chat",
    isComingSoon: true,
    link: "#",
    techs: ["idk"],
    imageSrc: "/",
  },
];

export default projects;
