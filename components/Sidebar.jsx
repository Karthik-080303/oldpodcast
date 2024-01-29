"use client";
import React, { useRef } from "react";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import { BiHomeAlt } from "react-icons/bi";
import { FiTrendingUp } from "react-icons/fi";

import { IoSettingsOutline } from "react-icons/io5";
import Youbar from "./Youbar";
import Subscription from "./Subscription";
import { ScrollArea } from "./ui/scroll-area";

const Sidebar = () => {
  // const Siderbar_animation = {
  //   open: {
  //     width: "60",
  //     transition: {
  //       damping: 40,
  //     },
  //   },
  //   closed: {
  //     width: "35",
  //     transition: {
  //       damping: 40,
  //     },
  //   },
  // };
  return (
    <section>
      {/* <div variants={Siderbar_animation} animate={"closed"}> */}
        <ScrollArea className="  h-[90dvh] pl-2 pr-4 sticky top-0 w-60">
          <button className=" p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
            <div className="flex items-center">
              <BiHomeAlt className="mr-4" size={20} />
              <div className="ml-4 hidden md:flex">Home</div>
            </div>
          </button>
          <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
            <div className="flex items-center">
              <div className="mr-4">
                <FiTrendingUp size={20} />
              </div>
              <div className="ml-4 hidden md:flex">Trending</div>
            </div>
          </button>
          <Separator className="my-4" />
          <Youbar />
          <Separator className="my-4" />
          <Subscription />
          <Separator className="my-4" />
          <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
            <div className="flex items-center">
              <div className="mr-4">
                <IoSettingsOutline size={20} />
              </div>
              <div className="ml-4 hidden md:flex">Settings</div>
            </div>
          </button>
        </ScrollArea>
      {/* </div> */}
    </section>
  );
};

export default Sidebar;
