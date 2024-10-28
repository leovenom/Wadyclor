import { check, pecas } from "../assets";
import { collabContent,collabText, collabText2 } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section id="services" crosses>
      <div className="container lg:flex">
        <div className="max-w-[32rem]">
          <h3 className="h3 mb-4 md:mb-8">
            Cromação Decorativa de peças plásticas dos tipos ABS, ABS-PC e PA
          </h3>
          <p className="body-2 mb-2 text-n-2 md:mb-8 lg:mb-8 lg:mx-auto ">
            {collabText}
          </p>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-1" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>
          <Button className="mb-4" white href="https://wa.me/+1129660899" external>FALE COM A WADYCLOR</Button>
        </div>
        <div className="lg:ml-auto xl:w-[32rem] xl:mt-[13rem]">

          <div className="relative mt-16 md:mt-2 left-1/2 flex w-full w-[32rem] border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
              <img
                  src={pecas}
                  className="w-full h-auto object-cover"
                  width={1020}
                  height={510}
                  alt="Peças cromadas"
                />
            <LeftCurve />
            <RightCurve />
          </div>
          <p className="body-2 mt-8 text-n-2 md:mb-16 lg:w-[32rem] lg:mx-auto ">
            {collabText2}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
