import Link from "next/link";

const HeroContent = () => {
  return (
    <section className="flex flex-col justify-center items-start gap-1 lg:gap-2">
      <p className="lg:text-base text-sm">Olá, sou Paulo Bruno,</p>
      <h2 className="uppercase text-[var(--secondary)] text-2xl lg:text-6xl font-bold">
        Desenvolvedor web
      </h2>
      <p className="lg:text-base text-sm">
        Apaixonado por soluções criativas e inovaddoras que facilitem a vida
        cotidiana das pessoas.
      </p>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        className="flex justify-center items-center bg-[var(--secondary)] lg:text-xl font-bold text-[var(--text-color-secondary)] w-full py-1 lg:px-7 lg:py-1 rounded-lg shadow-sm mt-5 ml- lg:mt-9"
        href="/CV-Dev-Paulo-Bruno.pdf"
      >
        Ler CV
      </Link>
    </section>
  );
};

export default HeroContent;
