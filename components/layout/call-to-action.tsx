import { Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Container } from "./container";

export const CallToAction = () => {
  return (
    <div className="bg-tertiary pt-16">
      <Container className="grid grid-cols-2 ">
        <section className="pb-16 space-y-3">
          <div>
            <p className="font-light text-white">
              $20 discount for your first order
            </p>
            <h6 className="text-[26px] font-bold text-white">
              Join our newsletter and get...
            </h6>
          </div>
          <p className="text-[13px] text-gray-400">
            Join our email subscription now to get updates <br /> on promotions
            and coupons.
          </p>
          <div className="pt-3">
            <Input
              placeholder="your email address"
              type="email"
              required
              inputMode="email"
              leftIcon={<Mail className="text-muted-foreground" />}
              rightIconClassName="right-1.5"
              className="border-none bg-white rounded-xs h-16 pr-40 pl-12"
              rightIcon={
                <Button className="rounded-xs" size="xl" variant="tertiary">
                  Subscribe
                </Button>
              }
            />
          </div>
        </section>
        <section className="flex justify-center items-end">
          <Image
            height={350}
            width={500}
            sizes="(100vw - 400px)"
            src={
              "https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png"
            }
            alt="coupon"
          />
        </section>
      </Container>
    </div>
  );
};
