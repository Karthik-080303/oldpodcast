import SidebarMenu, {
  SidebarMenuItem,
  SidebarMenuSeperator,
  SidebarMenuTitle,
  ThemeToggler,
} from "../ownComponent/SidebarMenu";
import { LuArrowRight, LuMonitorPlay, LuTrendingUp } from "react-icons/lu";
import { HomeIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem
        icon={<HomeIcon size={20} />}
        text="Home"
        link="/"
        active={true}
        alert={false}
      />
      <SidebarMenuItem
        icon={<LuTrendingUp size={20} />}
        text="Trending"
        link="/"
        active={true}
        alert={false}
      />
      <SidebarMenuItem
        icon={<LuMonitorPlay size={20} />}
        text="Subscriptions"
        link="/"
        active={true}
        alert={true}
      />
      <SidebarMenuSeperator />
      <SidebarMenuTitle
        icon={<LuArrowRight size={20} />}
        text="You"
        link="/"
        active={true}
      />
      <ThemeToggler />
    </SidebarMenu>
  );
};
export default Sidebar;
