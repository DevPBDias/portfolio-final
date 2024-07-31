import Image from "next/image";
import hero from "../../public/assets/images/Hero.png";

const HeroImage = () => {
  return (
    <div className="flex items-center justify-center border-4 border-[var(--secondary)] w-56 h-56 2xl:w-96 2xl:h-96 rounded-full">
      <Image
        className="w-full h-full object-cover"
        src={hero}
        alt="Hero image"
      />
    </div>
  );
};

export default HeroImage;
