import Image from "next/image";
import { ProjectData } from "@/interfaces";
import Link from "next/link";
import arrow from "../../public/assets/icons/ArrowUpRight.png";

const ProjectCard = ({ data }: ProjectData | any) => {
  return (
    <div
      key={data.id}
      className="flex flex-col md:flex-row justify-center items-center lg:h-80 border-b-2 border-b-[var(--text-color-terciary)] md:border-none"
    >
      <picture className="w-full h-60 2xl:w-1/2 2xl:h-full">
        <Image
          className="w-full h-full rounded-lg object-cover"
          src={data.image}
          alt="Project image"
        />
      </picture>
      <section className="flex flex-col px-3 md:px-5 py-3 md:py-8 justify-between items-start gap-3 w-full 2xl:w-1/2 h-full ">
        <div className="flex flex-row justify-between items-center w-full">
          <h4 className="text-lg md:text-xl font-semibold">{data.name}</h4>
          <p className="border-[var(--bg-soft)] px-2 text-xs border-b-2">
            {data.year}
          </p>
        </div>
        <p className="text-xs text-[var(--text-color-terciary)] ">
          {data.inGroup ? "Em grupo" : "Individual"}
        </p>
        <p className="text-sm text-[var(--text-color-primary)]">
          {data.description}
        </p>
        <section className="flex flex-row flex-wrap justify-start items-start gap-2 mt-1 lg:mt-3">
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
          className="flex w-full md:w-32 flex-row bg-[var(--secondary)] items-center justify-center py-1 px-2 rounded-lg mb-auto ml-auto gap-2"
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
