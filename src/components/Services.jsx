import { service1 } from "../assets";
import { brainwaveServices } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import {
  Gradient,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Responsabilidade"
        />
 <div className="relative">
  <div className="relative z-1 flex flex-col lg:flex-row mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
    <div className="w-full md:w-3/6 lg:w-3/6 xl:w-auto mb-6 md:mb-0 md:relative md:ml-0">
      <img
        className="w-full h-full object-cover md:object-right"
        width={800}
        height={730}
        alt="A Wadyclor"
        src={service1}
      />
    </div>

    <div className="w-full lg:w-auto md:w-3/6 xl:max-w-[28rem] md:max-w-[21rem] ml-0 md:ml-auto md:pl-8">
      <h4 className="h4 mb-4">A Wadyclor</h4>
      <p className="text-sm lg:text-sm md:text-xs mb-[1rem] text-n-2">
        A Wadyclor desenvolve as suas atividades de maneira responsável, em conformidade total com a legislação ambiental vigente e demais requisitos legais conforme exigido pelos órgãos de fiscalização e controle competentes, incluindo Polícias Civil e Federal, IBAMA, CETESB, Ministério da Defesa e Corpo de Bombeiros.
        <br /><br />
        Contamos com uma Estação de Tratamento de Efluentes (ETE) líquidos em nossa planta, garantindo o tratamento completo das águas utilizadas nos nossos processos de fabricação. Os resíduos sólidos são encaminhados para a destinação adequada através de parceiros licenciados, que atendem aos requisitos técnicos exigidos.
        <br /><br />
        A Wadyclor prioriza a qualidade da segurança e da saúde ocupacional de seus colaboradores. Seguimos rigorosamente as diretrizes estabelecidas pela legislação de Saúde Ocupacional, implementando programas internos em conformidade com as Normas Regulamentadoras (NRs) para prevenção de doenças ocupacionais, incluindo:
      </p>
      <ul className="text-sm">
        {brainwaveServices.map((item, index) => (
          <li key={index} className="flex items-start py-4 border-t border-n-6">
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
  <Gradient />
</div>

      </div>
    </Section>
  );
};

export default Services;
