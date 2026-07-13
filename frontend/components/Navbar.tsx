"use client";

import { Bell, UserCircle } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-[72px] bg-white border-b border-[#E5E7EB] flex items-center justify-between px-8 shadow-sm">

      {/* Left Section */}

      <div className="flex items-center gap-4">

        <Image
          src="/logo.png"
          alt="IDBI Bank"
          width={55}
          height={55}
          priority
        />

        <div>

          <h1 className="text-[30px] font-bold text-[#006B5B] leading-none">
            ProspectAssist AI
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            AI Powered Customer Prospect Identification System
          </p>

          <p className="text-xs text-[#F58220] mt-1 font-medium">
            Internal Relationship Manager Portal
          </p>

        </div>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-8">

        <button className="relative">

          <Bell
            size={23}
            className="text-[#F58220]"
          />

          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle
            size={42}
            className="text-[#00836C]"
          />

          <div>

            <h3 className="font-semibold text-[#1F2937]">
              Relationship Manager
            </h3>

            <p className="text-sm text-gray-500">
              IDBI Bank
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}