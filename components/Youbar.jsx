import React from "react";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { MdOutlineCloudUpload } from "react-icons/md";

import { MdHistory } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { LuMonitorPlay } from "react-icons/lu";

const Youbar = () => {
  return (
    <section>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-1 hidden md:flex">You</div>
          <div className="ml-1">
            <RxAvatar size={20} />
          </div>
        </div>
      </button>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-4">
            <LuMonitorPlay size={20} />
          </div>
          <div className="ml-4 hidden md:flex">Your Channel</div>
        </div>
      </button>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-4">
            <MdOutlineFavoriteBorder size={20} />
          </div>
          <div className="ml-4 hidden md:flex">Favorite</div>
        </div>
      </button>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-4">
            <MdHistory size={20} />
          </div>
          <div className="ml-4 hidden md:flex">History</div>
        </div>
      </button>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-4">
            <MdOutlineLibraryMusic size={20} />
          </div>
          <div className="ml-4 hidden md:flex">Library</div>
        </div>
      </button>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-4">
            <MdOutlineCloudUpload size={20} />
          </div>
          <div className="ml-4 hidden md:flex">Upload</div>
        </div>
      </button>
    </section>
  );
};

export default Youbar;
