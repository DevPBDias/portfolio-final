import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";
import { ProjectData } from "@/interfaces";

const ProjectsPage = () => {
  return (
    <main className="flex flex-row px-[var(--padding-content)] py-16 w-full justify-between items-start h-full gap-44">
      <section className=" flex flex-col justify-center items-start gap-6 w-64">
        <h3 className="font-bold text-2xl">Projetos</h3>
        <div className=" flex flex-col justify-center items-start gap-3">
          <p className="border-b-[var(--secondary)] border-b-2">Todos</p>
          {projects.map((item) => (
            <p className="hover:text-[var(--secondary)]" key={item.type}>
              Projetos {item.type}
            </p>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-6">
        {projects &&
          projects.map((item: ProjectData) => <ProjectCard data={item} />)}
      </section>
    </main>
  );
};

export default ProjectsPage;
