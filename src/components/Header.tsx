import Image from "next/image";
import { iconsHeader, navLinks } from "@/constants";
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
          {iconsHeader &&
            iconsHeader.map((icon) => (
              <Link
                target="_blank"
                rel="noreferrer noopener"
                key={icon.id}
                href={icon.url}
              >
                <Image src={icon.icon} alt="Github icon" />
              </Link>
            ))}
        </div>
      </section>
    </header>
  );
};

export default Header;
