import Image from "next/image";
import hero from "../../public/assets/images/Hero.png";

const HeroImage = () => {
  return (
    <div className="flex items-center justify-center border-4 border-[var(--secondary)] w-56 h-56 lg:w-96 lg:h-96 rounded-full">
      <Image
        className="w-full h-full object-cover"
        src={hero}
        alt="Hero image"
      />
    </div>
  );
};

export default HeroImage;
