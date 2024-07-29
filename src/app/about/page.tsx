import Image from "next/image";
import timeline from "../../../public/assets/images/Timeline.png";
import { devStacks } from "@/constants";
import LinkTrybe from "@/components/LinkTrybe";

const About = () => {
  return (
    <main className="flex flex-col px-[var(--padding-content)] py-16 w-full justify-center items-center">
      <section className=" flex flex-col justify-center items-start gap-6 w-full">
        <h3 className="font-bold text-2xl">Um pouco da minha história ...</h3>
        <div className=" flex flex-row justify-between items-center gap-11">
          <p className="text-[var(--text-color-primary-soft)] text-sm">
            Um jovem de 32 anos formado, primeiramente, em engenharia civil pela
            PUC-GO em 2017. Apaixonado em rock, basquete, filmes e animes. E que
            resolveu fazer uma transição da engenharia para a área de
            tecnologia.
            <br />
            <br />
            Minha decisão de transição de carreira ocorreu devido a pandemia e a
            crise no setor de engenharia civil. Tive um desejo de buscar uma
            nova área de atuação que fosse flexível podendo trabalhar
            remotamente, dinâmica e que fosse uma área do futuro. E através das
            minhas pesquisas, encontrei em uma propaganda no vídeo do canal da
            Nath Cury, uma escola de programação que me despertou esse desejo.
          </p>
          <p className="text-[var(--text-color-primary-soft)] text-sm">
            A minha trajetória no mundo da programação foi iniciada através da
            escola <LinkTrybe />. Comecei o curso em 2022 e finalizei em 2023,
            foi uma caminhada desafiadora com noites longas e fins de semanas
            destinados para aprender e treinar tecnologias de desenvolvimento
            web, além de desenvolver projetos individuais e em grupo que serviam
            como provas. Tudo era muito novo para mim, mas ao mesmo tempo muito
            prazeroso em ver os projetos ganhando vida.
            <br />
            <br />
            Minha contínua caminhada vem sendo trilhada com estudos de novas
            tecnologias para me manter atualizado. Além, de desenvolver projetos
            pessoais e realizar alguns trabalhos como freelancer.{" "}
            <strong className="text-[var(--text-color-primary)] text-sm">
              Enquanto isso, busco por uma vaga como desenvolvedor web.
            </strong>
          </p>
        </div>
      </section>
      <picture className="w-full my-28">
        <Image
          className="object-cover w-full"
          src={timeline}
          alt="timeline dev"
        />
      </picture>
      <section className="flex flex-col justify-center items-start gap-6 w-full">
        <h3 className="font-bold text-2xl">Habilidades</h3>
        <div className=" flex flex-row justify-between items-center w-full">
          {devStacks &&
            devStacks.map((stack, index: number) => (
              <Image
                className="w-17 h-16"
                key={index}
                src={stack}
                alt="stack dev"
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default About;
