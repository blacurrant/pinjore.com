"use client";

import {  ReactNode, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode
}

export default function Home({ children }: DashboardLayoutProps) {

  console.log(children, "sdasd");
  

  return (
    <div className="w-full max-h-screen flex flex-col gap-2 bg-purple-50 p-2 text-black">
      hi bbg, how do you like this?

    </div>
  );
}
