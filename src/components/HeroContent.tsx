import Link from "next/link";

const HeroContent = () => {
  return (
    <section className="flex flex-col justify-center items-start gap-2">
      <p>Olá, sou Paulo Bruno,</p>
      <h2 className="uppercase text-[var(--secondary)] text-6xl font-bold">
        Desenvolvedor web
      </h2>
      <p>
        Apaixonado por soluções criativas e inovaddoras que facilitem a vida
        <br />
        cotidiana das pessoas.
      </p>
      <Link
        className="bg-[var(--secondary)] text-xl font-bold text-[var(--text-color-secondary)] px-7 py-1 rounded-lg shadow-sm mt-9"
        href="/curriculum"
      >
        Ler CV
      </Link>
    </section>
  );
};

export default HeroContent;
