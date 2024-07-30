"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";
import { ProjectData } from "@/interfaces";
import { useState } from "react";

const ProjectsPage = () => {
  const [selectedProjects, setSelectedProjects] = useState<
    ProjectData[] | null
  >([]);
  const [clicked, setNotClicked] = useState<boolean>(false);

  const projectTypes = projects?.map((elem: any) => elem.type);
  const set = new Set(projectTypes);
  const allTypes = Array.from(set);

  const handleTypes = (type: string) => {
    const filterProjects = projects.filter((elem) => elem.type === type);
    setSelectedProjects(filterProjects);
    setNotClicked(true);
  };

  return (
    <main className="flex flex-col lg:flex-row px-5 lg:px-[var(--padding-content)] py-9 lg:py-16 w-full justify-between items-start min-h-dvh gap-7 lg:gap-44">
      <section className=" flex flex-col justify-center items-start gap-6 w-full lg:w-96">
        <h3 className="font-bold text-xl lg:text-2xl">Projetos</h3>
        <div className=" flex flex-row lg:flex-col flex-wrap justify-start items-center lg:justify-center lg:items-start gap-5 lg:gap-3 w-full">
          <button
            type="button"
            onClick={() => setSelectedProjects(projects)}
            className={`focus:border-b-[var(--secondary)] focus:border-b-2 ${
              !clicked ? "border-b-[var(--secondary)] border-b-2" : ""
            }`}
          >
            Todos
          </button>
          {allTypes.map((item) => (
            <button
              type="button"
              className="focus:border-b-[var(--secondary)] focus:border-b-2 hover:text-[var(--secondary)]"
              key={item}
              onClick={() => handleTypes(item)}
            >
              Projetos {item}
            </button>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-6">
        {clicked
          ? selectedProjects?.map((item: ProjectData) => (
              <ProjectCard data={item} />
            ))
          : projects.map((item: ProjectData) => <ProjectCard data={item} />)}
      </section>
    </main>
  );
};

export default ProjectsPage;
