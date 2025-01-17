import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";

function SideNav() {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: "Teach",
      icon: GraduationCap,
    },
  ];
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      {" "}
      <Image src="/cora.jpg" alt="logo" width={100} height={80} />
      <hr className="mt-7"></hr>
      {/* Menu list */}
      <div classNamw="mt-8">
        {menu.map((item, index) => (
          <div className=" group flex gap-3 mt-1 p-3 text-[20px] items-center text-gray-600 cursor-pointer hover:bg-cyan-600 hover:text-white rounded-md transition-all ease-in-out duration-200">
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
