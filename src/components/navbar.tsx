import { Archive, ArrowDownCircleIcon, Bell, Home, Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full h-13 bg-[#000000] text-white flex justify-between items-center px-5">
      <div>
        <img src="/logo.png" alt="Logo" width={27} />
      </div>
      <div className="flex gap-1">
        <Button className="rounded-full" size={"icon"}>
          <Home />
        </Button>
        <InputGroup className="bg-neutral-900 rounded-3xl border-none w-[370px]">
          <InputGroupInput placeholder="What do you want to play" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <div>
            <Button className="rounded-full">
              <Archive />
            </Button>
          </div>
        </InputGroup>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <span>
            <ArrowDownCircleIcon size={15} />
          </span>
          <Link to="/download" className="text-muted-foreground text-[12px]">
            Install App
          </Link>
        </div>
        <Bell size={15} />
        <ModeToggle />
        <Avatar>
          <AvatarImage
            className="w-8 h-8 rounded-full"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
