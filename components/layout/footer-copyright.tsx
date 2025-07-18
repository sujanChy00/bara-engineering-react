import { AmericanExpressIcon } from "../icons/american-express";
import { MasterCardIcon } from "../icons/master-card";
import { PaypalIcon } from "../icons/paypal";
import { StripeIcon } from "../icons/stripe";
import { VisaIcon } from "../icons/visa-icon";

const links = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-conditions",
  },
  {
    label: "Cookie",
    href: "/cookie",
  },
];

const paymentIcons = [
  { key: "american-express", icon: <AmericanExpressIcon className="size-6" /> },
  { key: "visa", icon: <VisaIcon className="size-6" /> },
  { key: "master-card", icon: <MasterCardIcon className="size-6" /> },
  { key: "paypal", icon: <PaypalIcon className="size-6" /> },
  { key: "stripe", icon: <StripeIcon className="size-6" /> },
];

export const FooterCopyright = () => {
  return (
    <div className="flex items-center justify-between py-8 border-t">
      <section>
        <p className="text-xs text-muted-foreground">
          Copyright 2025 © Bacola WordPress Theme. All rights reserved. Powered
          by KlbTheme.
        </p>
      </section>
      <section className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:underline text-xs text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          {paymentIcons.map(({ key, icon }) => (
            <div key={key} className="border px-1">
              {icon}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
