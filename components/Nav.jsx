"use clients";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import { ModeToggle } from "./ModeTogle";
import { IoReorderThreeOutline } from "react-icons/io5";
import Image from "next/image";



const Nav = () => {
  return (
    <div className=" flex justify-center p-3 border sticky top-0 z-10 bg-background">
      <div className="flex flex-row absolute left-0 m-2">
       
        <IoReorderThreeOutline size={30} />
        
        <div className="pl-6">
          <Image src="/kg1.jpg" width={40} height={40} alt="kg logo" />
        </div>
      </div>
      <div>
        <form className="flex items-center border border-border rounded-3xl px-4">
          {/* important bg-background focus:outline-none */}
          <input
            type="text"
            placeholder="search"
            className="sm:w-96 border-none h-10 bg-background focus:outline-none"
          />
          <button className=" border-l pl-2">
            <AiOutlineSearch />
          </button>
        </form>
      </div>

      <div className="flex absolute right-3 space-x-3">
        <ModeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
          <AvatarFallback>KG</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Nav;
