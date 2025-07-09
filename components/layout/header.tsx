import { MainNav } from "./main-nav";
import { NotificationBar } from "./notification-bar";
import { UserNav } from "./user-nav";

export const Header = () => {
  return (
    <header>
      <NotificationBar />
      <UserNav />
      <MainNav />
    </header>
  );
};
