import Link from "next/link";

const LinkTrybe = () => {
  return (
    <Link
      target="_blank"
      rel="noreferrer noopener"
      className="font-bold text-[var(--trybe)]"
      href="https://www.betrybe.com"
    >
      Trybe
    </Link>
  );
};

export default LinkTrybe;
