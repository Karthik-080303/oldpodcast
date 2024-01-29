import React from "react";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const Subscription = () => {
  return (
    <section>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-4">
            <MdOutlineSubscriptions size={20} />
          </div>
          <div className="ml-4 hidden md:flex">Subscription</div>
        </div>
      </button>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-2">
            <RxAvatar size={20} />
          </div>
          <div className="ml-2 hidden md:flex">You</div>
        </div>
      </button>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-2">
            <RxAvatar size={20} />
          </div>
          <div className="ml-2 hidden md:flex">You</div>
        </div>
      </button>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-2">
            <RxAvatar size={20} />
          </div>
          <div className="ml-2 hidden md:flex">You</div>
        </div>
      </button>
      <button className="p-3 w-full whitespace-nowrap rounded-md text-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
        <div className="flex items-center">
          <div className="mr-2">
            <RxAvatar size={20} />
          </div>
          <div className="ml-2 hidden md:flex">You</div>
        </div>
      </button>
    </section>
  );
};

export default Subscription;
