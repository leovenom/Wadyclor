import { nickel,grid } from "../assets";
import Button from "./Button";
import Section from "./Section";
import {
  Gradient,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <div className="relative">
          <div className=" bg-n-8 relative z-1 flex items-center h-[24rem] my-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[26rem]">
                                   <div className="absolute top-0 left-0">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
            
            <div className="relative z-1 xl:max-w-[rem] md:max-w-[21rem] mr-auto">
              <h4 className="h4 mb-4"></h4>
              <p className="body-2 mb-[4rem] text-n-1">
              Você também pode oferecer aos seus clientes produtos com uma cromação de confiança e qualidade. Entre em contato conosco!
              </p>
            <Button href="https://wa.me/+1129660899" external white>
            FALE COM A WADYCLOR
          </Button>
            </div>
            <div className="absolute inset-y-0 right-0 right-0 p-8 w-full h-full pointer-events-none md:w-3/6 xl:w-auto hidden md:block">
              <img
                className="w-full object-cover md:object-right"
                width={150}
                height={150}
                alt="A Wadyclor"
                src={nickel}
              />
            </div>
          </div> 
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
