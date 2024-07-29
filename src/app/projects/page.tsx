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
    <main className="flex flex-row px-[var(--padding-content)] py-16 w-full justify-between items-start min-h-dvh gap-44">
      <section className=" flex flex-col justify-center items-start gap-6 w-96">
        <h3 className="font-bold text-2xl">Projetos</h3>
        <div className=" flex flex-col justify-center items-start gap-3 w-full">
          <button
            type="button"
            onClick={() => setSelectedProjects(projects)}
            className="hover:text-[var(--secondary)]"
          >
            Todos
          </button>
          {allTypes.map((item) => (
            <button
              type="button"
              className="hover:text-[var(--secondary)]"
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
