"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  function login(){

      router.push("/dashboard");

  }

  return(

<div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-6">

<div className="bg-white rounded-3xl shadow-xl border border-[#E5E7EB] w-full max-w-md p-10">

<div className="flex flex-col items-center">

<Image
src="/logo.png"
alt="IDBI"
width={90}
height={90}
/>

<h1 className="text-3xl font-bold text-[#006B5B] mt-5">

ProspectAssist AI

</h1>

<p className="text-center text-gray-500 mt-2">

AI Powered Customer Prospect Identification System

</p>

<p className="text-sm text-[#F58220] mt-1">

Internal Relationship Manager Portal

</p>

</div>

<div className="mt-10 space-y-5">

<div>

<label className="text-sm font-medium">

Official Email

</label>

<input

type="email"

placeholder="relationship.manager@idbi.co.in"

className="mt-2 w-full border rounded-xl p-3 outline-none focus:border-[#00836C]"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

</div>

<div>

<label className="text-sm font-medium">

Password

</label>

<input

type="password"

placeholder="********"

className="mt-2 w-full border rounded-xl p-3 outline-none focus:border-[#00836C]"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

</div>

<button

onClick={login}

className="w-full mt-4 bg-[#00836C] hover:bg-[#006B5B] text-white rounded-xl p-3 font-semibold transition"

>

Sign In

</button>

</div>

<div className="mt-8 text-center">

<p className="text-xs text-gray-500">

Authorized personnel only.

</p>

<p className="text-xs text-gray-400 mt-2">

© IDBI Bank • ProspectAssist AI Prototype

</p>

</div>

</div>

</div>

);

}