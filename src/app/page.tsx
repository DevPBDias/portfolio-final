import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import ProjectCardHome from "@/components/ProjectCardHome";
import { projects } from "@/constants";

export default function Home() {
  return (
    <main className="container-main">
      <section className="container-hero">
        <HeroContent />
        <HeroImage />
      </section>
      <section className="container-home-projects">
        <h3 className="text-lg font-bold lg:text-xl">Projetos de destaque</h3>
        <div className="grid-projects">
          <ProjectCardHome data={projects[0]} />
          <ProjectCardHome data={projects[1]} />
          <ProjectCardHome data={projects[2]} />
          <ProjectCardHome data={projects[3]} />
        </div>
      </section>
    </main>
  );
}
