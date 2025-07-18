import Image from "next/image";
import { Button } from "../ui/button";

export const WeekendDiscountBannersTwo = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-6">
      <section className="h-60 overflow-hidden relative rounded-lg aspect-square w-full">
        <div className="inset-0 absolute z-10 flex items-center">
          <div className="px-10 space-y-6">
            <div className="space-y-1">
              <p className="font-dosis font-semibold text-sm text-orange-500">
                Weekend Discount 40%
              </p>
              <h6 className="text-2xl font-semibold text-gray-700">
                Legumes & Cereals
              </h6>
              <p className="text-xs text-gray-800 pt-1">
                Bacola Weekend Discount
              </p>
            </div>
            <Button className="rounded-full" variant="tertiary">
              Shop Now
            </Button>
          </div>
        </div>
        <Image
          fill
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-22.jpg"
          alt="banner1"
          className="object-cover"
        />
      </section>
      <section className="h-60 overflow-hidden relative rounded-lg aspect-square w-full">
        <div className="inset-0 absolute z-10 flex items-center">
          <div className="px-10 space-y-6">
            <div className="space-y-1">
              <p className="font-dosis font-semibold text-sm text-gray-100">
                Weekend Discount 60%
              </p>
              <h6 className="text-2xl font-semibold text-gray-100">
                All Canned Food
              </h6>
              <p className="text-xs text-gray-200 pt-1">
                Bacola Weekend Discount
              </p>
            </div>
            <Button className="rounded-full" variant="destructive">
              Shop Now
            </Button>
          </div>
        </div>
        <Image
          fill
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-23.jpg"
          alt="banner2"
          className="object-cover"
        />
      </section>
    </div>
  );
};
