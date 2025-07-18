import { BadgePercent, CircleDollarSign, Milk, Truck } from "lucide-react";
import { Container } from "./container";

const items = [
  {
    icon: <Milk />,
    title: "Everyday fresh products",
  },
  {
    icon: <Truck />,
    title: "Free delivery for order over $70",
  },
  {
    icon: <BadgePercent />,
    title: "Daily Mega Discounts",
  },
  {
    icon: <CircleDollarSign />,
    title: "Best price on the market",
  },
];

export const FooterDeliveryFeatures = () => {
  return (
    <Container className="py-8 border-b">
      <div className="flex flex-col lg:flex-row items-center justify-center divide-y lg:divide-y-0 lg:divide-x divide-border">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-4 lg:py-0 flex-1 justify-center lg:justify-start"
          >
            <div className="flex-shrink-0 size-6">{item.icon}</div>
            <span className="text-[13px] font-medium ">{item.title}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};
