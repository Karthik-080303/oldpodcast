import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LiaBell, LiaBellSlash } from "react-icons/lia";
import { TbBellRinging } from "react-icons/tb";
import { SlUserFollow, SlUserUnfollow, SlUserFollowing } from "react-icons/sl";

export default function page() {
  return (
    <div className="w-96 p-5">
      <h2 className="flex justify-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Subcriptions
      </h2>

      <div className="flex items-center justify-center p-5">
        <div className="grid grid-cols-5 items-center ">
          <div className="col-span-1">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="col-span-3">Apple Podcast</div>

          <div className="col-span-1">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Subscribed"></SelectValue>
              </SelectTrigger>

              <SelectContent>

                <SelectItem value="subscribe">
                  <div className="flex items-center">
                    <SlUserFollowing className="mr-2 h-5 w-5" />
                    <span>Subscribe</span>
                  </div>
                </SelectItem>

                <SelectItem value="Unsubscribe">
                  <div className="flex items-center">
                    <SlUserUnfollow className="mr-2 h-5 w-5" />
                    <span>Unsubscribe</span>
                  </div>
                </SelectItem>

              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-5">
        <div className="grid grid-cols-5 items-center">
          <div className="col-span-1">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="col-span-3">Apple Podcast</div>

          <div className="col-span-1">
            <Button variant="outline">Subcribed</Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-5">
        <div className="grid grid-cols-5 items-center">
          <div className="col-span-1">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="col-span-3">Apple Podcast</div>

          <div className="col-span-1">
            <Button variant="outline">Subcribed</Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-5">
        <div className="grid grid-cols-5 items-center">
          <div className="col-span-1">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="col-span-3">Apple Podcast</div>

          <div className="col-span-1">
            <Button variant="outline">Subcribed</Button>
          </div>
        </div>
      </div>

      <div className="pb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Subcribed" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              <TbBellRinging className="h-5 w-5" />
              All
            </SelectItem>
            <SelectItem value="personalised">
              <LiaBell className="h-5 w-5" />
              Personalised
            </SelectItem>
            <SelectItem value="none">
              <LiaBellSlash className="h-5 w-5" />
              None
            </SelectItem>
            <SelectItem value="unfollow">
            <div className="flex items-center">
    <SlUserFollow className="h-5 w-5 mr-2" />
    <span>Follow</span>
  </div>
            </SelectItem>
            <SelectItem value="subscribe">
  <div className="flex items-center">
    <SlUserFollowing className="h-5 w-5 mr-2" />
    <span>Subscribe</span>
  </div>
</SelectItem>
<SelectItem value="Unsubscribe">
  <div className="flex items-center">
    <SlUserUnfollow className="h-5 w-5 mr-2" />
    <span>Unsubscribe</span>
  </div>
</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}