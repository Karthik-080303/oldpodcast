import SidebarMenu, {
  SidebarMenuChannel,
  SidebarMenuItem,
  SidebarMenuSeperator,
  SidebarMenuTitle,
  ThemeToggler,
} from "../ownComponent/SidebarMenu";
import { LuArrowRight, LuMonitorPlay, LuTrendingUp } from "react-icons/lu";
import { HomeIcon } from "lucide-react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  MdHistory,
  MdOutlineLibraryMusic,
  MdOutlineSettings,
} from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { PiMonitorPlay } from "react-icons/pi";
import { MdOutlineSubscriptions } from "react-icons/md";

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
        icon={<MdOutlineSubscriptions size={20} />}
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
      <SidebarMenuItem
        icon={<PiMonitorPlay size={20} />}
        text="Your Channel"
        link="/yourchannel"
        active={true}
        alert={false}
      />
      <SidebarMenuItem
        icon={<MdHistory size={20} />}
        text="History"
        link="/play"
        active={true}
        alert={false}
      />
      <SidebarMenuItem
        icon={<MdOutlineLibraryMusic size={20} />}
        text="Library"
        link="/"
        active={true}
        alert={false}
      />
      <SidebarMenuItem
        icon={<AiOutlineCloudUpload size={20} />}
        text="Upload"
        link="/upload"
        active={true}
        alert={false}
      />
      <SidebarMenuItem
        icon={<MdOutlineFavoriteBorder size={20} />}
        text="Favourite"
        link="/"
        active={true}
        alert={false}
      />

      <SidebarMenuSeperator />
      <SidebarMenuTitle
        icon={<MdOutlineSubscriptions size={20} />}
        text="Subscription"
        link="/subscription"
        active={true}
      />
      <SidebarMenuChannel
        icon=""
        text="Channel 1"
        link="/"
        active={true}
        alert={false}
      />
      <SidebarMenuChannel
        icon=""
        text="Channel 1"
        link="/"
        active={true}
        alert={false}
      />
      <SidebarMenuChannel
        icon=""
        text="Channel 1"
        link="/"
        active={true}
        alert={false}
      />
      <SidebarMenuChannel
        icon=""
        text="Channel 1"
        link="/"
        active={true}
        alert={false}
      />
      <SidebarMenuChannel
        icon=""
        text="Channel 1"
        link="/"
        active={true}
        alert={false}
      />
      <SidebarMenuChannel
        icon=""
        text="Channel 1"
        link="/"
        active={true}
        alert={false}
      />
      
      <SidebarMenuSeperator />
      <SidebarMenuItem
        icon={<MdOutlineSettings size={20} />}
        text="Settings"
        link="/"
        active={true}
        alert={false}
      />
      <ThemeToggler />
    </SidebarMenu>
  );
};
export default Sidebar;
