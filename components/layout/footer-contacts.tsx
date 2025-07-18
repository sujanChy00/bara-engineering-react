import { cn } from "@/lib/utils";
import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";
import { AppleIcon } from "../icons/apple-icon";
import { PlayStoreIcon } from "../icons/play-store";
import { buttonVariants } from "../ui/button";

export const FooterContacts = () => {
  return (
    <div className="flex items-center justify-between py-14">
      <section className="flex items-center gap-3">
        <div className="border rounded-full flex items-center justify-center border-border size-12">
          <PhoneCall className="text-muted-foreground" />
        </div>
        <div className=" space-y-0.5">
          <h6 className="text-xl font-semibold">8 800 555-55</h6>
          <p className="text-xs text-muted-foreground">Working 8:00 - 22:00</p>
        </div>
      </section>
      <section className="flex items-center gap-4">
        <div>
          <h6 className="text-sm font-semibold">Download App on Mobile :</h6>
          <p className="text-xs text-muted-foreground">
            15% discount on your first purchase
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "bg-black rounded-xs py-2 hover:bg-black/80"
            )}
          >
            <PlayStoreIcon className="size-5" />
            <div>
              <p className="text-[8px]">Get it on</p>
              <p className="text-xs font-medium">Google Play</p>
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "bg-black rounded-xs py-2 hover:bg-black/80"
            )}
          >
            <AppleIcon className="size-5 [&_g]:fill-white" />
            <div>
              <p className="text-[8px]">Download on the</p>
              <p className="text-xs font-medium">App Store</p>
            </div>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 flex items-center justify-center border border-border rounded-full"
          >
            <Facebook className="size-4 text-tertiary" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 flex items-center justify-center border border-border rounded-full"
          >
            <Instagram className="size-4 text-tertiary" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="size-8 flex items-center justify-center border border-border rounded-full"
          >
            <Twitter className="size-4 text-tertiary" />
          </a>
        </div>
      </section>
    </div>
  );
};
