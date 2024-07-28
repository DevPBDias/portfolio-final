import Image from "next/image";
import devLogo from "../../public/assets/images/devLogo.png";
import github from "../../public/assets/icons/GithubLogo.png";
import linkedin from "../../public/assets/icons/LinkedinLogo.png";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <Image src={devLogo} alt="Logo website" />
      </div>
      <nav>
        {navLinks &&
          navLinks.map((item) => (
            <Link key={item.id} href={item.path}>
              {item.name}
            </Link>
          ))}
      </nav>
      <div>
        <Image src={github} alt="Github icon" />
        <Image src={linkedin} alt="Linkedin icon" />
      </div>
    </header>
  );
};

export default Header;
