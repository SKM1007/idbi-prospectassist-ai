"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    BrainCircuit,
    FileText,
    LayoutDashboard,
    Settings,
    Users,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Customer Insights",
    icon: Users,
    href: "/customers",
  },
  {
    title: "Prospect Analysis",
    icon: BrainCircuit,
    href: "/customer/CUST001",
  },
  {
    title: "Reports",
    icon: FileText,
    href: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "#",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#0D5C4F] text-white min-h-[calc(100vh-72px)] border-r border-[#0B4A40]">

      {/* Header */}

      <div className="px-6 py-6 border-b border-[#14695B]">

        <h2 className="text-xl font-semibold">
          Navigation
        </h2>

        <p className="text-sm text-green-100 mt-1">
          Relationship Manager Portal
        </p>

      </div>

      {/* Menu */}

      <nav className="py-4">

        {menu.map((item) => {

          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (

            <Link
              key={item.title}
              href={item.href}
              className={`

                flex
                items-center
                gap-4
                px-6
                py-4
                transition-all
                duration-200

                ${
                  active
                    ? "bg-[#006B5B] border-l-4 border-[#F58220]"
                    : "hover:bg-[#14695B]"
                }

              `}
            >

              <Icon
                size={20}
                className={
                  active
                    ? "text-[#F58220]"
                    : "text-white"
                }
              />

              <span className="font-medium">
                {item.title}
              </span>

            </Link>

          );

        })}

      </nav>

    </aside>
  );
}