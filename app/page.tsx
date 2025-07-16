import { HomeBanner } from "@/components/home/home-banner";
import { HomeCategoriesCarousel } from "@/components/home/home-categories-carousel";
import { OfferTimer } from "@/components/home/offer-timer";
import { OffersBanner } from "@/components/layout/offers-banner";

export default function Home() {
  return (
    <main className="pt-8 pb-16 space-y-8">
      <OffersBanner />
      <HomeBanner />
      <HomeCategoriesCarousel />
      <OfferTimer />
    </main>
  );
}
