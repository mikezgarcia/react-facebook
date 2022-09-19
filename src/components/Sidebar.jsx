import React from "react";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarIcon,
  ClockIcon,
  ComputerDesktopIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow
        src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t39.30808-6/294798036_10221591850658015_5574883134650175976_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=thFCTHwO9yEAX9kMRnq&_nc_ht=scontent.fmnl6-2.fna&oh=00_AT81FNKAg-ICzwqwVkxbk1oys5wGRCi2T6iXBygBpedCXQ&oe=632E0CF3"
        title="profile"
      />

      <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}
