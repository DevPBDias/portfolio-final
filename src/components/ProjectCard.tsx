import Image from "next/image";
import { ProjectData } from "@/interfaces";
import Link from "next/link";
import arrow from "../../public/assets/icons/ArrowUpRight.png";

const ProjectCard = ({ data }: ProjectData | any) => {
  return (
    <div
      key={data.id}
      className="flex flex-row justify-center items-center h-80"
    >
      <picture className="w-1/2 h-full">
        <Image className="w-full h-full" src={data.image} alt="Project image" />
      </picture>
      <div className="flex flex-col px-5 py-8 justify-start items-start gap-3 w-1/2 h-full ">
        <h4 className="text-base font-semibold">{data.title}</h4>
        <p className="text-sm text-[var(--text-color-terciary)]">
          {data.description}
        </p>
        <div className="flex flex-row  justify-between items-center w-full">
          <picture className="flex flex-row flex-wrap justify-start items-start w-44 gap-2">
            {data.stacks.map((tech: string, index: number) => (
              <Image
                className="w-12 h-10"
                key={index}
                src={tech}
                alt="stack icon"
              />
            ))}
          </picture>
          <Link
            href="/"
            className="flex flex-row bg-[var(--secondary)] items-center justify-center py-1 px-2 rounded-lg mt-auto gap-2"
          >
            <p className="text-[var(--text-color-secondary)] font-bold">
              Saiba mais
            </p>
            <Image className="w-5 h-5" src={arrow} alt="Project image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
