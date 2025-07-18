import { Container } from "./container";
import { FooterContacts } from "./footer-contacts";
import { FooterCopyright } from "./footer-copyright";
import { FooterDeliveryFeatures } from "./footer-delivery-features";
import { FooterLinks } from "./footer-links";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-50 pb-28 space-y-28">
        <FooterDeliveryFeatures />
        <FooterLinks />
      </div>
      <Container>
        <FooterContacts />
        <FooterCopyright />
      </Container>
    </footer>
  );
};
