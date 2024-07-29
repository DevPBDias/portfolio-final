import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import ProjectCardHome from "@/components/ProjectCardHome";
import { projects } from "@/constants";

export default function Home() {
  return (
    <main className="container-main">
      <section className="flex flex-row justify-between items-center w-full">
        <HeroContent />
        <HeroImage />
      </section>
      <section className="flex flex-col justify-between items-start w-full mt-16 gap-4">
        <h3 className="text-2xl font-bold">Projetos de destaque</h3>
        <div className="grid grid-cols-4 gap-6">
          <ProjectCardHome data={projects[0]} />
          <ProjectCardHome data={projects[1]} />
          <ProjectCardHome data={projects[2]} />
          <ProjectCardHome data={projects[3]} />
        </div>
      </section>
    </main>
  );
}
