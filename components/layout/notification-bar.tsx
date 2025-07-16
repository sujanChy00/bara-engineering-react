import { X } from "lucide-react";
import { Button } from "../ui/button";

export const NotificationBar = () => {
  return (
    <div className="bg-tertiary p-1 text-white text-center flex justify-between items-center">
      <div />
      <p className="text-xs">
        Due to the <span className="font-semibold">COVID 19 </span>epidemic,
        orders may be processed with a slight delay
      </p>
      <Button variant="ghost" size={"icon"}>
        <X />
      </Button>
    </div>
  );
};
