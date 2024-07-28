import Image from "next/image";
import devLogo from "../../public/assets/images/devLogo.png";
import github from "../../public/assets/icons/GithubLogo.png";
import linkedin from "../../public/assets/icons/LinkedinLogo.png";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <section className="container-header">
        <h1>Dev PBDias</h1>
        <nav>
          {navLinks &&
            navLinks.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="text-xl font-bold hover:text-[var(--secondary)] "
              >
                {item.name}
              </Link>
            ))}
        </nav>
        <div className="container-icons">
          <Image src={github} alt="Github icon" />
          <Image src={linkedin} alt="Linkedin icon" />
        </div>
      </section>
    </header>
  );
};

export default Header;
