"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  ChevronFirst,
  ChevronLast,
  Settings,
  Hotel,
  Search,
  Pin,
  Hospital,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Define a type for sidebar items
interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  route?: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: Search, label: "Explore", route: "/explore" },
  { icon: Hotel, label: "Hotels & Restaurants", route: "/hotels" },
  { icon: Pin, label: "Tourist Spots", route: "/tourist" },
  { icon: Hospital, label: "Amenities", route: "/amenities" },
  { icon: Settings, label: "Settings", route: "/settings" },
];

// Define the props for the ModernSidebar component

export const ModernSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("explore");

  const router = useRouter();

  return (
    <div className="flex h-full shadow-lg">
      <motion.div
        initial={{ width: 256 }}
        animate={{ width: isOpen ? 256 : 80 }}
        transition={{ duration: 0.3 }}
        className="bg-background border-r "
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-between items-center ">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="ml-auto"
            >
              {isOpen ? <ChevronFirst /> : <ChevronLast />}
            </Button>
          </div>
          <ScrollArea className="flex-grow">
            <nav className="p-2 space-y-2">
              {sidebarItems.map((item) => (
                <Button
                  key={item.label}
                  variant={activeTab === item.label ? "active" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    !isOpen && "justify-center px-2"
                  )}
                  onClick={() => {
                    setActiveTab(item.label);
                    router.push(`${item?.route}`);
                  }}
                >
                  <item.icon className={cn("h-5 w-5", isOpen && "mr-2")} />
                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="overflow-hidden"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </motion.div>
    </div>
  );
};
