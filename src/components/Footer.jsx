import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">


        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-16 h-16 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={28} height={28} alt={item.title} fill={item.color}/>
            </a>
          ))}
        </ul>

                <p className="caption text-n-2 lg:block">
          © {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
