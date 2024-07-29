import Image from "next/image";
import { ProjectData } from "@/interfaces";
import Link from "next/link";

const ProjectCardHome = ({ data }: ProjectData | any) => {
  return (
    <>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href={data.link}
        key={data.id}
        className="flex flex-col justify-start items-center"
      >
        <picture className="w-full h-52 rounded-lg">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={data.image}
            alt="Project image"
          />
        </picture>
        <div className="flex flex-col px-3 py-2 justify-center items-start gap-3 w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <h4 className="text-base font-semibold">{data.name}</h4>
            <p className="border-[var(--text-color-primary)] px-1 text-xs border-b-2">
              {data.type}
            </p>
          </div>
          <p className="text-sm text-[var(--text-color-terciary)]">
            {data.description}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProjectCardHome;
