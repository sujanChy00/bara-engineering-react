import { FOOTER_LINKS } from "@/constants/data";
import { Container } from "./container";

export const FooterLinks = () => {
  return (
    <Container className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
      {FOOTER_LINKS.map((column, index) => (
        <div key={index} className="grid gap-1">
          <h3 className="font-semibold mb-2 font-dosis text-[15px]">
            {column.title}
          </h3>
          {column.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              href="#"
              className="text-muted-foreground hover:underline text-[13px]"
            >
              {link}
            </a>
          ))}
        </div>
      ))}
    </Container>
  );
};
