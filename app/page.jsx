import Pin from "@/components/Pin";
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
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((data, index) => {
            return <Pin key={index} data={data} />;
          })}
        </div>
      </ScrollArea>
  );
}
