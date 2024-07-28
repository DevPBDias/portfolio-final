import Image from "next/image";
import hero from "../../public/assets/images/Hero.png";

const HeroImage = () => {
  return (
    <div className="border-4 border-[var(--secondary)] w-96 h-96 rounded-full">
      <Image className="w-full h-full" src={hero} alt="Hero image" />
    </div>
  );
};

export default HeroImage;
