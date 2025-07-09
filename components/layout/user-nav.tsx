import { SecureHandIcon } from "../icons/secure-hand";
import { Container } from "./container";
import { CurrencySelector } from "./currency-selector";
import { LanguageSelector } from "./language-selector";

const userLinks = [
  {
    title: "About us",
    href: "#",
  },
  {
    title: "My account",
    href: "#",
  },
  {
    title: "Wishlist",
    href: "#",
  },
  {
    title: "Order Tracking",
    href: "#",
  },
];

export const UserNav = () => {
  return (
    <div className="border-b border-b-border text-xs text-gray-700">
      <Container className="flex items-center justify-between">
        <section className="flex items-center gap-3 py-3">
          {userLinks.map((l, i) => (
            <a key={i} href={l.href} className="hover:text-primary">
              {l.title}
            </a>
          ))}
        </section>
        <section className="divide-x divide-border flex items-center">
          <div className="flex items-center gap-1 p-3">
            <SecureHandIcon size={20} />
            <p>100% Secure delivery without contacting the courier</p>
          </div>
          <div className="p-3">
            Need help? Call Us:{" "}
            <a href="tel:+1234567890" className="font-semibold text-primary">
              +123 456 7890
            </a>
          </div>
          <div className="p-3 pr-0 flex items-center gap-3">
            <LanguageSelector />
            <CurrencySelector />
          </div>
        </section>
      </Container>
    </div>
  );
};
