import DashboardIcon from "@assets/icons/home3.svg";
import MarketingIcon from "@assets/icons/arrangehorizontalsquare.svg";
import MarketReportsIcon from "@assets/icons/activity.svg";
import WalletIcon from "@assets/icons/emptywallet.svg";
import LogoutIcon from "@assets/icons/logout.svg";

const sidebarNavigation = [
  {
    name: "داشبورد",
    href: "/userpanel/dashboard",
    icon: DashboardIcon,
  },
  {
    name: "خرید و فروش",
    href: "/userpanel/marketing",
    icon: MarketingIcon,
  },
  {
    name: "گزارش بازار",
    href: "/userpanel/marketreports",
    icon: MarketReportsIcon,
  },
  {
    name: "کیف پول",
    href: "/userpanel/wallet",
    icon: WalletIcon,
  },
  {
    name: "خروج",
    href: "/",
    icon: LogoutIcon,
  },
];

export { sidebarNavigation };
