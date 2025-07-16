import { CopyButton } from "../ui/copy-button";

export const OffersBanner = () => {
  return (
    <div className="bg-red-100 flex items-center justify-center gap-3 p-3 py-5 rounded-xs">
      <p className="text-red-500">
        Super Discount for you{" "}
        <span className="underline font-semibold"> first purchase.</span>
      </p>
      <CopyButton
        size={"default"}
        variant={"outline"}
        textToCopy="FREE25BACUse"
        className="border-dashed border-red-500 text-red-500 bg-transparent rounded-full hover:bg-red-500/10 hover:text-red-500 text-xs font-semibold"
      >
        FREE25BACUse
      </CopyButton>
      <p className="text-muted-foreground text-xs">
        Use discount code in checkout!
      </p>
    </div>
  );
};
