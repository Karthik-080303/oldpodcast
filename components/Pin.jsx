import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const Pin = ({ data }) => {
  return (
    <Card className=" m-2 overflow-hidden">
      <AspectRatio ratio={16 / 9}>
        <Image src="/thumnail.jpg" fill alt="Image" />
      </AspectRatio>
      <CardContent className="p-2">
        <p>{data.title}</p>
        <div className="flex items-center">
          <RxAvatar size={20} className="mr-2" />

          <CardDescription className=" ml-2">
            {data.channelName}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default Pin;
