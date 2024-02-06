import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "G Pod",
  description: "Podcast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen overflow-y-hidden">
           <Sidebar/>
            <div className="flex flex-col w-full">
              <Nav />
              <ScrollArea>
              {children}
              </ScrollArea>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
