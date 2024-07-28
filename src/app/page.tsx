import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import ProjectCardHome from "@/components/ProjectCardHome";

export default function Home() {
  return (
    <main className="container-main">
      <section className="flex flex-row justify-between items-center w-full">
        <HeroContent />
        <HeroImage />
      </section>
      <section className="flex flex-col justify-between items-start w-full mt-16 gap-4">
        <h3 className="text-2xl font-bold">Projetos de destaque</h3>
        <div className="flex flex-row justify-between items-center w-full gap-6">
          <ProjectCardHome />
        </div>
      </section>
    </main>
  );
}
