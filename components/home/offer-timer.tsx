import { OfferCounter } from "./offer-countdown";

export const OfferTimer = () => {
  return (
    <div className="flex justify-center items-center gap-6">
      <section>
        <h6 className="text-right text-[26px]">
          Special Offers{" "}
          <span className="font-semibold text-destructive underline">
            of the week!
          </span>
        </h6>
        <p className="text-sm text-gray-700">
          Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.
        </p>
      </section>
      <section>
        <OfferCounter />
      </section>
    </div>
  );
};
