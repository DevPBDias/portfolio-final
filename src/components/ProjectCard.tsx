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
        <Image
          className="w-full h-full rounded-lg"
          src={data.image}
          alt="Project image"
        />
      </picture>
      <section className="flex flex-col px-5 py-8 justify-start items-start gap-3 w-1/2 h-full ">
        <div className="flex flex-row justify-between items-center w-full">
          <h4 className="text-xl font-semibold">{data.name}</h4>
          <p className="border-[var(--bg-soft)] px-2 text-xs border-b-2">
            {data.year}
          </p>
        </div>
        <p className="text-sm text-[var(--text-color-terciary)]">
          {data.description}
        </p>
        <section className="flex flex-row flex-wrap justify-start items-start gap-2 mt-3">
          {data.techs.map((tech: string, index: number) => (
            <p
              key={index}
              className="bg-[var(--bg-darker)] rounded-lg px-2 py-1 text-xs"
            >
              {tech}
            </p>
          ))}
        </section>
        <Link
          target="_blank"
          rel="noreferrer noopener"
          href={data.link}
          className="flex flex-row bg-[var(--secondary)] items-center justify-center py-1 px-2 rounded-lg mt-auto gap-2"
        >
          <p className="text-[var(--text-color-secondary)] font-bold">
            Saiba mais
          </p>
          <Image className="w-5 h-5" src={arrow} alt="Project image" />
        </Link>
      </section>
    </div>
  );
};

export default ProjectCard;
