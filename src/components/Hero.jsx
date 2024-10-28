import { curve, heroImg } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] mb:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Wadyclor: Excelência em Cromação de Peças Plásticas
            {` `}
            <span className="inline-block relative">
               desde 1965
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Qualidade e rapidez a preços acessíveis, para pequenos ou grandes volumes da sua indústria 
          </p>
          <Button href="https://wa.me/+1129660899" external white >
            FALE COM A WADYCLOR
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="aspect-[33/40] rounded-b-[0.9rem] rounded-t-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={heroImg}
                  className="w-full scale-[2.8] translate-y-[90%] translate-x-[-12%] md:scale-[1.6] md:-translate-y-[-20%] lg:scale-[1] lg:-translate-y-[3%] lg:-translate-x-[0%]"
                  width={1020}
                  height={510}
                  alt="Peças cromadas"
                />
    
              </div>
            </div>

            <Gradient />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
