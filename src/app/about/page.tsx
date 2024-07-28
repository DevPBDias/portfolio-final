import Image from "next/image";
import timeline from "../../../public/assets/images/Timeline.png";
import { devStacks } from "@/constants";

const About = () => {
  return (
    <main className="flex flex-col px-[var(--padding-content)] py-16 w-full justify-center items-center">
      <section className=" flex flex-col justify-center items-start gap-6 w-full">
        <h3 className="font-bold text-2xl">Um pouco da minha história ...</h3>
        <div className=" flex flex-row justify-between items-center gap-11">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Sit sit ipsum sit non morbi
            cursus libero neque justo. Nibh semper purus tincidunt ullamcorper
            tristique massa turpis donec. Faucibus eget feugiat vestibulum
            commodo congue lectus eu semper a. Vulputate amet pellentesque
            viverra vestibulum dui lobortis est rhoncus.
            <br />
            <br />
            Faucibus eget feugiat vestibulum commodo congue lectus eu semper a.
            Vulputate amet pellentesque viverra vestibulum dui lobortis est
            rhoncus.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Sit sit ipsum sit non morbi
            cursus libero neque justo. Nibh semper purus tincidunt ullamcorper
            tristique massa turpis donec. Faucibus eget feugiat vestibulum
            commodo congue lectus eu semper a. Vulputate amet pellentesque
            viverra vestibulum dui lobortis est rhoncus.
            <br />
            <br />
            Faucibus eget feugiat vestibulum commodo congue lectus eu semper a.
            Vulputate amet pellentesque viverra vestibulum dui lobortis est
            rhoncus.
          </p>
        </div>
      </section>
      <picture className="my-16">
        <Image src={timeline} alt="timeline dev" />
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
