import { MoveRight } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const HomeBanner = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-6">
      <section>
        <AspectRatio
          ratio={4 / 3}
          className="rounded-[10px] overflow-hidden relative"
        >
          <a
            href="#"
            className="absolute inset-0 z-10 flex bg-black/5 items-center justify-start px-10 py-12"
          >
            <div className="space-y-6">
              <section className="flex items-center gap-3">
                <p className="uppercase font-dosis font-medium text-sm ">
                  Exclusive Offer
                </p>
                <Badge className="text-[#038E42] bg-gradient-to-r from-green-500/20 rounded-full px-4 py-2 text-sm font-dosis font-medium to-transparent">
                  -20% OFF
                </Badge>
              </section>
              <section>
                <h3 className=" font-semibold text-[40px] leading-[48px]">
                  Gerthesim Tend <br />
                  Inder Prosur
                </h3>
                <p className="text-zinc-700">
                  Just don&apos;t miss the special this week
                </p>
              </section>
              <section>
                <p className="text-xs text-zinc-700 font-medium">
                  from{" "}
                  <span className="text-destructive font-dosis font-bold text-4xl">
                    $7.99
                  </span>
                </p>
              </section>
              <Button className="rounded-full" variant="destructive">
                Shop Now <MoveRight />
              </Button>
            </div>
          </a>
          <Image
            alt="banner1"
            className="object-cover"
            fill
            src={
              "https://klbtheme.com/bacola/wp-content/plugins/bacola-core/elementor/images/banner-box4.png"
            }
          />
        </AspectRatio>
      </section>
      <section>
        <AspectRatio
          ratio={4 / 3}
          className="rounded-[10px] overflow-hidden relative"
        >
          <a
            href="#"
            className="absolute inset-0 z-10 flex bg-black/20 items-center justify-start px-10 py-12"
          >
            <div className="space-y-6">
              <section className="flex items-center gap-3">
                <p className="uppercase font-dosis font-medium text-sm text-white">
                  Exclusive Offer
                </p>
                <Badge className="text-[#038E42] bg-gradient-to-r from-green-500/20 rounded-full px-4 py-2 text-sm font-dosis font-medium to-transparent">
                  -20% OFF
                </Badge>
              </section>
              <section>
                <h3 className="text-white font-semibold text-[40px] leading-[48px]">
                  Gerthesim Tend <br />
                  Inder Prosur
                </h3>
                <p className="text-gray-200">
                  Just don&apos;t miss the special this week
                </p>
              </section>
              <section>
                <p className="text-xs text-gray-200 font-medium">
                  from{" "}
                  <span className="text-destructive font-bold font-dosis text-4xl">
                    $6.25
                  </span>
                </p>
              </section>
              <Button className="rounded-full">
                Shop Now <MoveRight />
              </Button>
            </div>
          </a>
          <Image
            alt="banner2"
            className="object-cover"
            fill
            src={
              "https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-18.jpg"
            }
          />
        </AspectRatio>
      </section>
    </div>
  );
};
