import Image from "next/image";
import { Button } from "../ui/button";

export const WeekendDiscountBannersOne = () => {
  return (
    <div className="grid grid-cols-3 items-center gap-6">
      <section className="h-60 overflow-hidden relative rounded-lg aspect-square w-full">
        <a href="#" className="inset-0 absolute z-10 flex items-center">
          <div className="px-10 space-y-3">
            <div className="space-y-1">
              <h6 className="text-[30px] font-semibold font-dosis leading-tight">
                Organic <br /> Breakfast
              </h6>
              <p className="text-xs text-pink-500">Bacola Weekend Discount</p>
            </div>
            <Button className="rounded-full bg-orange-500">Shop Now</Button>
          </div>
        </a>
        <Image
          fill
          src={
            "https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-19.jpg"
          }
          alt="banner1"
          className="object-cover"
        />
      </section>
      <section className="h-60 overflow-hidden relative rounded-lg aspect-square w-full">
        <a href="#" className="inset-0 absolute z-10 flex items-center">
          <div className="px-10 space-y-3">
            <div className="space-y-1">
              <h6 className="text-[30px] font-semibold font-dosis leading-tight">
                Organic <br /> Baby Food
              </h6>
              <p className="text-xs text-pink-500">Bacola Weekend Discount</p>
            </div>
            <Button className="rounded-full bg-orange-500">Shop Now</Button>
          </div>
        </a>
        <Image
          fill
          src={
            "https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-20.jpg"
          }
          alt="banner2"
          className="object-cover"
        />
      </section>
      <section className="h-60 overflow-hidden relative rounded-lg aspect-square w-full">
        <a href="#" className="inset-0 absolute z-10 flex items-center">
          <div className="px-10 space-y-3">
            <div className="space-y-1">
              <h6 className="text-[30px] font-semibold font-dosis leading-tight text-white">
                Organic <br /> Breakfasts
              </h6>
              <p className="text-xs text-gray-100">Bacola Weekend Discount</p>
            </div>
            <Button className="rounded-full" variant="tertiary">
              Shop Now
            </Button>
          </div>
        </a>
        <Image
          fill
          src={
            "https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-21.jpg"
          }
          alt="banner3"
          className="object-cover"
        />
      </section>
    </div>
  );
};
