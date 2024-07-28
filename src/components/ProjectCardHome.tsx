import Image from "next/image";
import { projects } from "@/constants";
import { ProjectData } from "@/interfaces";

const ProjectCardHome = () => {
  return (
    <>
      {projects &&
        projects.map((item: ProjectData) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <picture className="w-full h-52">
              <Image
                className="w-full h-full"
                src={item.image}
                alt="Project image"
              />
            </picture>
            <div className="flex flex-col px-3 py-2 justify-center items-start gap-3">
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-base text-[var(--text-color-terciary)]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProjectCardHome;
