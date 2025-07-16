import { HeaderOptions } from "./header-options";
import { MainNav } from "./main-nav";
import { NotificationBar } from "./notification-bar";
import { UserNav } from "./user-nav";

export const Header = () => {
  return (
    <header>
      <NotificationBar />
      <UserNav />
      <div className="pt-6 pb-2 border-b border-b-border space-y-6">
        <HeaderOptions />
        <MainNav />
      </div>
    </header>
  );
};
