import Homecard from "@/components/Homecard";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const data = [
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
    {
      title: "Podcast Title",
      channelName: "Channel Name",
    },
  ];

  return (
      <ScrollArea className="h-[90dvh] w-full">
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((data, index) => {
            return <Homecard key={index} data={data} />;
          })}
        </div>
      </ScrollArea>
  );
}
