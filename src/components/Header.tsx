"use client";

import Image from "next/image";
import { iconsHeader, navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

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
                className={`nav-link ${
                  pathname === item.path ? "text-[var(--secondary)]" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          <Link
            target="_blank"
            rel="noreferrer noopener"
            className="nav-link"
            href="/CV-Dev-Paulo-Bruno.pdf"
          >
            CV
          </Link>
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
                <Image className="w-6 h-6" src={icon.icon} alt="Github icon" />
              </Link>
            ))}
        </div>
      </section>
    </header>
  );
};

export default Header;
