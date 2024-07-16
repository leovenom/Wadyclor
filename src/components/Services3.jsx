import { fachada } from "../assets";
import Section from "./Section";
import {
  Gradient,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="signup">
      <div className="container">
        <div className="relative">
          <div className="relative z-1 flex items-center flex-col md:flex-row h-auto md:h-[26rem] my-5 p-8 lg:py-20 xl:h-[26rem]">
            
            <div className="order-2 md:order-1 relative z-1 xl:max-w-[31rem] md:max-w-[23rem] mr-auto mt-8 md:mt-0">
              <h4 className="h5 mb-4">Wadyclor Cromadora de Peças Plásticas</h4>
              <p className="text-md lg:text-sm md:text-xs mb-2">
                Excelência no Tratamento de Superfícies
              </p>
              <p className="text-sm lg:text-sm md:text-xs text-n-2">
                <br /> <br />
                Rua Teresina, 540 - São Paulo - SP
                <br /> Cep 03185-010
                <br /> <br />
                Fone: (11) 2966-0899<br />
                <u><a href="falecom@wadyclor.com.br" >falecom@wadyclor.com.br</a></u>
                <br /> <br />
                CNPJ: 61.454.971/0001-04<br />
                I.E. 105.835.894.111
              </p>
            </div>

            <div className="order-1 md:order-2 relative w-full md:w-3/6 xl:w-auto">
              <img
                className="w-full object-cover md:object-right"
                width={150}
                height={150}
                alt="A view of Wadyclor"
                src={fachada}
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

